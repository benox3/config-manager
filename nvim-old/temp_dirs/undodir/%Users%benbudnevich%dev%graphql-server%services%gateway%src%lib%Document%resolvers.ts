Vim�UnDo� 5�TX�L�@�_Y#�� UU�pi��Ůzr   �   7    // tslint:disable-next-jline function-name prettier   �         	       	   	   	    `�    _�                    �        ����                                                                                                                                                                                                                                                                                                                                                             `�     �               �   import {     ArgsType,     ContextType,     CoreAPIParentType,     InventorySyncType,     InventorySyncActionType,   } from '../../types';   8import getPublicImage from '../../utils/getPublicImage';       #const documentSrcResolver = async (     {       id,       src,       url,     }: {       id: string;       src?: string;       url?: string;     },     _: ArgsType,     { dataSources }: ContextType,   ) => {   $  if (src || url) return src || url;       M  const { url: newUrl } = await dataSources.documentService.getDocumentById({       documentId: id,     });         return newUrl;   };       -export const documentImgSrcResolver = async (     {       id,       src,       url,     }: {       id: string;       src?: string;       url?: string;     },     args: ArgsType,     context: ContextType,   ) => {   0  const resolvedSrc = await documentSrcResolver(       { id, src, url },   	    args,       context,     );       %  return getPublicImage(resolvedSrc);   };       const addDocument = async (     parent: CoreAPIParentType,     { input }: ArgsType,     { dataSources }: ContextType,   ) => {   G  const results = await dataSources.documentService.addDocument(input);       
  return {       id: results.id,       src: results.url,       name: results.fileName,     };   };       export default {     Mutation: {   "    addDocumentImage: addDocument,   !    addDocumentFile: addDocument,        updateImageDocument: async (         _: undefined,         args: {           colorMatch: boolean;           imagePosition: number;           productId: string;           productImageId: string;         },   )      { dataSources, user }: ContextType,       ) =>   <      await dataSources.productService.updateImageDocument({   $        colorMatch: args.colorMatch,   $        companyId: user.companyUuid,   *        imagePosition: args.imagePosition,   "        productId: args.productId,   ,        productImageId: args.productImageId,           userId: user.uuid,   	      }),        deleteImageDocument: async (         _: undefined,         args: {           productImageId: string;           productId: string;         },   )      { dataSources, user }: ContextType,       ) =>   <      await dataSources.productService.deleteImageDocument({   $        companyId: user.companyUuid,   "        productId: args.productId,   ,        productImageId: args.productImageId,           userId: user.uuid,   	      }),       syncInventoryImage: async (         _: undefined,         args: {           colorMatch: boolean;           documentId: string;           imagePosition: number;           productId: string;         },   )      { dataSources, user }: ContextType,       ) =>   ;      await dataSources.productService.syncInventoryImage({   $        colorMatch: args.colorMatch,   $        companyId: user.companyUuid,   $        documentId: args.documentId,   %        position: args.imagePosition,   "        productId: args.productId,           userId: user.uuid,   	      }),       syncInventoryData: async (         _: undefined,         args: {   ,        actionType: InventorySyncActionType;           channelId: string;            type: InventorySyncType;           groupIds?: string[];           packageIds?: string[];           productIds?: string[];         },   )      { dataSources, user }: ContextType,       ) =>   :      await dataSources.productService.syncInventoryData({   $        actionType: args.actionType,   "        channelId: args.channelId,   $        companyId: user.companyUuid,           type: args.type,           userId: user.uuid,   &        groupIds: args.groupIds || [],   *        packageIds: args.packageIds || [],   *        productIds: args.productIds || [],   	      }),   (    updateDocumentFileSignedSrc: async (          parent: CoreAPIParentType,         { id }: ArgsType,   #      { dataSources }: ContextType,   
    ) => {   I      const results = await dataSources.documentService.getDocumentById({           documentId: id,           signed: true,   	      });             return {           id: results.id,           src: results.signedUrl,           name: results.fileName,         };       },     },     Document: {       __resolveType({   3      // tslint:disable-line function-name prettier   	      id,         uuid,         fileName,       }: {         id?: string;         uuid?: string;         fileName: string;       }) {         return {           id: id || uuid,           name: fileName,         };       },     },     DocumentFile: {       src: documentSrcResolver,     },     DocumentImage: {        src: documentImgSrcResolver,     },   };5�_�                   �       ����                                                                                                                                                                                                                                                                                                                                                             `�    �   �   �   �      1    // tslint:disable-line function-name prettier5�_�      	              �       ����                                                                                                                                                                                                                                                                                                                                                             `�    �   �   �   �      6    // tslint:disable-next-line function-name prettier5�_�                 	   �       ����                                                                                                                                                                                                                                                                                                                                                             `�    �   �   �   �      7    // tslint:disable-next-jline function-name prettier5�_�              	      �       ����                                                                                                                                                                                                                                                                                                                                                             `�     �   �   �   �          // tslint:disable-next-j       line function-name prettier5�_�                    �       ����                                                                                                                                                                                                                                                                                                                                                             `�     �   �   �   �      1    // tslint-disable-line function-name prettier5�_�                    �       ����                                                                                                                                                                                                                                                                                                                                                             `i     �   �   �        5�_�                    �       ����                                                                                                                                                                                                                                                                                                                                                             `j     �   �   �   �    �   �   �   �      3      // tslint:disable-line function-name prettier5�_�                     �       ����                                                                                                                                                                                                                                                                                                                                                             `k    �   �   �   �      3      // tslint:disable-line function-name prettier�       �           �                import {�                 ArgsType,�                 ContextType,�                 CoreAPIParentType,�                 InventorySyncType,�                 InventorySyncActionType,�               } from '../../types';�               8import getPublicImage from '../../utils/getPublicImage';�      	   	       �   	   
   
      #const documentSrcResolver = async (�   
              {�                   id,�                   src,�                   url,�                 }: {�                   id: string;�                   src?: string;�                   url?: string;�                 },�                 _: ArgsType,�                 { dataSources }: ContextType,�               ) => {�               $  if (src || url) return src || url;�                �               M  const { url: newUrl } = await dataSources.documentService.getDocumentById({�                   documentId: id,�                 });�                �                 return newUrl;�               };�                �                 -export const documentImgSrcResolver = async (�       !   !        {�   !   "   "          id,�   "   #   #          src,�   #   $   $          url,�   $   %   %        }: {�   %   &   &          id: string;�   &   '   '          src?: string;�   '   (   (          url?: string;�   (   )   )        },�   )   *   *        args: ArgsType,�   *   +   +        context: ContextType,�   +   ,   ,      ) => {�   ,   -   -      0  const resolvedSrc = await documentSrcResolver(�   -   .   .          { id, src, url },�   .   /   /      	    args,�   /   0   0          context,�   0   1   1        );�   1   2   2       �   2   3   3      %  return getPublicImage(resolvedSrc);�   3   4   4      };�   4   5   5       �   5   6   6      const addDocument = async (�   6   7   7        parent: CoreAPIParentType,�   7   8   8        { input }: ArgsType,�   8   9   9        { dataSources }: ContextType,�   9   :   :      ) => {�   :   ;   ;      G  const results = await dataSources.documentService.addDocument(input);�   ;   <   <       �   <   =   =      
  return {�   =   >   >          id: results.id,�   >   ?   ?          src: results.url,�   ?   @   @          name: results.fileName,�   @   A   A        };�   A   B   B      };�   B   C   C       �   C   D   D      export default {�   D   E   E        Mutation: {�   E   F   F      "    addDocumentImage: addDocument,�   F   G   G      !    addDocumentFile: addDocument,�   G   H   H           updateImageDocument: async (�   H   I   I            _: undefined,�   I   J   J            args: {�   J   K   K              colorMatch: boolean;�   K   L   L              imagePosition: number;�   L   M   M              productId: string;�   M   N   N              productImageId: string;�   N   O   O            },�   O   P   P      )      { dataSources, user }: ContextType,�   P   Q   Q          ) =>�   Q   R   R      <      await dataSources.productService.updateImageDocument({�   R   S   S      $        colorMatch: args.colorMatch,�   S   T   T      $        companyId: user.companyUuid,�   T   U   U      *        imagePosition: args.imagePosition,�   U   V   V      "        productId: args.productId,�   V   W   W      ,        productImageId: args.productImageId,�   W   X   X              userId: user.uuid,�   X   Y   Y      	      }),�   Y   Z   Z           deleteImageDocument: async (�   Z   [   [            _: undefined,�   [   \   \            args: {�   \   ]   ]              productImageId: string;�   ]   ^   ^              productId: string;�   ^   _   _            },�   _   `   `      )      { dataSources, user }: ContextType,�   `   a   a          ) =>�   a   b   b      <      await dataSources.productService.deleteImageDocument({�   b   c   c      $        companyId: user.companyUuid,�   c   d   d      "        productId: args.productId,�   d   e   e      ,        productImageId: args.productImageId,�   e   f   f              userId: user.uuid,�   f   g   g      	      }),�   g   h   h          syncInventoryImage: async (�   h   i   i            _: undefined,�   i   j   j            args: {�   j   k   k              colorMatch: boolean;�   k   l   l              documentId: string;�   l   m   m              imagePosition: number;�   m   n   n              productId: string;�   n   o   o            },�   o   p   p      )      { dataSources, user }: ContextType,�   p   q   q          ) =>�   q   r   r      ;      await dataSources.productService.syncInventoryImage({�   r   s   s      $        colorMatch: args.colorMatch,�   s   t   t      $        companyId: user.companyUuid,�   t   u   u      $        documentId: args.documentId,�   u   v   v      %        position: args.imagePosition,�   v   w   w      "        productId: args.productId,�   w   x   x              userId: user.uuid,�   x   y   y      	      }),�   y   z   z          syncInventoryData: async (�   z   {   {            _: undefined,�   {   |   |            args: {�   |   }   }      ,        actionType: InventorySyncActionType;�   }   ~   ~              channelId: string;�   ~                     type: InventorySyncType;�      �   �              groupIds?: string[];�   �   �   �              packageIds?: string[];�   �   �   �              productIds?: string[];�   �   �   �            },�   �   �   �      )      { dataSources, user }: ContextType,�   �   �   �          ) =>�   �   �   �      :      await dataSources.productService.syncInventoryData({�   �   �   �      $        actionType: args.actionType,�   �   �   �      "        channelId: args.channelId,�   �   �   �      $        companyId: user.companyUuid,�   �   �   �              type: args.type,�   �   �   �              userId: user.uuid,�   �   �   �      &        groupIds: args.groupIds || [],�   �   �   �      *        packageIds: args.packageIds || [],�   �   �   �      *        productIds: args.productIds || [],�   �   �   �      	      }),�   �   �   �      (    updateDocumentFileSignedSrc: async (�   �   �   �             parent: CoreAPIParentType,�   �   �   �            { id }: ArgsType,�   �   �   �      #      { dataSources }: ContextType,�   �   �   �      
    ) => {�   �   �   �      I      const results = await dataSources.documentService.getDocumentById({�   �   �   �              documentId: id,�   �   �   �              signed: true,�   �   �   �      	      });�   �   �   �       �   �   �   �            return {�   �   �   �              id: results.id,�   �   �   �              src: results.signedUrl,�   �   �   �              name: results.fileName,�   �   �   �            };�   �   �   �          },�   �   �   �        },�   �   �   �        Document: {�   �   �   �      1    // tslint:disable-line function-name prettier�   �   �   �          __resolveType({�   �   �   �      	      id,�   �   �   �            uuid,�   �   �   �            fileName,�   �   �   �          }: {�   �   �   �            id?: string;�   �   �   �            uuid?: string;�   �   �   �            fileName: string;�   �   �   �          }) {�   �   �   �            return {�   �   �   �              id: id || uuid,�   �   �   �              name: fileName,�   �   �   �            };�   �   �   �          },�   �   �   �        },�   �   �   �        DocumentFile: {�   �   �   �          src: documentSrcResolver,�   �   �   �        },�   �   �   �        DocumentImage: {�   �   �   �           src: documentImgSrcResolver,�   �   �   �        },�   �   �   �      };�   �   �        5��