Vim�UnDo� #.q���X�'Ex���8D��":���n�=   P                 
       
   
   
    _�r:    _�                             ����                                                                                                                                                                                                                                                                                                                                                             _�o�     �                <<<<<<< HEAD5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _�o�     �   
      Q    �         Q    5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�p      �                =======5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�p    �                4>>>>>>> feat(pvh filters): create pvh filter configs5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�r/     �               P   Ximport { Entity } from 'Domains/Inventory/SearchServiceManage/logic/reducers/linesheet';       import {   &  hanesInventoryCasepacksFilterConfig,   "  hanesInventoryItemsFilterConfig,   } from './configs/hanes';   import {   ,  hanesBasicsInventoryCasepacksFilterConfig,   (  hanesBasicsInventoryItemsFilterConfig,   } from './configs/hanesBasics';   import {   $  pvhInventoryCasepacksFilterConfig,      pvhInventoryItemsFilterConfig,   } from './configs/pvh';   import {   -  robertGrahamInventoryCasepacksFilterConfig,   )  robertGrahamInventoryItemsFilterConfig,    } from './configs/robertGraham';   import {   (  starfryInventoryCasepacksFilterConfig,   $  starfryInventoryItemsFilterConfig,   } from './configs/starfry';   import {   '  theoryInventoryCasepacksFilterConfig,   #  theoryInventoryItemsFilterConfig,   } from './configs/theory';   0import { InventoryFilterConfig } from './types';       type Params = {     companyName: string;     entity: Entity;   };       )export function getInventoryFilterConfig(     params: Params,   ): InventoryFilterConfig {   =  const entityFilterConfigs = getEntityFilterConfigs(params);   ,  return entityFilterConfigs[params.entity];   }        function getEntityFilterConfigs(   &  params: Pick<Params, 'companyName'>,   /): { [key in Entity]: InventoryFilterConfig } {   D  const [baseCompanyName] = params.companyName.split(' Automation');         switch (baseCompanyName) {       case 'Hanes Basics':         return {   =        [Entity.Item]: hanesBasicsInventoryItemsFilterConfig,   E        [Entity.Casepack]: hanesBasicsInventoryCasepacksFilterConfig,         };       case 'Hanes':       case 'Hanesbrands':         return {   7        [Entity.Item]: hanesInventoryItemsFilterConfig,   ?        [Entity.Casepack]: hanesInventoryCasepacksFilterConfig,         };       case 'PVH':       case 'PVH EU':         return {   5        [Entity.Item]: pvhInventoryItemsFilterConfig,   =        [Entity.Casepack]: pvhInventoryCasepacksFilterConfig,         };       case 'Robert Graham':         return {   >        [Entity.Item]: robertGrahamInventoryItemsFilterConfig,   F        [Entity.Casepack]: robertGrahamInventoryCasepacksFilterConfig,         };       case 'Theory':         return {   8        [Entity.Item]: theoryInventoryItemsFilterConfig,   @        [Entity.Casepack]: theoryInventoryCasepacksFilterConfig,         };       default:         return {   9        [Entity.Item]: starfryInventoryItemsFilterConfig,   A        [Entity.Casepack]: starfryInventoryCasepacksFilterConfig,         };     }   }5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�r2     �                >>>>>>> origin/master5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�r3     �                =======5�_�      	                      ����                                                                                                                                                                                                                                                                                                                                                             _�r4     �                <<<<<<< HEAD5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                             _�r6     �   
      P       �   
      O    5�_�   	               
          ����                                                                                                                                                                                                                                                                                                                                                             _�r9    �         P      $  pvhInventoryCasepacksFilterConfig,      pvhInventoryItemsFilterConfig,   } from './configs/pvh';   import {   ,  hanesBasicsInventoryCasepacksFilterConfig,   (  hanesBasicsInventoryItemsFilterConfig,   } from './configs/hanesBasics';5��