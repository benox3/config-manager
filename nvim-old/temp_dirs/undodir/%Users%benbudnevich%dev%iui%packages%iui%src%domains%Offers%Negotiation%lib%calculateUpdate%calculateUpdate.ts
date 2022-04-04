Vim�UnDo� ��������%���f��w0=�w�fO3S��   �                                   _��1    _�                     %       ����                                                                                                                                                                                                                                                                                                                                                             _�Ǳ     �   %   '   �                            �   %   '   �    5�_�                    &   B    ����                                                                                                                                                                                                                                                                                                                                                             _�ǽ    �   %   '   �      C                      __typename: 'OfferRowPackageCategorySizeSize'5�_�                    &   ?    ����                                                                                                                                                                                                                                                                                                                                                             _�̆     �               �   Dimport { NegotiationOfferRowFragment } from 'Src/generated/graphql';       Jimport CASEPACK_CALCULATION_FORMULAS from './casepackCalculationFormulas';   Mimport LOOSE_ITEM_CALCULATION_FORMULAS from './looseItemCalculationFormulas';   <import { CurrentValues, FieldName, Options } from './types';   Bimport UNIT_CALCULATION_FORMULAS from './unitCalculationFormulas';       function mergeValues(   '  rowData: NegotiationOfferRowFragment,     updatedValues: CurrentValues,     options: Options,    ): NegotiationOfferRowFragment {   1  const packageIndex = options.packageIndex || 0;   ;  const packageNode = rowData.packages.nodes[packageIndex];       7  const additionalLooseItemUpdatedPackageNodeValues = {   /    draftUnits: updatedValues.packageSize || 0,       categorySizes: {   #      ...packageNode.categorySizes,         nodes: [   >        ...(packageNode && packageNode.categorySizes?.nodes[0]             ? [                 {   6                ...packageNode.categorySizes.nodes[0],   6                draftUnits: updatedValues.packageSize,                   sizes: {   O                  ...(packageNode && packageNode.categorySizes.nodes[0].sizes),                     nodes:   K                    packageNode && packageNode.categorySizes.nodes[0].sizes                         ? [                             {   I                            ...packageNode.categorySizes?.nodes[0]?.sizes   (                              .nodes[0],   G                            draftUnits: updatedValues.packageSize || 0,                             },                           ]                         : [],   @                  __typename: 'OfferRowPackageCategorySizeSize',                   },                 },               ]             : []),         ],       },     };     const updatedPackageNode = {       ...packageNode,   8    unitsPerPackage: updatedValues.unitsPerPackage || 0,   5    packageWholesale: updatedValues.packageWholesale,   +    packageMsrp: updatedValues.packageMsrp,   +    packageCost: updatedValues.packageCost,   3    packageQuantity: updatedValues.packageQuantity,   P    ...(!options.isCasepack ? additionalLooseItemUpdatedPackageNodeValues : {}),     };         const updatedPackageNodes = [   5    ...rowData.packages.nodes.slice(0, packageIndex),       updatedPackageNode,   6    ...rowData.packages.nodes.slice(packageIndex + 1),     ];       
  return {       ...rowData,   !    margin: updatedValues.margin,   !    markup: updatedValues.markup,   <    draftPercentageOffMsrp: updatedValues.percentageOffMsrp,   F    draftPercentageOffWholesale: updatedValues.percentageOffWholesale,   .    draftTotalPrice: updatedValues.totalPrice,   3    draftTotalUnits: updatedValues.totalUnits || 0,   %    unitCost: updatedValues.unitCost,   %    unitMsrp: updatedValues.unitMsrp,   ,    draftUnitPrice: updatedValues.unitPrice,   )    unitRetail: updatedValues.unitRetail,   )    unitWholesale: rowData.unitWholesale,   2    draftPackagePrice: updatedValues.packagePrice,       ...(options.version > 0   	      ? {   #          weChangedQuantityValueBy:   /            Number(rowData.currentTotalUnits) -   -            Number(updatedValues.totalUnits),              weChangedPriceValueBy:   O            Number(rowData.currentUnitPrice) - Number(updatedValues.unitPrice),   	        }         : {}),       packages: {         ...rowData.packages,   !      nodes: updatedPackageNodes,       },     };   }       #const calculateCasepackPricing = ({     value,     fieldName,   
  options,     currentValues,   }: {     value: number | null;     fieldName: FieldName;     options: Options;     currentValues: CurrentValues;   }) => {   #  const initialCalculationFormula =   9    CASEPACK_CALCULATION_FORMULAS[fieldName].toUnitPrice;       #  if (!initialCalculationFormula) {   2    throw new Error('Invalid Metric Calculation');     }       P  const newUnitPrice = initialCalculationFormula(value, currentValues, options);       >  return Object.entries(CASEPACK_CALCULATION_FORMULAS).reduce(        (acc, [key, formulas]) => ({         ...acc,   J      [key]: formulas.fromUnitPrice(newUnitPrice, currentValues, options),       }),       {         ...currentValues,         [fieldName]: value,   *      [FieldName.UnitPrice]: newUnitPrice,       },     );   };       $const calculateLooseItemPricing = ({     value,     fieldName,   
  options,     currentValues,   }: {     value: number | null;     fieldName: FieldName;     options: Options;     currentValues: CurrentValues;   }) => {   #  const initialCalculationFormula =   ;    LOOSE_ITEM_CALCULATION_FORMULAS[fieldName].toUnitPrice;       #  if (!initialCalculationFormula) {   2    throw new Error('Invalid Metric Calculation');     }       P  const newUnitPrice = initialCalculationFormula(value, currentValues, options);       @  return Object.entries(LOOSE_ITEM_CALCULATION_FORMULAS).reduce(        (acc, [key, formulas]) => ({         ...acc,   J      [key]: formulas.fromUnitPrice(newUnitPrice, currentValues, options),       }),       {         ...currentValues,         [fieldName]: value,   *      [FieldName.UnitPrice]: newUnitPrice,       },     );   };       export default function(      value: number | null | string,     fieldName: FieldName,   '  rowData: NegotiationOfferRowFragment,     options: Options,    ): NegotiationOfferRowFragment {   1  const packageIndex = options.packageIndex || 0;   ;  const packageNode = rowData.packages.nodes[packageIndex];   @  const isQuantityUpdate = UNIT_CALCULATION_FORMULAS[fieldName];     const isPriceUpdate =   /    CASEPACK_CALCULATION_FORMULAS[fieldName] ||   /    LOOSE_ITEM_CALCULATION_FORMULAS[fieldName];       K  if ((!isPriceUpdate && !isQuantityUpdate) || typeof value === 'string') {       switch (fieldName) {         case FieldName.Notes: {   (        rowData.notes = value as string;           return rowData;         }         default:           return rowData;       }     }         const currentValues = {       margin: rowData.margin,       markup: rowData.markup,   *    packageCost: packageNode?.packageCost,   *    packageMsrp: packageNode?.packageMsrp,   ,    packagePrice: rowData.draftPackagePrice,   4    packageWholesale: packageNode?.packageWholesale,   6    percentageOffMsrp: rowData.draftPercentageOffMsrp,   @    percentageOffWholesale: rowData.draftPercentageOffWholesale,   (    totalPrice: rowData.draftTotalPrice,   (    totalUnits: rowData.draftTotalUnits,       unitCost: rowData.unitCost,       unitMsrp: rowData.unitMsrp,   &    unitPrice: rowData.draftUnitPrice,   #    unitRetail: rowData.unitRetail,   )    unitWholesale: rowData.unitWholesale,   2    unitsPerPackage: packageNode?.unitsPerPackage,   7    packageQuantity: packageNode?.draftPackageQuantity,   (    packageSize: packageNode.draftUnits,   ?    weChangedQuantityValueBy: rowData.weChangedQuantityValueBy,   9    weChangedPriceValueBy: rowData.weChangedPriceValueBy,     } as CurrentValues;       %  const totalUnits = isQuantityUpdate   M    ? UNIT_CALCULATION_FORMULAS[fieldName].toTotalUnits(value, currentValues)       : currentValues.totalUnits;       +  currentValues[fieldName] = Number(value);   0  currentValues.totalUnits = Number(totalUnits);       #  const newValue = isQuantityUpdate   9    ? Number(rowData.draftUnitPrice) * Number(totalUnits)       : value;       M  const fieldNameToUse = isQuantityUpdate ? FieldName.TotalPrice : fieldName;       $  const newData = options.isCasepack        ? calculateCasepackPricing({           currentValues,           options,           value: newValue,   "        fieldName: fieldNameToUse,         })   !    : calculateLooseItemPricing({           currentValues,           options,           value: newValue,   "        fieldName: fieldNameToUse,   	      });       0  return mergeValues(rowData, newData, options);   }5�_�                    &   ?    ����                                                                                                                                                                                                                                                                                                                                                             _�̉     �   %   '   �      @                  __typename: 'OfferRowPackageCategorySizeSize',5�_�                    &   b    ����                                                                                                                                                                                                                                                                                                                                                             _�̎     �          �      Dimport { NegotiationOfferRowFragment } from 'Src/generated/graphql';5�_�                    &   a    ����                                                                                                                                                                                                                                                                                                                                                             _�̓    �          �      eimport { NegotiationOfferRowFragment, OfferRowPackageCategorySizeSize } from 'Src/generated/graphql';5�_�      	             )   :    ����                                                                                                                                                                                                                                                                                                                            )   C       )   C       v   C    _���     �   (   *   �      c                  __typename: 'OfferRowPackageCategorySizeSize' as OfferRowPackageCategorySizeSize,5�_�      
           	   )   :    ����                                                                                                                                                                                                                                                                                                                            )   C       )   C       v   C    _���     �   (   *   �      _                  __typename: 'OfferRowPackageCategorySize' as OfferRowPackageCategorySizeSize,5�_�   	              
   )   [    ����                                                                                                                                                                                                                                                                                                                            )   C       )   C       v   C    _���     �   (   *   �      `                  __typename: 'OfferRowPackageCategorySizes' as OfferRowPackageCategorySizeSize,5�_�   
                 )   [    ����                                                                                                                                                                                                                                                                                                                            )   C       )   C       v   C    _���    �   (   *   �      \                  __typename: 'OfferRowPackageCategorySizes' as OfferRowPackageCategorySize,5�_�                    )   @    ����                                                                                                                                                                                                                                                                                                                            )   C       )   C       v   C    _���     �         �    5�_�                    *   @    ����                                                                                                                                                                                                                                                                                                                            *   C       *   C       v   C    _���    �         �      "  OfferRowPackageCategorySizeSize,     OfferRowPackageCategorySizes,5�_�                   *   @    ����                                                                                                                                                                                                                                                                                                                            *   F       *   F       v   F    _���     �   )   +   �      ]                  __typename: 'OfferRowPackageCategorySizes' as OfferRowPackageCategorySizes,5�_�                    *   ]    ����                                                                                                                                                                                                                                                                                                                            *   F       *   F       v   F    _���    �   )   +   �      ^                  __typename: 'OfferRowPackageCategorySizes' as 'OfferRowPackageCategorySizes,5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        _��n     �                  OfferRowPackageCategorySizes,   "  OfferRowPackageCategorySizeSize,5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        _��o    �          �      import {     NegotiationOfferRowFragment,   } from 'Src/generated/graphql';5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        _�͵     �          �      Dimport { NegotiationOfferRowFragment } from 'Src/generated/graphql';5�_�                    &   :    ����                                                                                                                                                                                                                                                                                                                                                  V        _�ͺ     �   %   '   �      _                  __typename: 'OfferRowPackageCategorySizes' as 'OfferRowPackageCategorySizes',5�_�                    &   `    ����                                                                                                                                                                                                                                                                                                                                                  V        _�ͽ    �   %   '   �      c                  __typename: 'OfferRowPackageCategorySizeSizes' as 'OfferRowPackageCategorySizes',5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        _���    �          �      D:mport { NegotiationOfferRowFragment } from 'Src/generated/graphql';5�_�                     &        ����                                                                                                                                                                                                                                                                                                                                                  V        _��0     �               �   Dimport { NegotiationOfferRowFragment } from 'Src/generated/graphql';       Jimport CASEPACK_CALCULATION_FORMULAS from './casepackCalculationFormulas';   Mimport LOOSE_ITEM_CALCULATION_FORMULAS from './looseItemCalculationFormulas';   <import { CurrentValues, FieldName, Options } from './types';   Bimport UNIT_CALCULATION_FORMULAS from './unitCalculationFormulas';       function mergeValues(   '  rowData: NegotiationOfferRowFragment,     updatedValues: CurrentValues,     options: Options,    ): NegotiationOfferRowFragment {   1  const packageIndex = options.packageIndex || 0;   ;  const packageNode = rowData.packages.nodes[packageIndex];       7  const additionalLooseItemUpdatedPackageNodeValues = {   /    draftUnits: updatedValues.packageSize || 0,       categorySizes: {   #      ...packageNode.categorySizes,         nodes: [   >        ...(packageNode && packageNode.categorySizes?.nodes[0]             ? [                 {   6                ...packageNode.categorySizes.nodes[0],   6                draftUnits: updatedValues.packageSize,                   sizes: {   O                  ...(packageNode && packageNode.categorySizes.nodes[0].sizes),                     nodes:   K                    packageNode && packageNode.categorySizes.nodes[0].sizes                         ? [                             {   I                            ...packageNode.categorySizes?.nodes[0]?.sizes   (                              .nodes[0],   G                            draftUnits: updatedValues.packageSize || 0,                             },                           ]                         : [],   g                  __typename: 'OfferRowPackageCategorySizeSizes' as 'OfferRowPackageCategorySizeSizes',                   },                 },               ]             : []),         ],       },     };     const updatedPackageNode = {       ...packageNode,   8    unitsPerPackage: updatedValues.unitsPerPackage || 0,   5    packageWholesale: updatedValues.packageWholesale,   +    packageMsrp: updatedValues.packageMsrp,   +    packageCost: updatedValues.packageCost,   3    packageQuantity: updatedValues.packageQuantity,   P    ...(!options.isCasepack ? additionalLooseItemUpdatedPackageNodeValues : {}),     };         const updatedPackageNodes = [   5    ...rowData.packages.nodes.slice(0, packageIndex),       updatedPackageNode,   6    ...rowData.packages.nodes.slice(packageIndex + 1),     ];       
  return {       ...rowData,   !    margin: updatedValues.margin,   !    markup: updatedValues.markup,   <    draftPercentageOffMsrp: updatedValues.percentageOffMsrp,   F    draftPercentageOffWholesale: updatedValues.percentageOffWholesale,   .    draftTotalPrice: updatedValues.totalPrice,   3    draftTotalUnits: updatedValues.totalUnits || 0,   %    unitCost: updatedValues.unitCost,   %    unitMsrp: updatedValues.unitMsrp,   ,    draftUnitPrice: updatedValues.unitPrice,   )    unitRetail: updatedValues.unitRetail,   )    unitWholesale: rowData.unitWholesale,   2    draftPackagePrice: updatedValues.packagePrice,       ...(options.version > 0   	      ? {   #          weChangedQuantityValueBy:   /            Number(rowData.currentTotalUnits) -   -            Number(updatedValues.totalUnits),              weChangedPriceValueBy:   O            Number(rowData.currentUnitPrice) - Number(updatedValues.unitPrice),   	        }         : {}),       packages: {         ...rowData.packages,   !      nodes: updatedPackageNodes,       },     };   }       #const calculateCasepackPricing = ({     value,     fieldName,   
  options,     currentValues,   }: {     value: number | null;     fieldName: FieldName;     options: Options;     currentValues: CurrentValues;   }) => {   #  const initialCalculationFormula =   9    CASEPACK_CALCULATION_FORMULAS[fieldName].toUnitPrice;       #  if (!initialCalculationFormula) {   2    throw new Error('Invalid Metric Calculation');     }       P  const newUnitPrice = initialCalculationFormula(value, currentValues, options);       >  return Object.entries(CASEPACK_CALCULATION_FORMULAS).reduce(        (acc, [key, formulas]) => ({         ...acc,   J      [key]: formulas.fromUnitPrice(newUnitPrice, currentValues, options),       }),       {         ...currentValues,         [fieldName]: value,   *      [FieldName.UnitPrice]: newUnitPrice,       },     );   };       $const calculateLooseItemPricing = ({     value,     fieldName,   
  options,     currentValues,   }: {     value: number | null;     fieldName: FieldName;     options: Options;     currentValues: CurrentValues;   }) => {   #  const initialCalculationFormula =   ;    LOOSE_ITEM_CALCULATION_FORMULAS[fieldName].toUnitPrice;       #  if (!initialCalculationFormula) {   2    throw new Error('Invalid Metric Calculation');     }       P  const newUnitPrice = initialCalculationFormula(value, currentValues, options);       @  return Object.entries(LOOSE_ITEM_CALCULATION_FORMULAS).reduce(        (acc, [key, formulas]) => ({         ...acc,   J      [key]: formulas.fromUnitPrice(newUnitPrice, currentValues, options),       }),       {         ...currentValues,         [fieldName]: value,   *      [FieldName.UnitPrice]: newUnitPrice,       },     );   };       export default function(      value: number | null | string,     fieldName: FieldName,   '  rowData: NegotiationOfferRowFragment,     options: Options,    ): NegotiationOfferRowFragment {   1  const packageIndex = options.packageIndex || 0;   ;  const packageNode = rowData.packages.nodes[packageIndex];   @  const isQuantityUpdate = UNIT_CALCULATION_FORMULAS[fieldName];     const isPriceUpdate =   /    CASEPACK_CALCULATION_FORMULAS[fieldName] ||   /    LOOSE_ITEM_CALCULATION_FORMULAS[fieldName];       K  if ((!isPriceUpdate && !isQuantityUpdate) || typeof value === 'string') {       switch (fieldName) {         case FieldName.Notes: {   (        rowData.notes = value as string;           return rowData;         }         default:           return rowData;       }     }         const currentValues = {       margin: rowData.margin,       markup: rowData.markup,   *    packageCost: packageNode?.packageCost,   *    packageMsrp: packageNode?.packageMsrp,   ,    packagePrice: rowData.draftPackagePrice,   4    packageWholesale: packageNode?.packageWholesale,   6    percentageOffMsrp: rowData.draftPercentageOffMsrp,   @    percentageOffWholesale: rowData.draftPercentageOffWholesale,   (    totalPrice: rowData.draftTotalPrice,   (    totalUnits: rowData.draftTotalUnits,       unitCost: rowData.unitCost,       unitMsrp: rowData.unitMsrp,   &    unitPrice: rowData.draftUnitPrice,   #    unitRetail: rowData.unitRetail,   )    unitWholesale: rowData.unitWholesale,   2    unitsPerPackage: packageNode?.unitsPerPackage,   7    packageQuantity: packageNode?.draftPackageQuantity,   (    packageSize: packageNode.draftUnits,   ?    weChangedQuantityValueBy: rowData.weChangedQuantityValueBy,   9    weChangedPriceValueBy: rowData.weChangedPriceValueBy,     } as CurrentValues;       %  const totalUnits = isQuantityUpdate   M    ? UNIT_CALCULATION_FORMULAS[fieldName].toTotalUnits(value, currentValues)       : currentValues.totalUnits;       +  currentValues[fieldName] = Number(value);   0  currentValues.totalUnits = Number(totalUnits);       #  const newValue = isQuantityUpdate   9    ? Number(rowData.draftUnitPrice) * Number(totalUnits)       : value;       M  const fieldNameToUse = isQuantityUpdate ? FieldName.TotalPrice : fieldName;       $  const newData = options.isCasepack        ? calculateCasepackPricing({           currentValues,           options,           value: newValue,   "        fieldName: fieldNameToUse,         })   !    : calculateLooseItemPricing({           currentValues,           options,           value: newValue,   "        fieldName: fieldNameToUse,   	      });       0  return mergeValues(rowData, newData, options);   }5�_�                   *   :    ����                                                                                                                                                                                                                                                                                                                            *   :       *   :       v   :    _���     �   )   +   �      e                  __typename: 'OfferRowPackageCategorySizelllllllll' as OfferRowPackageCategorySizes,5�_�                    *   @    ����                                                                                                                                                                                                                                                                                                                            *   @       *   @       v   @    _���     �   )   +   �      ]                  __typename: 'OfferRowPackageCategorySizes' as KfferRowPackageCategorySizes,5�_�                    )   C    ����                                                                                                                                                                                                                                                                                                                            )   C       )   C       v   C    _�̧     �   (   *   �      d                  __typename: 'OfferRowPackageCategorySizeSize' as KlfferRowPackageCategorySizeSize,5��