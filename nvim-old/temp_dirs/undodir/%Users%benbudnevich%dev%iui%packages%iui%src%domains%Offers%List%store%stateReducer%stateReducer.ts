Vim�UnDo� dYJ�ߓw,ۤ��s�#��S��>
b�s   �                                   _�C�    _�                             ����                                                                                                                                                                                                                                                                                                                                                             _� �     �   
             "export const PATH_DELIMITER = '.';5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�!�    �   
              5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�B�     �               �   import i18n from 'i18n';       >import { DynamicFilterKind } from 'Components/DynamicFilters';       @import { OfferFilterStatus } from '../../queries/listingsQuery';   Nimport getCachedFiltersFromResponse from './lib/getCachedFiltersFromResponse';   Jimport getRequestFiltersFromState from './lib/getRequestFiltersFromState';   Pimport getStagedFilterStateFromCache from './lib/getStagedFilterStateFromCache';   1import { Action, Actions, State } from './types';       4const FILTERS_ROOT_NAME = 'OfferListFilters.Offers';       export enum OfferSortKey {   *  LAST_MODIFIED_ASC = 'last-modified-asc',   ,  LAST_MODIFIED_DESC = 'last-modified-desc',   }       Iexport const getInitialState = ({ isSeller }: { isSeller: boolean }) => {     let filterSections = {   /    [`${FILTERS_ROOT_NAME}.Company.company`]: {   !      label: i18n.t('Companies'),   '      kind: DynamicFilterKind.Checkbox,       },     };         if (isSeller) {       filterSections = {         ...filterSections,   1      [`${FILTERS_ROOT_NAME}.Markets.markets`]: {   )        label: i18n.t('Pricing_Markets'),   )        kind: DynamicFilterKind.Checkbox,         },   3      [`${FILTERS_ROOT_NAME}.Channels.channels`]: {   "        label: i18n.t('Channels'),   )        kind: DynamicFilterKind.Checkbox,         },       };     }       
  return {   /    activeOfferTab: OfferFilterStatus.RECEIVED,   3    activeSortKey: OfferSortKey.LAST_MODIFIED_DESC,       listingIdForCloneModal: '',       searchValue: '',        selectedOffers: new Set([]),       filterConfig: {   "      rootName: FILTERS_ROOT_NAME,         sections: filterSections,       },     };   };       Kexport default function stateReducer(state: State, action: Action): State {     switch (action.type) {   ,    case Actions.TOGGLE_CLONE_OFFER_MODAL: {         return {           ...state,   /        listingIdForCloneModal: action.payload,         };       }   &    case Actions.APPLY_STAGED_FILTERS:         return {           ...state,   ?        appliedFilterGroups: getRequestFiltersFromState(state),         };   &    case Actions.RECEIVE_BASE_FILTERS:   8      const filtersCache = getCachedFiltersFromResponse(           action.payload,           state.filterConfig,         );             return {           ...state,   '        baseFiltersCache: filtersCache,   )        stagedFiltersCache: filtersCache,   :        stagedFilterState: getStagedFilterStateFromCache({             ...state,   +          stagedFiltersCache: filtersCache,           }),         };           case Actions.RESET_FILTERS:         return {           ...state,   %        stagedFilterState: undefined,   '        appliedFilterGroups: undefined,         };   (    case Actions.SET_ACTIVE_OFFER_TAB: {         return {           ...state,   $        selectedOffers: new Set([]),   '        activeOfferTab: action.payload,         };       }   '    case Actions.SET_ACTIVE_SORT_KEY: {         return {           ...state,   &        activeSortKey: action.payload,         };       }   $    case Actions.SET_SEARCH_VALUE: {         return {           ...state,   $        searchValue: action.payload,         };       }   #    case Actions.TOGGLE_CHECKBOX: {         const stagedFilter =   P        state.stagedFilterState && state.stagedFilterState[action.payload.path];   C      const stagedValues = stagedFilter ? stagedFilter.values : [];       ;      let values = [...stagedValues, action.payload.value];       8      if (stagedValues.includes(action.payload.value)) {   N        values = stagedValues.filter(value => value !== action.payload.value);         }       "      const resultState: State = {           ...state,           stagedFilterState: {   %          ...state.stagedFilterState,   "          [action.payload.path]: {               values,             },   
        },         };       <      if (!values.length && resultState.stagedFilterState) {   B        delete resultState.stagedFilterState[action.payload.path];         }             return resultState;       }       '    case Actions.SET_SELECTED_OFFERS: {   >      const newSelectedOffers = new Set(state.selectedOffers);   2      if (newSelectedOffers.has(action.payload)) {   1        newSelectedOffers.delete(action.payload);         } else {   .        newSelectedOffers.add(action.payload);         }             return {           ...state,   *        selectedOffers: newSelectedOffers,         };       }           default:         return state;     }   }5�_�                             ����                                                                                                                                                                                                                                                                                                                                                             _�C�     �               �   import i18n from 'i18n';       >import { DynamicFilterKind } from 'Components/DynamicFilters';       @import { OfferFilterStatus } from '../../queries/listingsQuery';   Nimport getCachedFiltersFromResponse from './lib/getCachedFiltersFromResponse';   Jimport getRequestFiltersFromState from './lib/getRequestFiltersFromState';   Pimport getStagedFilterStateFromCache from './lib/getStagedFilterStateFromCache';   1import { Action, Actions, State } from './types';       "export const PATH_DELIMITER = '.';       4const FILTERS_ROOT_NAME = 'OfferListFilters.Offers';       export enum OfferSortKey {   *  LAST_MODIFIED_ASC = 'last-modified-asc',   ,  LAST_MODIFIED_DESC = 'last-modified-desc',   }       Iexport const getInitialState = ({ isSeller }: { isSeller: boolean }) => {     let filterSections = {   /    [`${FILTERS_ROOT_NAME}.Company.company`]: {   !      label: i18n.t('Companies'),   '      kind: DynamicFilterKind.Checkbox,       },     };         if (isSeller) {       filterSections = {         ...filterSections,   1      [`${FILTERS_ROOT_NAME}.Markets.markets`]: {   )        label: i18n.t('Pricing_Markets'),   )        kind: DynamicFilterKind.Checkbox,         },   3      [`${FILTERS_ROOT_NAME}.Channels.channels`]: {   "        label: i18n.t('Channels'),   )        kind: DynamicFilterKind.Checkbox,         },       };     }       
  return {   /    activeOfferTab: OfferFilterStatus.RECEIVED,   3    activeSortKey: OfferSortKey.LAST_MODIFIED_DESC,       listingIdForCloneModal: '',       searchValue: '',        selectedOffers: new Set([]),       filterConfig: {   "      rootName: FILTERS_ROOT_NAME,         sections: filterSections,       },     };   };       Kexport default function stateReducer(state: State, action: Action): State {     switch (action.type) {   ,    case Actions.TOGGLE_CLONE_OFFER_MODAL: {         return {           ...state,   /        listingIdForCloneModal: action.payload,         };       }   &    case Actions.APPLY_STAGED_FILTERS:         return {           ...state,   ?        appliedFilterGroups: getRequestFiltersFromState(state),         };   &    case Actions.RECEIVE_BASE_FILTERS:   8      const filtersCache = getCachedFiltersFromResponse(           action.payload,           state.filterConfig,         );             return {           ...state,   '        baseFiltersCache: filtersCache,   )        stagedFiltersCache: filtersCache,   :        stagedFilterState: getStagedFilterStateFromCache({             ...state,   +          stagedFiltersCache: filtersCache,           }),         };           case Actions.RESET_FILTERS:         return {           ...state,   %        stagedFilterState: undefined,   '        appliedFilterGroups: undefined,         };   (    case Actions.SET_ACTIVE_OFFER_TAB: {         return {           ...state,   $        selectedOffers: new Set([]),   '        activeOfferTab: action.payload,         };       }   '    case Actions.SET_ACTIVE_SORT_KEY: {         return {           ...state,   &        activeSortKey: action.payload,         };       }   $    case Actions.SET_SEARCH_VALUE: {         return {           ...state,   $        searchValue: action.payload,         };       }   #    case Actions.TOGGLE_CHECKBOX: {         const stagedFilter =   P        state.stagedFilterState && state.stagedFilterState[action.payload.path];   C      const stagedValues = stagedFilter ? stagedFilter.values : [];       ;      let values = [...stagedValues, action.payload.value];       8      if (stagedValues.includes(action.payload.value)) {   N        values = stagedValues.filter(value => value !== action.payload.value);         }       "      const resultState: State = {           ...state,           stagedFilterState: {   %          ...state.stagedFilterState,   "          [action.payload.path]: {               values,             },   
        },         };       <      if (!values.length && resultState.stagedFilterState) {   B        delete resultState.stagedFilterState[action.payload.path];         }             return resultState;       }       '    case Actions.SET_SELECTED_OFFERS: {   >      const newSelectedOffers = new Set(state.selectedOffers);   2      if (newSelectedOffers.has(action.payload)) {   1        newSelectedOffers.delete(action.payload);         } else {   .        newSelectedOffers.add(action.payload);         }             return {           ...state,   *        selectedOffers: newSelectedOffers,         };       }           default:         return state;     }   }5��