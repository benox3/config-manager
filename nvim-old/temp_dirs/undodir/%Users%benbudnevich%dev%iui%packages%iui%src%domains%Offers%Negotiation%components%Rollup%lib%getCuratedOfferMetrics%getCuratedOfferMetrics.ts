Vim�UnDo� �R.l��=u�dw�1����&\�m[&��P                                     _�N�    _�                            ����                                                                                                                                                                                                                                                                                                                                                             _�Nu     �               /export default function getCuratedViewMetrics({5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _�Nu    �               export default function ({5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�N�     �   
             &  isShowingAllAvailableUnits: boolean;5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _�N�     �                  isShowingAllAvailableUnits,5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       _�N�     �             �               �                
  return [       isShowingAllAvailableUnits   $      ? metricsMap.initialTotalUnits   #      : metricsMap.draftTotalUnits,       metricsMap.avgUnitPrice,       metricsMap.draftTotalPrice,       metricsMap.avgMargin,       metricsMap.avgMarkup,       metricsMap.totalProfit,   L    ...(showWholesale ? [metricsMap.totalWhlOff, metricsMap.totalWhl] : []),   I    ...(showMsrp ? [metricsMap.totalMsrpOff, metricsMap.totalMsrp] : []),   F    ...(isSeller ? [metricsMap.totalCost] : [metricsMap.totalRetail]),     ];5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 V       _�N�     �               !  const sortedOfferMetricsMap = [5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                 V       _�N�     �                  sortedOfferMetricsMap = [5�_�      
          	      	    ����                                                                                                                                                                                                                                                                                                                                                 V       _�N�     �               "  return sortedOfferMetricsMap = [5�_�   	              
      	    ����                                                                                                                                                                                                                                                                                                                                                 V       _�N�     �                 return  = [5�_�   
                    	    ����                                                                                                                                                                                                                                                                                                                                                 V       _�N�     �                 return = [5�_�                       	    ����                                                                                                                                                                                                                                                                                                                                                 V       _�N�    �                 �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �   
          �   	      
    �      
   	    �      	       �             �             �             �             �             �             �              �                 )import { MetricsMap } from '../../types';       0export default function getCuratedOfferMetrics({     metricsMap,     isSeller,     showMsrp,     showWholesale,   }: {     metricsMap: MetricsMap;     isSeller: boolean;     showMsrp: boolean;     showWholesale: boolean;   }) {     return  [       metricsMap.totalProducts,       metricsMap.draftTotalUnits,       metricsMap.avgUnitPrice,       metricsMap.draftTotalPrice,       metricsMap.avgMargin,       metricsMap.avgMarkup,       metricsMap.totalProfit,   L    ...(showWholesale ? [metricsMap.totalWhlOff, metricsMap.totalWhl] : []),   I    ...(showMsrp ? [metricsMap.totalMsrpOff, metricsMap.totalMsrp] : []),   -    ...(me.companyRole === CompanyRole.Seller         ? [metricsMap.totalCost]   "      : [metricsMap.totalRetail]),     ];   }�                 return  [5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 V       _�N�     �               -    ...(me.companyRole === CompanyRole.Seller5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 V       _�N�     �               +    ...(.companyRole === CompanyRole.Seller5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 V       _�N�     �                   ...( === CompanyRole.Seller5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 V       _�N�     �                   ...( CompanyRole.Seller5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 V       _�N�     �                   ...(.Seller5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 V       _�N�     �                   ...(isSeller.Seller5�_�                            ����                                                                                                                                                                                                                                                                                                                                                 V       _�N�    �                 �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �   
          �   	      
    �      
   	    �      	       �             �             �             �             �             �             �              �                 )import { MetricsMap } from '../../types';       0export default function getCuratedOfferMetrics({     metricsMap,     isSeller,     showMsrp,     showWholesale,   }: {     metricsMap: MetricsMap;     isSeller: boolean;     showMsrp: boolean;     showWholesale: boolean;   }) {   
  return [       metricsMap.totalProducts,       metricsMap.draftTotalUnits,       metricsMap.avgUnitPrice,       metricsMap.draftTotalPrice,       metricsMap.avgMargin,       metricsMap.avgMarkup,       metricsMap.totalProfit,   L    ...(showWholesale ? [metricsMap.totalWhlOff, metricsMap.totalWhl] : []),   I    ...(showMsrp ? [metricsMap.totalMsrpOff, metricsMap.totalMsrp] : []),       ...(isSeller         ? [metricsMap.totalCost]   "      : [metricsMap.totalRetail]),     ];   }�                   ...(isSeller5�_�              	             ����                                                                                                                                                                                                                                                                                                                                                 V       _�N�     �               "  return sortedOfferMetricsMap = [�                  �                )import { MetricsMap } from '../../types';�                �               0export default function getCuratedOfferMetrics({�                 metricsMap,�                 isSeller,�                 showMsrp,�                 showWholesale,�               }: {�      	   	        metricsMap: MetricsMap;�   	   
   
        isSeller: boolean;�   
              showMsrp: boolean;�                 showWholesale: boolean;�               }) {�               #  return (sortedOfferMetricsMap = [�                   metricsMap.totalProducts,�                   metricsMap.draftTotalUnits,�                   metricsMap.avgUnitPrice,�                   metricsMap.draftTotalPrice,�                   metricsMap.avgMargin,�                   metricsMap.avgMarkup,�                   metricsMap.totalProfit,�               L    ...(showWholesale ? [metricsMap.totalWhlOff, metricsMap.totalWhl] : []),�               I    ...(showMsrp ? [metricsMap.totalMsrpOff, metricsMap.totalMsrp] : []),�               -    ...(me.companyRole === CompanyRole.Seller�                     ? [metricsMap.totalCost]�               "      : [metricsMap.totalRetail]),�                 ]);�               }�              5��