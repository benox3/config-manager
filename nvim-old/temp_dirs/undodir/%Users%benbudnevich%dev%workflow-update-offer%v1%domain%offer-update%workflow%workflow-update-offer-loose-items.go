Vim�UnDo� >��U lHiw�}��P�/������Bz�B�e  Q   2	if err := wf.fakeLocalActivity(ctx); err != nil {   Z         %       %   %   %    a��e    _�                     !        ����                                                                                                                                                                                                                                                                                                                                       "          V       a�W.     �   !   #  G    �   !   "  G    5��    !                      �                      5�_�                    "       ����                                                                                                                                                                                                                                                                                                                                       #          V       a�W/     �   !   #  H      				storeIDsActivity: activity,5��    !                     �                     5�_�                    "       ����                                                                                                                                                                                                                                                                                                                                       #          V       a�W/     �   !   #  H      				: activity,5��    !                     �                     �    !                     �                     �    !                     �                     �    !                     �                     �    !                    �                    �    !                     �                     �    !                     �                     �    !                     �                     �    !                     �                     �    !                    �                    �    !                     �                     �    !                     �                     �    !                     �                     �    !                     �                     �    !                    �                    5�_�                           ����                                                                                                                                                                                                                                                                                                                                       #          V       a�W8     �        H      $	activity activity.StoreIDsActivity,5��                         �                     �                        �                    �                        �                    �                        �                    �                        �                    �                        �                    �                        �                    5�_�                           ����                                                                                                                                                                                                                                                                                                                                       #          V       a�W<     �        H      4	storeIDsActivityactivity activity.StoreIDsActivity,5��                         �                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                       #          V       a�W=     �        H    �        H    5��                          �              -       5�_�                           ����                                                                                                                                                                                                                                                                                                                            !          $          V       a�W?     �        I      ,	storeIDsActivity activity.StoreIDsActivity,5��                         �                     5�_�      	                     ����                                                                                                                                                                                                                                                                                                                            !          $          V       a�W@     �        I      $	Activity activity.StoreIDsActivity,5��                         �                     �                        �                    �                        �                    �                        �                    �                        �                    �                        �                    �                        �                    �                        �                    �                        �                    �                     	   �             	       �              	       
   �      	       
       �              
       
   �      
       
       5�_�      
           	   "       ����                                                                                                                                                                                                                                                                                                                            !          $          V       a�WE     �   !   #  I      				storeIDsActivity: activity,5��    !                     �                     5�_�   	              
   "       ����                                                                                                                                                                                                                                                                                                                            !          $          V       a�WE     �   !   #  I      				storeIDsActivity: ,5��    !                     �                     �    !                    �                    �    !                     �                     �    !                     �                     �    !                     �                     �    !                    �                    �    !                     �                     �    !                     �                     �    !                     �                     �    !                     �                     �    !                    �                    �    !                     �                     �    !                     �                     �    !                     �                     �    !                     �                     �    !                    �                    5�_�   
                 #       ����                                                                                                                                                                                                                                                                                                                            !          $          V       a�WH     �   "   $  I      !				blockScopeActivity: activity,5��    "                     !                     5�_�                    #       ����                                                                                                                                                                                                                                                                                                                            !          $          V       a�WH     �   "   $  I      				blockScopeActivity: ,5��    "                     !                     �    "                     $                     �    "                     #                     �    "                     "                     �    "                    !                    �    "                     %                     �    "                     $                     �    "                     #                     �    "                     "                     �    "                    !                    �    "                     %                     �    "                     $                     �    "                     #                     �    "                     "                     �    "                    !                    5�_�                    #   )    ����                                                                                                                                                                                                                                                                                                                            !          $          V       a�WJ    �   !   #  I      '				storeIDsActivity: storeIDsActivity,5��    !                     �      (       *       5�_�                           ����                                                                                                                                                                                                                                                                                                                            !          $          V       a�WR     �        I      .	blockScopeActivity activity.StoreIDsActivity,5��                                              5�_�                           ����                                                                                                                                                                                                                                                                                                                            !          $          V       a�WS    �        I      	blockScopeActivity activity.,5��                                              �                                            �                                            �                                            �                                            �                                            5�_�                   #   *    ����                                                                                                                                                                                                                                                                                                                            !          $          V       a�[�     �              I   package workflow       import (   	"fmt"       '	"bitbucket.org/inturnco/go-sdk/errors"   (	"bitbucket.org/inturnco/go-sdk/helpers"   	"go.temporal.io/sdk/workflow"       D	workflows_offers "inturn/go-workflows/gen/workflows/v1beta1/offers"   *	"inturn/go-workflows/notification/stages"   9	workflows_context "inturn/go-workflows/temporal/context"   ?	"inturn/workflow-update-offer/v1/domain/offer-update/activity"   )       6//UpdateOfferLooseItemsWorkflow is a workflow handler.   +type UpdateOfferLooseItemsWorkflow struct {   	activityExecutor   	tokenFunc EncryptedTokenFunc   }       V//NewUpdateOfferLooseItemsWorkflow returns new UpdateOfferLooseItemsWorkflow instance.   &func NewUpdateOfferLooseItemsWorkflow(   	opts ActivityOptionsProvider,   	tf EncryptedTokenFunc,   ,	storeIDsActivity activity.StoreIDsActivity,   0	blockScopeActivity activity.BlockScopeActivity,   ") *UpdateOfferLooseItemsWorkflow {       '	return &UpdateOfferLooseItemsWorkflow{   %		activityExecutor: activityExecutor{   !			ActivityOptionsProvider: opts,   $			localActivities: localActivities{   )				storeIDsActivity:   storeIDsActivity,   +				blockScopeActivity: blockScopeActivity,   			},   		},   		tokenFunc: tf,   	}   }       Z//Execute is an entrypoint for the workflow. Workflow updates loose-items stored in offer.   �func (wf *UpdateOfferLooseItemsWorkflow) Execute(ctx workflow.Context, req *workflows_offers.UpdateOfferLooseItemsWorkflowRequest) (resp *workflows_offers.UpdateOfferLooseItemsWorkflowResponse, err error) {   	funcName := helpers.FuncName()   K	ctx, span := workflows_context.StartSpanFromWorkflowContext(ctx, funcName)   	defer func() {   		span.FinishError(err)   	}()       @	workflow.GetLogger(ctx).Info("start "+funcName, "request", req)   	defer func() {   		if err != nil {   q			workflow.GetLogger(ctx).Error(fmt.Sprintf("%s finished with error %s", funcName, err.Error()), "request", req)   
		} else {   E			workflow.GetLogger(ctx).Info("finished "+funcName, "request", req)   		}   	}()       	return wf.execute(ctx, req)   }       �func (wf *UpdateOfferLooseItemsWorkflow) execute(ctx workflow.Context, request *workflows_offers.UpdateOfferLooseItemsWorkflowRequest) (resp *workflows_offers.UpdateOfferLooseItemsWorkflowResponse, err error) {   )	stagesStore := stages.NewStore([]string{   		StageCheckAccess,   		StageUpdateOffer,   	})       	req := request.Request       *	wf.notify(ctx, req, stagesStore.Stages())   	defer func() {   		if err != nil {   E			wf.notify(ctx, req, stagesStore.CurrentStageErrored(err).Stages())   
		} else {   D			wf.notify(ctx, req, stagesStore.CurrentStageSucceeded().Stages())   		}   	}()   T	ctx, wfReq, err := workflowStageAccess(ctx, req, wf.activityExecutor, wf.tokenFunc)   	if err != nil {   		return nil, err   	}       %	wfLooseReq := &workflowLooseRequest{   		workflowRequest: wfReq,   (		SizePackages:    request.SizePackages,   	}       2	if err := wf.blockScope(ctx, wfReq); err != nil {   		return nil, err   	}   	defer func() {   C		if unblockErr := wf.unblockScope(ctx, wfReq); unblockErr != nil {   H			err = errors.Wrapkv(unblockErr, "failed to unblock", "outError", err)   		}   	}()       M	if err := wf.updateOfferWorkflow(ctx, wfLooseReq, stagesStore); err != nil {   		return nil, err   	}       F	return &workflows_offers.UpdateOfferLooseItemsWorkflowResponse{}, err   }       �func (wf *UpdateOfferLooseItemsWorkflow) updateOfferWorkflow(ctx workflow.Context, wfLooseReq *workflowLooseRequest, stagesStore *stages.Store) error {   "	req := wfLooseReq.workflowRequest       6	correlationID := workflows_context.CorrelationID(ctx)   H	packagesKeyPrefix := getPackagesKeyPrefix(req.CompanyId, correlationID)   V	productPackagesKeyPrefix := getProductPackagesKeyPrefix(req.CompanyId, correlationID)   @	priceTypesKey := getPriceTypesKey(req.CompanyId, correlationID)   D	sizePackagesKey := getSizePackagesKey(req.CompanyId, correlationID)       `	wf.notify(ctx, req.UpdateOfferWorkflow, stagesStore.PassToNextStage(StageUpdateOffer).Stages())       �	packagesChunks, productPackagesChunks, err := wf.resolveNegotiationProductPackages(ctx, req, packagesKeyPrefix, productPackagesKeyPrefix)   	if err != nil {   		return err   	}       7	if len(packagesChunks) != len(productPackagesChunks) {   c		return errors.NewConstraintViolationError("the chunks len is different for product and packages",   A			"packages", packagesChunks, "products", productPackagesChunks)   	}       	type chunk struct {    		packagesChunkKey        string    		productPackagesChunkKey string   	}   0	chunks := make([]chunk, 0, len(packagesChunks))    	for i := range packagesChunks {    		chunks = append(chunks, chunk{   .			packagesChunkKey:        packagesChunks[i],   5			productPackagesChunkKey: productPackagesChunks[i],   		})   	}       .	cancelCtx, cancel := workflow.WithCancel(ctx)   3	vocabulariesWg := workflow.NewWaitGroup(cancelCtx)   ?	errChan := workflow.NewBufferedChannel(cancelCtx, len(chunks))       !	done := workflow.NewChannel(ctx)       %	// consume errors from error channel   	// producer-consumer pattern   5	workflow.Go(cancelCtx, func(aCtx workflow.Context) {   		var err, returnErr error   #		for errChan.Receive(aCtx, &err) {   9			// cancel any ongoing activities only if there's error   #			// if channel is closed, no need   			if err != nil {   				cancel()   D				// capture the very first error which is actual cause of failure   <				// other errors are probably due to context cancellation   				if returnErr == nil {   					returnErr = err   				}   			}   		}   		done.Send(aCtx, returnErr)   		done.Close()   	})       	vocabulariesWg.Add(1)   ;	workflow.Go(cancelCtx, func(routineCtx workflow.Context) {   		defer vocabulariesWg.Done()   K		if err := wf.listPriceTypes(routineCtx, req, priceTypesKey); err != nil {    			errChan.Send(routineCtx, err)   				return   		}   	})       .	//https://inturn.atlassian.net/browse/EN-4930   +	if req.UpdateOfferWorkflow.Update != nil {   n		if req.UpdateOfferWorkflow.Update.Type == workflows_offers.UpdateType_UPDATE_TYPE_LOOSE_ITEM_SIZE_QUANTITY {   			vocabulariesWg.Add(1)   =			workflow.Go(cancelCtx, func(routineCtx workflow.Context) {   				defer vocabulariesWg.Done()   ]				if err := wf.storeIDs(routineCtx, sizePackagesKey, wfLooseReq.SizePackages); err != nil {   "					errChan.Send(routineCtx, err)   					return   				}   			})   		}   	}       -	branchWg := workflow.NewWaitGroup(cancelCtx)   #	for i := 0; i < len(chunks); i++ {   		routineNum := i   		branchWg.Add(1)   <		workflow.Go(cancelCtx, func(routineCtx workflow.Context) {   			defer branchWg.Done()   R			packagesInfoKey := getPackagesInfoKey(req.CompanyId, correlationID, routineNum)   \			packageQuantitiesKey := getPackageQuantitiesKey(req.CompanyId, correlationID, routineNum)   5			packagesKey := chunks[routineNum].packagesChunkKey   C			productPackagesKey := chunks[routineNum].productPackagesChunkKey       4			//get package quantities and packages information   1			routineWg := workflow.NewWaitGroup(routineCtx)   4			//get package quantities and packages information   			{   				routineWg.Add(2)       ?				workflow.Go(routineCtx, func(routineCtx workflow.Context) {   					defer routineWg.Done()   j					if err := wf.fetchPackageQuantities(routineCtx, req, packagesKey, packageQuantitiesKey); err != nil {   #						errChan.Send(routineCtx, err)   						return   					}   				})       ?				workflow.Go(routineCtx, func(routineCtx workflow.Context) {   					defer routineWg.Done()   e					if err := wf.getPackagesInformation(routineCtx, req, packagesKey, packagesInfoKey); err != nil {   #						errChan.Send(routineCtx, err)   						return   					}   				})   			}       !			//wait for routine information   			routineWg.Wait(routineCtx)   %			//wait for price types information   "			vocabulariesWg.Wait(routineCtx)       3			workflowInformationData := &workflowInformation{   (				sizePackagesKey:    sizePackagesKey,   -				quantitiesKey:      packageQuantitiesKey,   $				packagesKey:        packagesKey,   +				productPackagesKey: productPackagesKey,   (				packagesInfoKey:    packagesInfoKey,   &				priceTypesKey:      priceTypesKey,   "				rules:              req.Rules,   *				listingStatus:      req.ListingStatus,   			}       			var updater Updater   			if req.Update != nil {   T				resolver := newLooseUpdateResolver(wf.activityExecutor, workflowInformationData)       <				updater, err = resolver.Resolve(req.UpdateOfferWorkflow)   				if err != nil {   "					errChan.Send(routineCtx, err)   					return   				}   			} else {    				updater = &updaterLooseItem{   /					info:             workflowInformationData,   +					activityExecutor: wf.activityExecutor,   				}   			}       N			if err := updater.Update(routineCtx, req.UpdateOfferWorkflow); err != nil {   !				errChan.Send(routineCtx, err)   
				return   			}       d			if err := wf.updateNegotiationIndexPerProducts(routineCtx, req, productPackagesKey); err != nil {   !				errChan.Send(routineCtx, err)   
				return   			}   		})   	}       	branchWg.Wait(cancelCtx)   	errChan.Close()       !	// receive any error if there is   1	if done.Receive(cancelCtx, &err) && err != nil {   		return err   	}       5	return wf.updateOfferUpdatedAtTime(ctx, req.OfferId)   }       ]func newLooseUpdateResolver(ex activityExecutor, info *workflowInformation) *updateResolver {   5	updaters := map[workflows_offers.UpdateType]Updater{   j		workflows_offers.UpdateType_UPDATE_TYPE_LOOSE_ITEM_QUANTITY:      newUpdaterLooseItemQuantity(info, ex),   n		workflows_offers.UpdateType_UPDATE_TYPE_LOOSE_ITEM_SIZE_QUANTITY: newUpdaterLooseItemSizeQuantity(info, ex),   g		workflows_offers.UpdateType_UPDATE_TYPE_LOOSE_ITEM_TOTAL_PRICE:   newUpdaterLooseItemPrice(info, ex),   g		workflows_offers.UpdateType_UPDATE_TYPE_LOOSE_ITEM_UNIT_PRICE:    newUpdaterLooseItemPrice(info, ex),   g		workflows_offers.UpdateType_UPDATE_TYPE_LOOSE_ITEM_PCT_OFF_MSRP:  newUpdaterLooseItemPrice(info, ex),   g		workflows_offers.UpdateType_UPDATE_TYPE_LOOSE_ITEM_PCT_OFF_WHL:   newUpdaterLooseItemPrice(info, ex),   g		workflows_offers.UpdateType_UPDATE_TYPE_LOOSE_ITEM_MARGIN:        newUpdaterLooseItemPrice(info, ex),   	}       	return &updateResolver{   		updaters: updaters,   	}   }       &type updaterLooseItemQuantity struct {   	info *workflowInformation   	activityExecutor   }       zfunc newUpdaterLooseItemQuantity(info *workflowInformation, activityExecutor activityExecutor) *updaterLooseItemQuantity {   Q	return &updaterLooseItemQuantity{info: info, activityExecutor: activityExecutor}   }       rfunc (u *updaterLooseItemQuantity) Update(ctx workflow.Context, req *workflows_offers.UpdateOfferWorkflow) error {   ?	return u.updateOfferProductPackageQuantities(ctx, req, u.info)   }       *type updaterLooseItemSizeQuantity struct {   	info *workflowInformation   	activityExecutor   }       �func newUpdaterLooseItemSizeQuantity(info *workflowInformation, activityExecutor activityExecutor) *updaterLooseItemSizeQuantity {   U	return &updaterLooseItemSizeQuantity{info: info, activityExecutor: activityExecutor}   }       ufunc (u updaterLooseItemSizeQuantity) Update(ctx workflow.Context, req *workflows_offers.UpdateOfferWorkflow) error {   I	// for size quantities update, we replace packagesKey -> sizePackagesKey   �	return u.updateOfferPackageQuantities(ctx, req, u.info.sizePackagesKey, u.info.quantitiesKey, u.info.rules, u.info.listingStatus)   }       type updaterLooseItem struct {   	info *workflowInformation   	activityExecutor   }       ofunc newUpdaterLooseItemPrice(info *workflowInformation, activityExecutor activityExecutor) *updaterLooseItem {   I	return &updaterLooseItem{info: info, activityExecutor: activityExecutor}   }       jfunc (u *updaterLooseItem) Update(ctx workflow.Context, req *workflows_offers.UpdateOfferWorkflow) error {   -	return u.updateLoosePrices(ctx, req, u.info)   }5�5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             a���     �        I    �        I    5��                          *              1       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             a���     �        J      0	blockScopeActivity activity.BlockScopeActivity,5��                         +                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             a���     �        J      	 activity.BlockScopeActivity,5��                         +                     �                         -                     �                         ,                     �                        +                    �                         -                     �                         ,                     �                        +                    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             a���     �        J      /	fakeLocalActivity activity.BlockScopeActivity,5��                         F                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             a���    �        J      	fakeLocalActivity activity.,5��                        E                    �                        F                    �                        F                    �                        F                    �                        F                    �                        F                    5�_�                    X        ����                                                                                                                                                                                                                                                                                                                            Y          [          V   	    a���     �   X   \  J    �   X   Y  J    5��    X                      �
              H       5�_�                    Y       ����                                                                                                                                                                                                                                                                                                                            \          ^          V   	    a���     �   X   Z  M      2	if err := wf.blockScope(ctx, wfReq); err != nil {5��    X                     �
                     5�_�                    Y       ����                                                                                                                                                                                                                                                                                                                            \          ^          V   	    a���     �   X   Z  M      '	if err := wf(ctx, wfReq); err != nil {5��    X                     �
                     �    X                    �
                    �    X                    �
                    �    X                    �
                    �    X                    �
                    �    X                    �
                    5�_�                    Y   #    ����                                                                                                                                                                                                                                                                                                                            \          ^          V   	    a���     �   X   Z  M      9	if err := wf.fakeLocalActivity(ctx, wfReq); err != nil {5��    X   #                  �
                     5�_�                    $       ����                                                                                                                                                                                                                                                                                                                            \          ^          V   	    a���     �   $   &  M    �   $   %  M    5��    $                      i              ,       5�_�                    %       ����                                                                                                                                                                                                                                                                                                                            ]          _          V   	    a���     �   $   &  N      +				blockScopeActivity: blockScopeActivity,5��    $                     m                     5�_�                    %       ����                                                                                                                                                                                                                                                                                                                            ]          _          V   	    a���     �   $   &  N      				: blockScopeActivity,5��    $                     m                     �    $                     q                     �    $                     p                     �    $                     o                     �    $                     n                     �    $                    m                    �    $   	                  r                     �    $                     q                     �    $                     p                     �    $                     o                     �    $                     n                     �    $                    m                    �    $   
                  s                     �    $   	                  r                     �    $                     q                     �    $                     p                     �    $                     o                     �    $                     n                     �    $                    m                    �    $                     t                     �    $   
                  s                     �    $   	                  r                     �    $                     q                     �    $                     p                     �    $                     o                     �    $                     n                     �    $                 	   m             	       �    $                     u                     �    $                     t                     �    $   
                  s                     �    $   	                  r                     �    $                     q                     �    $                     p                     �    $                     o                     �    $                     n                     �    $                 	   m             	       �    $                     u                     �    $                     t                     �    $   
                  s                     �    $   	                  r                     �    $                     q                     �    $                     p                     �    $                     o                     �    $                     n                     �    $                    m                    5�_�                    %       ����                                                                                                                                                                                                                                                                                                                            ]          _          V   	    a���     �   $   &  N      *				fakeLocalActivity: blockScopeActivity,5��    $                     �                     5�_�                     %       ����                                                                                                                                                                                                                                                                                                                            ]          _          V   	    a���     �   $   &  N      				fakeLocalActivity: ,5��    $                     �                     �    $                    �                    �    $                    �                    �    $                    �                    �    $                 	   �             	       �    $          	       	   �      	       	       �    $          	          �      	              5�_�      !               %   '    ����                                                                                                                                                                                                                                                                                                                            ]          _          V   	    a���    �   $   &  N      )				fakeLocalActivity: fakeLocalActivity,5��    $                     i      *       +       5�_�       "           !   Z       ����                                                                                                                                                                                                                                                                                                                            ]          _          V   	    a��     �   Y   [  N      2	if err := wf.fakeLocalActivity(ctx); err != nil {5��    Y                     �
                     5�_�   !   #           "   Z       ����                                                                                                                                                                                                                                                                                                                            ]          _          V   	    a��     �   Y   [  N       	if err := wf(ctx); err != nil {5��    Y                     �
                     �    Y                    �
                    �    Y                    �
                    �    Y                    �
                    �    Y                    �
                    5�_�   "   $           #          ����                                                                                                                                                                                                                                                                                                                                                 v       a���    �        N      /	fakeLocalActivity activity.FackeLocalActivity,5��                        F                    �                         G                     �                        F                    �                         H                     �                         G                     �                        F                    �                         I                     �                         H                     �                         G                     �                        F                    5�_�   #   %           $   Z       ����                                                                                                                                                                                                                                                                                                                                                 v       a��^     �   Y   [  N      2	if err := wf.fakeLocalActivity(ctx); err != nil {5��    Y                     �
                     5�_�   $               %   _       ����                                                                                                                                                                                                                                                                                                                            \          Z          V       a��d    �   _   c  N    �   _   `  N    5��    _                      i              @       5�_�                    #   *    ����                                                                                                                                                                                                                                                                                                                            !          $          V       a�[�     �   #   $  I    �   "   $  I      <				blockScopeActivity: blockScopeActivity,activity_executor5��    "   +                  8                     5��