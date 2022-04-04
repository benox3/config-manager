Vim�UnDo� ���N
,<�-[{-@2��An�a��G⪨,`�S�  y                                   aq�V    _�                     �        ����                                                                                                                                                                                                                                                                                                                            �          �   A       V   A    aq��     �   �   �          =======       >                Log::Debug("Increasing timeout to 4 minutes");   3                ini_set('max_execution_time', 360);       U>>>>>>> f921db946 ([EN-5398][fix] remove trigger export as part of creating an offer)5��    �                      �      �               5�_�                    �       ����                                                                                                                                                                                                                                                                                                                            �          �   A       V   A    aq��     �   �   �          <<<<<<< HEAD5��    �                      K                     5�_�                    �       ����                                                                                                                                                                                                                                                                                                                            �          �   A       V   A    aq��     �   �   �              5��    �                      K                     5�_�                    �        ����                                                                                                                                                                                                                                                                                                                            �          �   A       V   A    aq��    �   �   �  x          5��    �                      �                     5�_�                     �        ����                                                                                                                                                                                                                                                                                                                            �          �   A       V   A    aq�U     �              x   <?php        namespace Inturn\Services\Offer;       use DB;   ,use Inturn\Entities\Listing\ListingMetadata;   Uuse Inturn\Repositories\CompanyConfiguration\CompanyConfigurationRepositoryInterface;   0use Inturn\Services\Listing\CloneListingService;   use Log;   use Exception;       ,use App\Events\Offers\OfferQuantitiesEdited;   2use App\Jobs\Listings\TriggerExportOfferUpdateJob;       use App\Models\Bid;   use App\Models\BidCasepack;   use App\Models\BidItem;   use App\Models\BidItemSize;   use App\Models\Catalog;   use App\Models\Listing;   use App\Models\ListingCasepack;   use App\Models\ListingItem;   use App\Models\User;   use App\Models\ListingBuyer;       -use Illuminate\Foundation\Bus\DispatchesJobs;       4use Inturn\Queries\Listings\ListingCasepacksFetcher;   0use Inturn\Queries\Listings\ListingSizesFetcher;   0use Inturn\Queries\Offers\OfferCasepacksFetcher;   ,use Inturn\Queries\Offers\OfferSizesFetcher;   (use Inturn\Queries\Offers\OffersFetcher;       *use Inturn\Services\ServiceWithValidation;   -use Inturn\Services\Offer\SubmitOfferService;   3use Inturn\Services\Offer\DraftOfferCreatorService;   6use Inturn\Services\Listing\ConflictResolutionService;   <use Inturn\Services\Offer\InventoryCasepackReductionService;   8use Inturn\Services\Offer\InventoryItemReductionService;       :use Inturn\Services\Validators\Offer\AcceptOfferValidator;   /use Inturn\Queries\Views\ListingSummaryFetcher;   ;use Inturn\Services\Listing\UpdateListingQuantitiesService;       $use App\Events\Offers\OfferAccepted;   'use Inturn\Services\Offer\DeclineOffer;   :use Inturn\Services\Inventory\RecordCatalogHistoryService;   use App\Models\CatalogHistory;   use Carbon\Carbon;       7use Inturn\Services\Allocation\AllocationDeleteService;   !use App\Inturn\Util\MemoryHelper;       /**   6 * @todo The conflict resolution logic should be moved    *       to a separate class.    */       6class AcceptOfferService extends ServiceWithValidation   {       use DispatchesJobs;       /** @var \App\Models\Bid */       protected $offer;       protected $user;       #    /** @var \App\Models\Listing */       protected $listing;       !    protected $offerSizesFetcher;   %    protected $offerCasepacksFetcher;   #    protected $listingSizesFetcher;   '    protected $listingCasepacksFetcher;   #    protected $declineOfferService;       .    protected $updateListingQuantitiesService;           /**        * Constructor.        *   &     * @param \App\Models\Bid   $offer        */   7    public function __construct(Bid $offer, User $user)       {   ;        $this->offerSizesFetcher = new OfferSizesFetcher();   C        $this->offerCasepacksFetcher = new OfferCasepacksFetcher();   ?        $this->listingSizesFetcher = new ListingSizesFetcher();   G        $this->listingCasepacksFetcher = new ListingCasepacksFetcher();   8        $this->declineOfferService = new DeclineOffer();   U        $this->updateListingQuantitiesService = new UpdateListingQuantitiesService();               $this->offer = $offer;           $this->user = $user;   4        $this->listing = $this->getCurrentListing();   G        $this->allocationDeleteService = new AllocationDeleteService();       }           /**        * Accept current offer.        *        * @return  \App\Models\Bid        *        * @throws  Exception        */   !    public function acceptOffer()       {   Q        $this->setValidator(new AcceptOfferValidator($this->offer, $this->user));       2        $this->offer->copyTotalSizesFromListing();       !        if (!$this->validate()) {   6            throw new Exception('Could not validate');   	        }       5        $currentCompany = $this->getCurrentCompany();       )        if ($currentCompany->isBuyer()) {   2            return $this->acceptOfferFromSeller();   	        }       *        if ($currentCompany->isSeller()) {   1            return $this->acceptOfferFromBuyer();   	        }       }       (    private function createAcceptedBid()       {   ,        $this->removeIsCurrentBoolAndSave();   p        $draftOfferService = new DraftOfferCreatorService($this->listing, $this->listing->company, $this->user);   F        $draftOfferService->cloneOfferAndMarkAsAccepted($this->offer);       }       *    private function reduceItemInventory()       {   @        $reductionService = new InventoryItemReductionService();   >        $reductionService->reduceByBidSizes($this->offer->id);       }       .    private function reduceCasepackInventory()       {   1        $bidCasepacks = $this->getCasepackBids();   D        $reductionService = new InventoryCasepackReductionService();       ?        $reductionService->reduceByCasepackBids($bidCasepacks);       }       +    private function updateCatalogHistory()       {   3        $catalogIds = $this->getAllCatalogsInBid();       I        $recordCatalogHistoryService = new RecordCatalogHistoryService();   -        foreach ($catalogIds as $catalogId) {   F            // included trashed in the case of the catalog was deleted   %            // but the items were not   @            $catalog = Catalog::withTrashed()->find($catalogId);   Z            $recordCatalogHistoryService->record($catalog, CatalogHistory::TRIGGER_OFFER);   	        }       }           /**   4     * Being a seller, accept an offer from a buyer.        *        * @return  boolean        */   *    public function acceptOfferFromBuyer()       {           try {   P            // Notifiying how many memory used I have before to accept the offer   �            Log::Info("Memory before to start accepting the offer {$this->offer->id} at: " . MemoryHelper::GetMemoryPeakInKilobytes() . " KB ");   >            // This one make sure to don't save any query logs   *            if (env('APP_DEBUG', false)) {   4                DB::connection()->disableQueryLog();               }               try {   (                $relatedListingIds = [];   '                DB::beginTransaction();   6                $companyId = $this->offer->company_id;   6                $listingId = $this->offer->listing_id;   q                Log::info("Initiating accepting offer {$this->offer->id} on listing {$this->offer->listing_id}");   >                Log::Debug("Increasing timeout to 6 minutes");   W                ini_set('max_execution_time', env('ACCEPT_OFFERS_MAX_EXEC_TIME', 360));                       try {   H                    Log::info('1. Accepting offer: '. $this->offer->id);       I                    $previousOffer = Bid::where('company_id', $companyId)   9                        ->where('listing_id', $listingId)   <                        ->where('bid.is_current', '=', true)   ;                        ->where('status', '=', 'COUNTERED')   4                        ->orderBy('version', 'DESC')   "                        ->first();   7                    $previousOffer->is_current = false;   +                    $previousOffer->save();       4                    $this->offer->is_current = true;   2                    $this->offer->setToAccepted();   )                    $now = Carbon::now();   m                    $this->offer->accepted_at = $this->offer->submitted = $this->offer->last_modified = $now;   K                    $this->offer->creator_login_id = $this->user->login_id;   )                    $this->offer->save();   )                } catch (\Exception $e) {   V                    Log::error('Accepting offer (1st step) failed'. $e->getMessage());                       throw $e;                   }                       try {   =                    Log::info("2. Updating item quantities");   1                    $this->reduceItemInventory();   )                } catch (\Exception $e) {   _                    Log::error('Updating item quantities (2nd step) failed'. $e->getMessage());                       throw $e;                   }                       try {   A                    Log::info("3. Updating casepack quantities");   5                    $this->reduceCasepackInventory();   )                } catch (\Exception $e) {   c                    Log::error('Updating casepack quantities (3rd step) failed'. $e->getMessage());                       throw $e;                   }                       try {   E                    Log::info("4. Updating listing item quantities");   l                    $this->updateListingQuantitiesService->updateQuantities($this->getCurrentListing()->id);   )                } catch (\Exception $e) {   g                    Log::error('Updating listing item quantities (4th step) failed'. $e->getMessage());                       throw $e;                   }                       try {   N                    Log::info("5. Updating all other offers in this listing");   8                    $this->runConflictResolutionLogic();   N                    array_push($relatedListingIds, $this->offer->listing->id);   )                } catch (\Exception $e) {   p                    Log::error('Updating all other offers in this listing (5th step) failed'. $e->getMessage());                       throw $e;                   }                       try {   /                    // 7. Update other listings   @                    Log::info("6. Updating all other listings");   F                    $relatedListingIds = $this->updateOtherListings();   ?                    array_push($relatedListingIds, $listingId);   L                    Log::info("6.1. Listing to Update", $relatedListingIds);   )                } catch (\Exception $e) {   b                    Log::error('Updating all other listings (6th step) failed'. $e->getMessage());                       throw $e;                   }                       try {   ?                    Log::info("7. Close Autoclosing listings");   8                    // 8. Auto-close listing if possible   7                    if ($this->canAutoCloseListing()) {   :                        Log::info("Auto-closing listing");   .                        $this->closeListing();                       }   )                } catch (\Exception $e) {   a                    Log::error('Close Autoclosing listings (7th step) failed'. $e->getMessage());                       throw $e;                   }                       try {   =                    Log::info("8. Updating catalog history");   2                    $this->updateCatalogHistory();   )                } catch (\Exception $e) {   _                    Log::error('Updating catalog history (8th step) failed'. $e->getMessage());                       throw $e;                   }                       try {   I                    Log::info("9. Deleting item & casepack allocations");   R                    $this->allocationDeleteService->deleteFromOffer($this->offer);   )                } catch (\Exception $e) {   k                    Log::error('Deleting item & casepack allocations (9th step) failed'. $e->getMessage());                       throw $e;                   }       5                Log::info("10. Acceptance complete");   0                $this->fireOfferAcceptedEvent();   h                // Logging how many memory used with the offer accepted before to commit to the database   �                Log::Info("Memory used with the offer {$this->offer->id} accepted at: " . MemoryHelper::GetMemoryPeakInKilobytes() . " KB ");                   DB::commit();               }                catch(Exception $e){                   DB::rollback();   J                Log::error("Failed to accept offer: " . $this->offer->id);                   throw $e;               }   	        }           finally {   b            //Enabling the query log in order to log any other queries after to the accept process   *            if (env('APP_DEBUG', false)) {   3                DB::connection()->enableQueryLog();               }   	        }               return $this->offer;       }       1    private function removeIsCurrentBoolAndSave()       {   )        $this->offer->is_current = false;           $this->offer->save();       }           /**   0     * Being a buyer, agree to a seller's offer.   1     * (in other words - clone seller's offer and   2     * counteroffer/submit it without any changes)        *        * @return  Bid        */   +    public function acceptOfferFromSeller()       {           $offer = null;   1        DB::transaction(function() use ($offer) {   2            $listing = $this->getCurrentListing();                    // 1. Create a draft   g            $service = new DraftOfferCreatorService($listing, $this->offer->buyerCompany, $this->user);   7            $draftOffer = $service->createDraftOffer();       0            // 2. Submit the newly created draft   L            $service = new SubmitOfferService($draftOffer->id, $this->user);       -            $offer = $service->submitOffer();           });               return $offer;       }           /**   (     * Set the offer status to ACCEPTED.        *        * @return  boolean        */   ,    private function updateOfferAsAccepted()       {   4        $this->offer->status = Bid::STATUS_ACCEPTED;       $        return $this->offer->save();       }           /**   1     * Delete all the drafts on this negotiation.        *        * @return  boolean        */   .    private function removeNegotiationDrafts()       {   >        $draftRemoverService = new DraftOfferRemoverService();       I        return $draftRemoverService->removeDraftOffers($this->offer->id);       }           /**   5     * Update bid quantities for the specified offer.        *   &     * @param  \App\Models\Bid  $offer        *        * @return void        */   9    private function updateSelectedQuantities(Bid $offer)       {   -        $bidItemSizes = BidItemSize::select([   $            'bid_line_item_size.id',   *            'bid_line_item_size.quantity',   7            'listing_line_item_size.quantity_remaining'   
        ])   g            ->leftJoin('bid_line_item', 'bid_line_item.id', '=', 'bid_line_item_size.bid_line_item_id')   ^            ->leftJoin('listing_line_item_size', 'listing_line_item_size.size_detail_id', '=',   4                'bid_line_item_size.size_detail_id')   L            ->where('listing_line_item_size.listing_id', $offer->listing_id)   k            ->whereRaw('listing_line_item_size.casepack_id IS NOT DISTINCT FROM bid_line_item.casepack_id')   7            ->where('bid_line_item.bid_id', $offer->id)   d            ->where('listing_line_item_size.quantity_remaining', '<', 'bid_line_item_size.quantity')               ->get();       1        foreach ($bidItemSizes as $bidItemSize) {   F            $bidItemSize->quantity = $bidItemSize->quantity_remaining;   !            $bidItemSize->save();   	        }       }           /**   )     * Run the conflict resolution logic.        *        * @return  void        */   1    private function runConflictResolutionLogic()       {   .        $listing = $this->getCurrentListing();       K        $conflictResolutionService = app(ConflictResolutionService::class);   S        $conflictResolutionService->resolveListingConflicts($listing, $this->user);   C        $conflictResolutionService->setDeletedForZeroQty($listing);       }           /**   E     * getAllCatalogsInBid Get the catalogs in the offer based on the   6     * BidItems (this will include items in casepacks)        * @return [Array]        */   *    private function getAllCatalogsInBid()       {   G        $catalogsFromItems = BidItem::where('bid_id', $this->offer->id)   R            ->join('line_item', 'line_item.id', '=', 'bid_line_item.line_item_id')   "            ->select('catalog_id')               ->distinct()   !            ->pluck('catalog_id')               ->toArray();       "        return $catalogsFromItems;       }           /**        * @throws Exception        */   *    private function updateOtherListings()       {   2        // find via raw sql, careful of deleted_at   :        $updatedListingIds = $this->findRelatedListings();   O        Log::debug("Related Listings", $this->listing->id, $updatedListingIds);       H        /** @var ConflictResolutionService $conflictResolutionService */   K        $conflictResolutionService = app(ConflictResolutionService::class);   4        foreach ($updatedListingIds as $listingId) {   4            if ($listingId === $this->listing->id) {                   continue;               }       (            /** @var Listing $listing */   1            $listing = Listing::find($listingId);       &            if ($listing->isNamed()) {   f                $conflictResolutionService->resolveUnpublishedListingConflicts($listing, $this->user);                   continue;               }       P            $this->updateListingQuantitiesService->updateQuantities($listingId);                   if ($listing) {   [                $conflictResolutionService->resolveListingConflicts($listing, $this->user);               } else {   Z                Log::info("Listing found conflicted, but failed to fetch: " . $listingId);   H                throw new Exception('Could not find listing to update');               }   `            // if the listing and bids have not changed status, it means no conflicts were found   e            Log::debug("Listing and Bid Status", [$listing->status, $listing->bids->last()->status]);   z            if ($listing->isPublished() && ($listing->bids->last()->isDraft() || $listing->bids->last()->isCountered())) {   T                $updatedListingIds = array_diff($updatedListingIds, [$listing->id]);               }   	        }       J        Log::debug("Related Listings send to update", $updatedListingIds);       "        return $updatedListingIds;       }       *    private function findRelatedListings()       {   �        $listingSubSelect = "listing_id IN (SELECT id FROM listing WHERE status IN ('PUBLISHED', 'NAMED') AND deleted_at IS NULL AND company_id = {$this->listing->company_id})";   .        // get all listings sharing line items   �        $listingsWithSharedItems = ListingItem::whereRaw("line_item_id IN (SELECT line_item_id FROM listing_line_item WHERE listing_id = {$this->listing->id})")   ;            ->where("listing_id", "!=", $this->listing->id)   &            ->whereNull('casepack_id')   )            ->whereRaw($listingSubSelect)               ->get()   !            ->pluck('listing_id')               ->toArray();       �        Log::info('Related Listings for Items in Original Listing', $listingsWithSharedItems, $this->listing->id, $this->listing->company_id);       -        // get all listings sharing casepacks   �        $listingsWithSharedCasepacks = ListingCasepack::whereRaw("casepack_id IN (SELECT casepack_id FROM listing_casepack WHERE listing_id = {$this->listing->id})")   ;            ->where("listing_id", "!=", $this->listing->id)   )            ->whereRaw($listingSubSelect)               ->get()   !            ->pluck('listing_id')               ->toArray();       �        Log::info('Related Listings for Casepacks in Original Listing', $listingsWithSharedCasepacks, $this->listing->id, $this->listing->company_id);       *        // return a union of the two lists   b        $fullListOfListings = array_merge($listingsWithSharedCasepacks, $listingsWithSharedItems);       1        return array_unique($fullListOfListings);       }           /**   !     * Get all the casepack bids.        *   3     * @todo    Check if the method name is correct   3     *          (casepack bids vs casepack offers).        *   3     * @return  Collection[\App\Models\BidCasepack]        */   &    private function getCasepackBids()       {   +        return $this->offerCasepacksFetcher   /            ->filterByOfferId($this->offer->id)               ->get();       }           /**   5     * Get listing associated with the current offer.        *   "     * @return \App\Models\Listing        */   (    private function getCurrentListing()       {   &        if (is_null($this->listing)) {   3            $this->listing = $this->offer->listing;   	        }               return $this->listing;       }           /**   '     * @todo    This should be changed.        *         * @return  \App\Models\User        */       private function getUser()       {           return $this->user;       }           /**   #     * @return  \App\Models\Company        */   (    private function getCurrentCompany()       {   )        return $this->getUser()->company;       }           /**   $     * Fire the OfferAccepted event.        *        * @return  void        */   -    private function fireOfferAcceptedEvent()       {   ,        /** @var \App\Models\User $buyers */   *        /** @var \App\Models\Bid $offer */               $offer = $this->offer;   0        $buyers = $offer->listing_buyer_users();   !        $initiator = $this->user;       %        foreach ($buyers as $buyer) {   e            event(new OfferAccepted($offer->toEntity(), $initiator->toEntity(), $buyer->toEntity()));                   return;   	        }       }       *    private function canAutoCloseListing()       {   )        // Check if listing can be closed   i        $listingBuyers = ListingBuyer::where('listing_buyer.listing_id', '=', $this->listing->id)->get();               $closeListing = true;   3        foreach ($listingBuyers as $listingBuyer) {   ?            $bid = Bid::where('listing_id', $this->listing->id)   >                ->where('company_id', $listingBuyer->buyer_id)   +                ->where('is_current', true)   ,                ->orderBy('version', 'desc')                   ->first();       2            //make sure we actually get a bid back               if (!$bid) {                   continue;               }       #            $status = $bid->status;   W            if (Bid::STATUS_ACCEPTED !== $status && Bid::STATUS_DECLINED !== $status) {   &                $closeListing = false;                   break;               }   	        }               return $closeListing;       }           /**   )     * Close the current listing and fire   (     * a ListingClosed event on success.        *        * @return boolean        */   #    private function closeListing()       {   )        Log::info("Closing the listing");       >        $offers = Bid::where('listing_id', $this->listing->id)   9            ->where('status', '=', Bid::STATUS_COUNTERED)   '            ->where('is_current', true)               ->get();       =        Log::info("Found " . count($offers) . " to decline");   %        foreach ($offers as $offer) {   6            Log::info("Declining offer {$offer->id}");   E            $this->declineOfferService->decline($offer, $this->user);   	        }       8        $this->listing->status = Listing::STATUS_CLOSED;   4        $this->setListingCurrentVisibleAttributes();       (        $saved = $this->listing->save();               return $saved;       }       ;    private function setListingCurrentVisibleAttributes() {   ^        $companyConfigRepository = \App::make(CompanyConfigurationRepositoryInterface::class);       u        $availableAttributes = $companyConfigRepository->getOrDefault($this->listing->company_id, 'buyerAttributes');       F        $attrs = explode(',', $availableAttributes->getPrunedValue());   D        $metadata = (new ListingMetadata($this->listing))->metadata;           data_set(               $metadata,   2            'listing_metadata.visible_attributes',               array_intersect(                   $attrs,   N                data_get($metadata, 'listing_metadata.visible_attributes', [])               )   
        );       :        $this->listing->metadata = json_encode($metadata);       }   }5�5��