VimUnDoå `HĆūÓ1?QOz.<³+w`OQĒ°L#2N  7                                 `­lÄ    _Š                     Q        ’’’’                                                                                                                                                                                                                                                                                                                                                             ` ä     õ              6   <?php       Iuse App\Inturn\Services\Cache\ResponseCache\ResponseCacheHelper as cache;   use Dingo\Api\Routing\Router;   %use Illuminate\Support\Facades\Route;       $api = app('api.router');   %$version1 = env('API_VERSION', 'v1');   )$version2 = env('NEW_API_VERSION', 'v2');       /*   K|--------------------------------------------------------------------------   | Application Routes   K|--------------------------------------------------------------------------   |   F| Here is where you can register all of the routes for an application.   B| It's a breeze. Simply tell Laravel the URIs it should respond to   @| and give it the controller to call when that URI is requested.   |    */       K// Microservice routes are only accessable by jwt tokens with 'service' iss   $api->group([       'middleware' => [           'jwt.service.auth',           'bind.model'       ],   &    'namespace' => 'Api\\' . $version1   ], function ($api) {   @    $api->get('upload/s3Policy', 'S3PolicyController@s3Policy');   ?    $api->post('upload/configs', 'S3PolicyController@configs');   @    $api->get('upload/configs', 'S3PolicyController@getConfig');   B    $api->get('attribute-types', 'AttributeTypeController@index');   P    $api->delete('cache/{companies}', 'CompanyRedisCacheFlushController@flush');   });       $api->group([       'middleware' => [           'transaction',           'bind.model',       ],   '    'namespace' => 'Api\\' . $version1,   ], function ($api) {   \    $api->post('/offers/{offers}/publish-with-po', 'OfferController@exportReadyForPublish');   B    $api->get('/listings/download', 'ListingController@download');           /** PDP */   U    $api->get('/pdp/{pdpHash}/item_bids/{item_bids}', 'Pdp\PdpItemController@index');   a    $api->get('/pdp/{pdpHash}/casepack_bids/{casepack_bids}', 'Pdp\PdpCasepackController@index');   });       $api->group([       'prefix' => '_internal',   "    'namespace' => 'Api\Internal',       'middleware' => [           'jwt.service.auth',           'transaction',       ],   ], function ($api) {   .    $api->resource('users', 'UserController');   5    $api->resource('companies', 'CompanyController');   });       /**    * Routes for API version 1.    */   $api->group([       'middleware' => [           'throttle:500,1',           'jwt.auth',           'transaction',           'bind.model',       ],   '    'namespace' => 'Api\\' . $version1,   ], function (Router $api) {       &    /* Me a.k.a My company and user */   J    $api->get('me', ['as' => 'me.index', 'uses' => 'MeController@index']);       .    $api->resource('users', 'UserController');   8    $api->post('users', 'UserController@searchByUUIDs');   @    $api->post('users/{users}/avatar', 'UserController@avatar');   J    $api->get('users/{users}/categories', 'UserCategoryController@index');   K    $api->put('users/{users}/categories', 'UserCategoryController@update');           /* User Connections */   O    $api->post('users/{users}/connections', 'UserConnectionsController@store');   S    $api->delete('users/{users}/connections', 'UserConnectionsController@destroy');           /* Inventory Endpoints */   Z    $api->group(['middleware' => cache::invalidate('inventory')], function (Router $api) {   E        $api->post('inventory/upload', 'InventoryController@upload');   N        $api->post('inventory/json/upload', 'InventoryController@jsonUpload');       `        $api->delete('inventory/items/{redisKey}', 'InventoryController@deleteItemsByRedisKey');   h        $api->delete('inventory/casepacks/{redisKey}', 'InventoryController@deleteCasepacksByRedisKey');           /* End */       });           /* Sync */   R    $api->patch('catalogs/{catalogs}/images/sync', 'ImageSyncController@catalog');   J    $api->patch('inventory/images/sync', 'ImageSyncController@inventory');   `    $api->get('catalogs/{catalogs}/products', 'RetrieveCatalogForImageSyncController@products');           /* Casepacks */   6    $api->resource('casepacks', 'CasepackController');   M    $api->get('casepacks/{casepacks}/max', 'CasepackController@maxPossible');   R    $api->post('casepacks/{casepacks}/check', 'CasepackController@checkQuantity');           /* Casepack Items */   @    $api->resource('casepacks.items', 'CasepackItemController');           /* Casepack Item Size */   _    $api->get('casepacks/{casepacks}/items/{items}/sizes', 'CasepackItemSizeController@index');       $api->put(   P        'casepacks/{casepacks}/items/{casepackItems}/sizes/{casepackItemSizes}',   +        'CasepackItemSizeController@update'       );       $api->get(   P        'casepacks/{casepacks}/items/{casepackItems}/sizes/{casepackItemSizes}',   )        'CasepackItemSizeController@show'       );       $api->delete(   P        'casepacks/{casepacks}/items/{casepackItems}/sizes/{casepackItemSizes}',   ,        'CasepackItemSizeController@destroy'       );           /* Companies */   7    $api->resource('companies', 'CompaniesController');   A    $api->post('companies', 'CompaniesController@searchByUUIDs');   M    $api->post('companies/{companies}/avatar', 'CompaniesController@avatar');   U    $api->post('companies/{companies}/background', 'CompaniesController@background');            /* Company Configurations */   R    $api->resource('companies.configurations', 'CompanyConfigurationsController');           /* Catalogs */   4    $api->resource('catalogs', 'CatalogController');       N    $api->get('catalogs/{catalogs}/markets', 'CatalogMarketController@index');   S    $api->post('catalogs/{catalogs}/images/batch', 'CatalogImageController@batch');   O    $api->get('catalogs/{catalogs}/history', 'CatalogHistoryController@index');           /* Items */   .    $api->resource('items', 'ItemController');       B    $api->resource('items.attributes', 'ItemAttributeController');   :    $api->resource('items.images', 'ItemImageController');   8    $api->resource('items.sizes', 'ItemSizeController');   :    $api->resource('items.prices', 'ItemPriceController');           /* Markets */   3    $api->get('markets', 'MarketController@index');           /* Listings */   =    $api->get('listings/create', 'ListingController@create');       $api->put(           'listings/{listings}',   ^        ['middleware' => cache::invalidate('inventory'), 'uses' => 'ListingController@update']       );   N    $api->resource('listings', 'ListingController', ['except' => ['update']]);   Q    $api->resource('listings.companies.offers', 'ListingCompanyOfferController');   b    $api->resource('listings.companies.offers.item-bids', 'ListingCompanyOfferItemBidController');   r    $api->resource('/listings/{listings}/negotiations/{companies}/items/{items}/bids', 'LineItemOfferController');       $api->resource(   S        '/listings/{listings}/negotiations/{companies}/casepacks/{casepacks}/bids',   !        'CasepackOfferController'       );   j    $api->resource('listings.companies.offers.casepack-bids', 'ListingCompanyOfferCasepackBidController');   @    $api->resource('listings.offers', 'ListingOfferController');   M    $api->get('listings/{listings}/buyers/', 'ListingBuyerController@index');   N    $api->post('listings/{listings}/buyers/', 'ListingBuyerController@store');   a    $api->delete('listings/{listings}/buyers/{buyers}', 'ListingBuyerController@destroy')->where(           'buyers',           '[0-9]+'       );   `    $api->delete('listings/{listings}/buyers/{email}', 'ListingBuyerController@destroyByEmail');   _    $api->post('listings/{listings}/export-ready', 'ListingController@negotiationExportReady');   a    $api->post('listings/{listings}/export-failed', 'ListingController@negotiationExportFailed');           /* Listing Items*/   Q    $api->get('listings/{listings}/items/{items}', 'ListingItemController@show');       /* Listing Item Sizes */   [    $api->get('listings/{listings}/items/{items}/sizes', 'ListingItemSizeController@show');       Z    $api->group(['middleware' => cache::invalidate('inventory')], function (Router $api) {           /* Listing Items*/   _        $api->post('listings/{listings}/items/{items}/bid', 'ListingItemController@createBid');   a        $api->delete('listings/{listings}/items/{items}/bid', 'ListingItemController@deleteBid');   d        $api->post('listings/{listings}/items/{redisKey}', 'ListingItemController@storeByRedisKey');   g        $api->delete('listings/{listings}/items/{redisKey}', 'ListingItemController@deleteByRedisKey');   g        $api->post('listings/{listings}/items/{items}/distribute', 'ListingItemController@distribute');            /* Listing Item Sizes */   a        $api->put('listings/{listings}/items/{items}/sizes', 'ListingItemSizeController@update');   m        $api->delete('listings/{listings}/items/{items}/sizes/{sizes}', 'ListingItemSizeController@destroy');   d        $api->post('listings/{listings}/items/{redisKey}/sizes', 'ListingItemSizeController@store');   %        /* Listing Item Allocations*/           $api->post(   >            'listings/{listings}/item-allocations/{redisKey}',   =            'ListingItemAllocationController@storeByRedisKey'   
        );           $api->delete(   >            'listings/{listings}/item-allocations/{redisKey}',   >            'ListingItemAllocationController@deleteByRedisKey'   
        );       });           /* Listing Casepacks*/   R    $api->get('listings/{listings}/casepacks', 'ListingCasepackController@index');   ]    $api->get('listings/{listings}/casepacks/{casepacks}', 'ListingCasepackController@show');       /* Listing Casepack Sizes*/   g    $api->get('listings/{listings}/casepacks/{casepacks}/sizes', 'ListingCasepackSizeController@show');       Z    $api->group(['middleware' => cache::invalidate('inventory')], function (Router $api) {           /* Listing Casepacks*/   k        $api->post('listings/{listings}/casepacks/{casepacks}/bid', 'ListingCasepackController@createBid');   m        $api->delete('listings/{listings}/casepacks/{casepacks}/bid', 'ListingCasepackController@deleteBid');   l        $api->post('listings/{listings}/casepacks/{redisKey}', 'ListingCasepackController@storeByRedisKey');   o        $api->delete('listings/{listings}/casepacks/{redisKey}', 'ListingCasepackController@deleteByRedisKey');   #        /* Listing Casepack Sizes*/   m        $api->put('listings/{listings}/casepacks/{casepacks}/sizes', 'ListingCasepackSizeController@update');           $api->delete(   F            'listings/{listings}/casepacks/{casepacks}/sizes/{sizes}',   3            'ListingCasepackSizeController@destroy'   
        );   l        $api->post('listings/{listings}/casepacks/{redisKey}/sizes', 'ListingCasepackSizeController@store');   )        /* Listing Casepack Allocations*/           $api->post(   B            'listings/{listings}/casepack-allocations/{redisKey}',   A            'ListingCasepackAllocationController@storeByRedisKey'   
        );           $api->delete(   B            'listings/{listings}/casepack-allocations/{redisKey}',   B            'ListingCasepackAllocationController@deleteByRedisKey'   
        );       });           /* Batch operations */   :    $api->post('batch', 'BatchController@batchOperation');       !    /* Searches a.k.a. Filters */   V    $api->group(['middleware' => cache::create('inventory')], function (Router $api) {   i        $api->post('searches/items', ['as' => 'searches.items', 'uses' => 'SearchItemController@index']);               $api->get(   (            'searches/items/{redisKey}',   X            ['as' => 'searches.items', 'uses' => 'SearchItemController@indexByRedisKey']   
        );       9        $api->post('searches/items/summary/{redisKey}', [   -            'as' => 'searches.summary.items',   ?            'uses' => 'SearchItemController@summaryByRedisKey',           ]);       =        $api->post('searches/casepacks/summary/{redisKey}', [   1            'as' => 'searches.summary.casepacks',   C            'uses' => 'SearchCasepackController@summaryByRedisKey',           ]);       V        $api->post('searches/items/{redisKey}/rollup', 'SearchItemController@rollup');       ^        $api->post('searches/catalogs/{catalogs}/items', 'SearchCatalogItemController@index');           $api->get(   <            'searches/catalogs/{catalogs}/items/{redisKey}',   9            'SearchCatalogItemController@indexByRedisKey'   
        );   p        $api->get('searches/catalogs/{catalogs}/items/{redisKey}/rollup', 'SearchCatalogItemController@rollup');               $api->post(   !            'searches/casepacks',   V            ['as' => 'searches.casepacks', 'uses' => 'SearchCasepackController@index']   
        );       M        $api->post('searches/casepacks/key', 'SearchCasepackController@key');   E        $api->post('searches/items/key', 'SearchItemController@key');       _        $api->get('searches/casepacks/{redisKey}', 'SearchCasepackController@indexByRedisKey');   ^        $api->post('searches/casepacks/{redisKey}/rollup', 'SearchCasepackController@rollup');       f        $api->post('searches/catalogs/{catalogs}/casepacks', 'SearchCatalogCasepackController@index');           $api->get(   @            'searches/catalogs/{catalogs}/casepacks/{redisKey}',   =            'SearchCatalogCasepackController@indexByRedisKey'   
        );           $api->get(   G            'searches/catalogs/{catalogs}/casepacks/{redisKey}/rollup',   4            'SearchCatalogCasepackController@rollup'   
        );       });       U    $api->get('searches/offers/attributes', 'SearchOfferAttributesController@index');   ]    $api->get('searches/offers/{offers}/attributes', 'SearchOfferAttributesController@show');   T    $api->post('searches/offers/{offers}/items', 'SearchOfferItemController@index');   h    $api->get('searches/offers/{offers}/items/{redisKey}', 'SearchOfferItemController@indexByRedisKey');   \    $api->post('searches/offers/{offers}/casepacks', 'SearchOfferCasepackController@index');       $api->get(   8        'searches/offers/{offers}/casepacks/{redisKey}',   7        'SearchOfferCasepackController@indexByRedisKey'       );   h    $api->post('searches/offers', ['as' => 'searches.offers', 'uses' => 'SearchOfferController@index']);   U    $api->get('searches/offers/{redisKey}', 'SearchOfferController@indexByRedisKey');       $api->get(   8        'searches/offers/{offers}/casepacks/{redisKey}',   7        'SearchOfferCasepackController@indexByRedisKey'       );       j    $api->get('searches/companies/{companies}/inventory-categories', 'CompanyAttributesController@index');   f    $api->get('searches/companies/{companies}/categories', 'SearchCompanyCategoriesController@index');   [    $api->get('searches/companies/{companies}/users', 'SearchCompanyUserController@index');   p    $api->get('searches/companies/{companies}/users/{redisKey}', 'SearchCompanyUserController@indexByRedisKey');       ]    $api->post('searches/companies/{companies}/users/', 'SearchCompanyUserController@store');       T    $api->post('searches/item-allocations', 'SearchItemAllocationController@index');   h    $api->get('searches/item-allocations/{redisKey}', 'SearchItemAllocationController@indexByRedisKey');   c    $api->delete('searches/item-allocations/{redisKey}', 'SearchItemAllocationController@destroy');       $api->get(   B        'searches/item-allocations/{redisKey}/allocation-rollups',   /        'SearchItemAllocationController@rollup'       );       \    $api->post('searches/casepack-allocations', 'SearchCasepackAllocationController@index');       $api->get(   3        'searches/casepack-allocations/{redisKey}',   <        'SearchCasepackAllocationController@indexByRedisKey'       );   k    $api->delete('searches/casepack-allocations/{redisKey}', 'SearchCasepackAllocationController@destroy');           /* Allocation */   M    $api->get('users/{users}/allocations', 'UserAllocationController@index');       V    $api->post('searches/offers/{offers}/items/key', 'SearchOfferItemController@key');   ^    $api->post('searches/offers/{offers}/casepacks/key', 'SearchOfferCasepackController@key');           /////////////////////////       /// allocation start       /////////////////////////       o    $api->get('casepacks/{casepacks}/allocations/{allocations}', 'AllocationController@getAllocationCasepack');   F    $api->get('allocations/schema', 'AllocationController@getSchema');   c    $api->get('items/{items}/allocations/{allocations}', 'AllocationController@getAllocationItem');   Y    $api->get('items/{items}/allocations/rollup', 'ItemAllocationController@itemRollup');   _    $api->get('listings/{listings}/allocations', 'AllocationController@getListingAllocations');       Z    $api->group(['middleware' => cache::invalidate('inventory')], function (Router $api) {   s        $api->put('casepacks/{casepacks}/allocations/{allocations}', 'AllocationController@putAllocationCasepack');   U        $api->put('allocations/items/{redisKey}', 'AllocationController@storeItems');   g        $api->put('items/{items}/allocations/{allocations}', 'AllocationController@putAllocationItem');   ]        $api->put('allocations/casepacks/{redisKey}', 'AllocationController@storeCasepacks');   p        $api->put('listings/{listings}/allocations/{allocations}', 'AllocationController@addListingAllocation');       R        $api->post('allocations/items/{items}', 'AllocationController@storeItem');   ^        $api->post('allocations/casepacks/{casepacks}', 'AllocationController@storeCasepack');   d        $api->post('items/{items}/size-allocations', 'ItemAllocationController@getItemAllocations');   X        $api->post('items/{redisKey}/allocations', 'ItemAllocationController@allocate');       c        $api->delete('allocations/items/{redisKey}', 'AllocationController@deleteItemsAllocation');   k        $api->delete('allocations/casepacks/{redisKey}', 'AllocationController@deleteCasepacksAllocation');   l        $api->delete('casepacks/{redisKey}/allocations', 'AllocationController@deleteCasepacksAllocations');   d        $api->delete('items/{redisKey}/allocations', 'AllocationController@deleteItemsAllocations');           $api->delete(   <            'listings/{listings}/allocations/{allocations}',   :            'AllocationController@deleteListingAllocation'   
        );       });       b    $api->post('listings/{listings}/lock-allocations/', 'AllocationController@lockInAllocations');   Z    $api->post('items/{redisKey}/allocation-rollups', 'AllocationController@rollupItems');   b    $api->post('casepacks/{redisKey}/allocation-rollups', 'AllocationController@rollupCasepacks');           /////////////////////////       /// allocation end       /////////////////////////       a    $api->get('markets/{marketId}/allocation-rollups', 'MarketAllocationRollupController@index');       /* Filtered Offers */   V    $api->get('offers/{offers}/items/{redisKey}/rollup', 'OfferBidController@rollup');           /* Offer Images */   H    $api->get('offers/{offers}/images/', 'OfferImagesController@index');       %    /* Price items based on filter */   Z    $api->group(['middleware' => cache::invalidate('inventory')], function (Router $api) {   Y        $api->put('offers/{offers}/items/bids', 'OfferBidController@bulkPriceByFilters');   \        $api->delete('offers/{offers}/items/{redisKey}/bids', 'OfferBidController@destroy');   W        $api->put('offers/{offers}/items/{redisKey}/bids', 'OfferBidController@price');   Y        $api->post('offers/{offers}/items/{redisKey}/bids', 'OfferBidController@create');       #        /* Casepacks in an Offer */   d        $api->put('offers/{offers}/casepacks/{redisKey}/bids', 'OfferCasepackBidController@update');   h        $api->delete('offers/{offers}/casepacks/{redisKey}/bids', 'OfferCasepackBidController@destroy');   d        $api->post('offers/{offers}/casepacks/{redisKey}/bids', 'OfferCasepackBidController@store');   d        $api->put('offers/{offers}/casepacks/{redisKey}/sizes', 'OfferCasepackBidController@sizes');   c        $api->put('offers/{offers}/casepacks/{redisKey}/bids', 'OfferCasepackBidController@price');       });       b    $api->get('offers/{offers}/casepacks/{redisKey}/rollup', 'OfferCasepackBidController@rollup');       )    /* Price casepacks based on filter */   Z    $api->group(['middleware' => cache::invalidate('inventory')], function (Router $api) {   e        $api->put('offers/{offers}/casepacks/bids', 'OfferCasepackBidController@bulkPriceByFilters');       4        /* Bid Casepapcks (bid_casepack db table) */   e        $api->put('/offers/{offers}/casepacks/{casepack_bids}', 'Bids\BidCasepackController@update');       });           /* Currencies */   8    $api->get('currencies', 'CurrencyController@index');           /* Currency Converter*/   U    $api->get('/currency-conversions/{symbol}', 'CurrencyConverterController@index');           /* Offers (bid db table) */   0    $api->resource('offers', 'OfferController');   N    $api->resource('offers.conflicts', 'Negotiation\OfferConflictController');   L    $api->resource('offers.overlaps', 'Negotiation\OfferOverlapController');   >    $api->resource('offers.uploads', 'OfferUploadController');   =    $api->resource('offers.rollup', 'OfferRollupController');   Z    $api->post('/offers/{redisKey}/rollup-summary', 'OfferRollupSummaryController@index');           /* Backup offers */   J    $api->post('offers/{offers}/backups', 'OfferBackupController@backup');   J    $api->get('offers/{offers}/backups', 'OfferBackupController@backups');   L    $api->post('offers/{offers}/restores', 'OfferBackupController@restore');           /* Offer Users */   C    $api->get('offers/{offers}/users', 'OfferUserController@show');           /* Export offers */   @    $api->get('offers/{offers}/export', 'OfferController@json');   G    $api->get('offers/{offers}/exportbids', 'OfferBidController@json');   G    $api->post('offers/{offers}/exportpo', 'OfferController@createpo');   S    $api->post('offers/exportpo/{redisKey}', 'OfferController@createpoByRedisKey');   S    $api->post('offers/{offers}/updatepostatus', 'OfferController@updatePOStatus');   ^    $api->post('/offers/{offers}/negotiation-export', 'OfferController@exportForNegotiation');   L    $api->post('/offers/{offers}/uploadjson', 'OfferController@uploadjson');           /* Clone offers */   B    $api->post('/offers/{offers}/clone', 'OfferController@clone');       '    /* Bids (bid_line_item db table) */   ]    $api->get('/offers/{offers}/bids', 'Bids\BidItemController@index'); // no longer required   M    $api->get('/offers/{offers}/bids/{bids}', 'Bids\BidItemController@show');   Z    $api->group(['middleware' => cache::invalidate('inventory')], function (Router $api) {   S        $api->put('/offers/{offers}/bids/{bids}', 'Bids\BidItemController@update');       });       -    // These endpoints are not needed anymore   Z    // $api->post('/offers/{offers}/bids/{trashedBids}', 'Bids\BidItemController@create');   V    // $api->delete('/offers/{offers}/bids/{bids}', 'Bids\BidItemController@destroy');       -    // These endpoints are not needed anymore   k    // $api->post('/offers/{offers}/casepacks/{trashedCasepackBids}', 'Bids\BidCasepackController@create');   h    // $api->delete('/offers/{offers}/casepacks/{casepack_bids}', 'Bids\BidCasepackController@destroy');       1    /* Bid Sizes (bid_line_item_size db table) */   X    $api->get('/offers/{offers}/bids/{bids}/sizes', 'Bids\BidItemSizeController@index');   b    $api->get('/offers/{offers}/bids/{bids}/sizes/{bidSizes}', 'Bids\BidItemSizeController@show');   d    $api->put('/offers/{offers}/bids/{bids}/sizes/{bidSizes}', 'Bids\BidItemSizeController@update');            /* Finalized Transactions */   V    $api->resource('offers.finalized-transactions', 'FinalizedTransactionController');           /* User Recommendations */   \    $api->get('recommendations/users', 'Recommendation\UserRecommendationController@index');           /* Dashboard */   [    $api->get('/markets/{marketId}/inventory-total', 'DashboardController@inventoryTotal');   _    $api->get('/markets/{marketId}/inventory-offered', 'DashboardController@inventoryOffered');   f    $api->get('/markets/{marketId}/inventory-not-offered', 'DashboardController@inventoryNotOffered');   T    $api->get('/markets/{marketId}/offer-total', 'DashboardController@offersTotal');           /* User Connections */   ?    $api->post('searches/users', 'SearchUserController@store');   S    $api->get('searches/users/{redisKey}', 'SearchUserController@indexByRedisKey');           /* Add Offer Feedback*/   Y    $api->post('offers/{offers}/feedbacks', 'Negotiation\OfferFeedbackController@store');       8    /* All End Negotiation Reasons for a Company Role */   ]    $api->get('end-negotiation-reasons', 'Negotiation\EndNegotiationReasonController@index');           /** Negotiations */   Z    $api->get('/negotiations/{negotiationId}', 'Negotiation\NegotiationController@index');           /**        * Read Only User Routes        */   B    $api->put('guest/{users}', 'ReadOnlyUserController@register');   N    $api->put('guest/{users}/password', 'ReadOnlyUserController@setPassword');   T    $api->put('guest/{users}/verify/{token}', 'ReadOnlyUserController@verifyEmail');   `    $api->post('guest/{users}/verify/resend', 'ReadOnlyUserController@resendVerificationEmail');   5    $api->get('/filters', 'FiltersController@index');   });       /**   ! * Endpoints without a rate limit    */   o$api->group(['middleware' => ['jwt.auth', 'bind.model'], 'namespace' => 'Api\\' . $version1], function ($api) {   D    $api->post('inventory/images/bulk', 'ImageSyncController@bulk');   });       J$api->resource('users/passwords/reset', 'Api\v1\PasswordResetController');   ^$api->post('users/password/reset/token', 'Api\v1\PasswordResetController@generateResetToken');       /**    * Routes for API version 2.    */   $api->group([       'prefix' => $version2,       'middleware' => [           // 'transaction',           'jwt.auth.v2',           'bind.model.v2',       ],   '    'namespace' => 'Api\\' . $version2,       ], function ($api) {       ^    $api->get('listings/end-reasons/{role?}', 'EndNegotiationReasonController@reasonsByRole');       4    $api->resource('listings', 'ListingController');   A    $api->get('listings:download', 'ListingController@download');   k    $api->get('listings/{listings}/companies/{companie}/offers', 'ListingController@offersByBuyerCompany');   H    $api->get('listings/{listings}/offers', 'ListingController@offers');   6    $api->post('listings', 'ListingController@store');   T    $api->get('/markets/{marketId}/offer-total', 'DashboardController@offersTotal');   @    $api->get('offers/{offers}', 'OfferController@show')->where(           'offers',   F        '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}'       );   F    $api->get('offers/{offerStatus}', 'OfferController@showByStatus');   ³    $api->delete('listings/{listings}/buyers/{buyersUUID}', 'ListingBuyerController@destroy')->where('buyersUUID', '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}');   q    $api->delete('listings/{listings}/buyers/{userEmail}', 'ListingBuyerController@destroy'); //map in middleware   M    $api->post('listings/{listings}/buyers', 'ListingBuyerController@store');   6    $api->post('listings', 'ListingController@store');   K    $api->post('listings/{listings}:publish', 'ListingController@publish');   _    $api->post('listings/{listings}/export-ready', 'ListingController@negotiationExportReady');   a    $api->post('listings/{listings}/export-failed', 'ListingController@negotiationExportFailed');   T    $api->get('/markets/{marketId}/offer-total', 'DashboardController@offersTotal');   0    $api->resource('offers', 'OfferController');   M    $api->post('/packages', 'OfferPackageController@syncFromProductService');   ^    $api->post('/offers/{offers}/packages/{searchKey}', 'OfferPackageController@addPackages');   c    $api->delete('/offers/{offers}/packages/{searchKey}', 'OfferPackageController@removePackages');   b    $api->patch('/offers/{offers}/packages/{searchKey}', 'OfferPackageController@updatePackages');   9    $api->get('offers/{offers}', 'OfferController@show');   O    $api->patch('offers/{offers}/clear-drafts', 'OfferController@clearDrafts');   x    $api->post('offers/{offers}/download/{exportType?}', 'OfferController@download')->where(['exportType' => '[a-z]+']);   O    $api->post('offers/{offers}/exportpo', 'OfferController@generatePOExport');   U    $api->post('listings/{listings}/exportpo', 'ListingController@generatePOExport');   P    $api->get('listings/{listings}/exportpo', 'ListingController@exportPOInfo');   S    $api->post('offers/{offers}/updatepostatus', 'OfferController@updatePOStatus');   >    $api->resource('offers.uploads', 'OfferUploadController');   E    $api->post('searches/listings', 'SearchListingController@index');   P    $api->get('searches/listings/{listingId}', 'SearchListingController@index');   i    $api->get('listings/{listings}/companies/{companies}/offers', 'ListingCompanyOfferController@index');   q    $api->get('listings/{listings}/companies/{companies}/offers/{offers}', 'ListingCompanyOfferController@show');   T    $api->get('listings/{listings}/offers/{offers}', 'ListingOfferController@show');   R    $api->resource('companies.configurations', 'CompanyConfigurationsController');   V    $api->resource('offers.finalized-transactions', 'FinalizedTransactionController');   D    $api->post('sync/companies', 'SyncController@reindexCompanies');   _    $api->post('sync/companies/{companies}/listings', 'SyncController@reindexCompanyListings');   });       E// use normal laravel routing for localhost check, avoid domain check   5Route::get('/healthcheck', 'HealthController@check');55_Š                           ’’’’                                                                                                                                                                                                                                                                                                                               -          -       V   -    `­k“     õ        6    õ        6    5õ                          ~              S       5_Š                           ’’’’                                                                                                                                                                                                                                                                                                                               -          -       V   -    `­k¹    õ        7      R    $api->resource('companies.configurations', 'CompanyConfigurationsController');5õ                                            õ                                            õ                                            õ                                            5_Š                        P    ’’’’                                                                                                                                                                                                                                                                                                                               -          -       V   -    `­lÄ    õ              5õ                          ~      Y               5_Š                       -    ’’’’                                                                                                                                                                                                                                                                                                                                                v       `­kx     õ        6      -    $api->resource('companies.configurations'5õ       -       %           X      %               5ēŖ