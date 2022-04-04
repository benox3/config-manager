Vim�UnDo� �[�L#���E�w���!��2�dM�qx�(U�:      B// Set the global channel selection to the current listing channel                             _[�    _�                            ����                                                                                                                                                                                                                                                                                                                                         &       v       _[�j     �               Dexport default function useSyncChannels(listingChannelId?: string) {5�_�                          ����                                                                                                                                                                                                                                                                                                                                                v       _[�p     �      	         4    channels: { selectedNode, setSelectedNodeById },5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       _[�p    �      	         ,    : { selectedNode, setSelectedNodeById },5�_�                          ����                                                                                                                                                                                                                                                                                                                                         '       v       _[��     �               +  }, [selectedNode?.id, listingChannelId]);5�_�                           ����                                                                                                                                                                                                                                                                                                                                         )       v       _[��     �               ,      setSelectedNodeById(listingChannelId);5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                         +       v       _[��     �               D    if (listingChannelId && listingChannelId !== selectedNode?.id) {5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                v       _[��     �               C    if (listingChannelId && listingMarketId !== selectedNode?.id) {5�_�   	              
      '    ����                                                                                                                                                                                                                                                                                                                               '          6       v   '    _[��    �               Cexport default function useSyncMarkets(listingChannelId?: string) {5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                                v       _[�     �               B// Set the global channel selection to the current listing channel5�_�                        :    ����                                                                                                                                                                                                                                                                                                                               :          @       v   :    _[�    �               A// Set the global market selection to the current listing channel5�_�                    	       ����                                                                                                                                                                                                                                                                                                                                                v       _[�s     �      
           } = useContext(Context);5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       _[�m     �      	         3    Markets: { selectedNode, setSelectedNodeById },5��