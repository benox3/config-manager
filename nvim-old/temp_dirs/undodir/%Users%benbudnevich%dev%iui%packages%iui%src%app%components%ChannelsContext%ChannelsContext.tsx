Vim�UnDo� @�_.�x��-�����S�\{�������  (                                   `�e     _�                     �        ����                                                                                                                                                                                                                                                                                                                                                             `��c     �              .   import gql from 'graphql-tag';   Limport React, { useCallback, useContext, useEffect, useState } from 'react';       <import { ColorLevel, ColorName, HexColor } from 'happytree';        import { MeContext } from 'App';   *import useQuery from 'Lib/hooks/useQuery';   %import { noop } from 'Src/constants';   import {     ChannelMarket,     ChannelsContextChannelsQuery,     ChannelsContextMarketsQuery,     CompanyRole,     Fed_Group,   } from 'Src/generated/graphql';       4import enhanceNodeData from './lib/enhanceNodeData';   <import setSelectedNodeById from './lib/setSelectedNodeById';   <import useAvailableMarkets from './lib/useAvailableMarkets';       1const marketColors: [ColorName, ColorLevel][] = [     ['blue', 2],     ['aqua', 2],     ['yellow', 2],     ['red', 2],     ['gray', 2],     ['purple', 2],     ['orange', 2],     ['green', 2],     ['brown', 2],   ];       2const channelColors = [...marketColors].reverse();       type Props = {     children: React.ReactNode;   };       export type Markets = {     nodes: EnhancedMarket[];   };       +export type EnhancedChannel = Fed_Group & {     textColor: HexColor;     color: HexColor;   };   .export type EnhancedMarket = ChannelMarket & {     textColor: HexColor;     color: HexColor;   };       export type Channels = {     nodes: EnhancedChannel[];   };       $export type ChannelsContextValue = {     channels: {       data: Channels;       isLoading: boolean;   #    selectedNode?: EnhancedChannel;   .    setSelectedNodeById: (id: string) => void;       refetch: () => void;     };     markets: {       data: Markets;       allMarketsData: Markets;       isLoading: boolean;   "    selectedNode?: EnhancedMarket;   .    setSelectedNodeById: (id: string) => void;        refetch: () => Promise<any>;     };   };       "export const CHANNELS_QUERY = gql`   !  query ChannelsContextChannels {   &    FED_groups(type: UPLOAD_CHANNEL) {         nodes {   
        id           name         }       }     }   `;       !export const MARKETS_QUERY = gql`   2  query ChannelsContextMarkets($groupId: String) {   .    productServiceMarkets(groupId: $groupId) {         nodes {   
        id           name           currency {             id             code             name             symbol   	        }         }       }     }   `;       #const defaultChannels: Channels = {     nodes: [],   };       !const defaultMarkets: Markets = {     nodes: [],   };       3export const defaultValue: ChannelsContextValue = {     channels: {       data: defaultChannels,       isLoading: false,       setSelectedNodeById: noop,       refetch: noop,     },     markets: {   #    allMarketsData: defaultMarkets,       data: defaultMarkets,       isLoading: false,       setSelectedNodeById: noop,       refetch: noop,     },   };       Iexport const ChannelsContext = React.createContext<ChannelsContextValue>(     defaultValue,   );       0export function ChannelsProvider(props: Props) {   '  const { me } = useContext(MeContext);       9  const [selectedChannel, setSelectedChannel] = useState<   4    ChannelsContextValue['channels']['selectedNode']     >();   7  const [selectedMarket, setSelectedMarket] = useState<   3    ChannelsContextValue['markets']['selectedNode']     >();       	  const {       data: channelsData,       loading: isChannelsLoading,       refetch: refetchChannels,   .  } = useQuery<ChannelsContextChannelsQuery>({       query: CHANNELS_QUERY,   <<<<<<< HEAD       variables: {   A      creatorId: me.userRole === 'MANAGER' ? me.uuid : undefined,       },   =======   >>>>>>> origin/master   9    skip: !me.id || me.companyRole === CompanyRole.Buyer,     });       	  const {       data: marketsData,       loading: isMarketsLoading,       refetch: refetchMarkets,   -  } = useQuery<ChannelsContextMarketsQuery>({       query: MARKETS_QUERY,       variables: {   #      groupId: selectedChannel?.id,       },   	    skip:   M      !me.id || !selectedChannel?.id || me.companyRole === CompanyRole.Buyer,     });          const getChannelData = () => {   6    if (!channelsData || isChannelsLoading) return [];       &    return enhanceNodeData<Fed_Group>(         channelsData.FED_groups,         channelColors,   ,    ).sort((a: Fed_Group, b: Fed_Group) => {   &      return a.name > b.name ? 1 : -1;       });     };         const getMarketData = () => {   4    if (!marketsData || isMarketsLoading) return [];       *    return enhanceNodeData<ChannelMarket>(   (      marketsData.productServiceMarkets,         marketColors,   O    ).sort((a: ChannelMarket, b: ChannelMarket) => (a.name > b.name ? 1 : -1));     };       ,  const enhancedChannels = getChannelData();   *  const enhancedMarkets = getMarketData();         const channels = {   &    data: { nodes: enhancedChannels },   "    selectedNode: selectedChannel,   ?    setSelectedNodeById: setSelectedNodeById<EnhancedChannel>({         nodes: enhancedChannels,   *      setSelectedNode: setSelectedChannel,       }),       refetch: refetchChannels,   !    isLoading: isChannelsLoading,     };       K  // Even though we are eventually only going to show a subset of these, we   L  // still want to maintain the master list so that the color codes that get   N  // assigned to each market are consistent at a high level. Otherwise, colors   3  // would change whenever users switched channels.     const allMarkets = {   %    data: { nodes: enhancedMarkets },   /    allMarketsData: { nodes: enhancedMarkets },   !    selectedNode: selectedMarket,   >    setSelectedNodeById: setSelectedNodeById<EnhancedMarket>({         nodes: enhancedMarkets,   )      setSelectedNode: setSelectedMarket,       }),       refetch: refetchMarkets,        isLoading: isMarketsLoading,     };       L  // This is a subset of markets that are guaranteed to have pricing data in   L  // them for the selected channel. We hide any markets that have no pricing   N  // in them. There is currently no use case for the ENTIRE list of markets in      // the app. This could change!   	  const {       availableMarkets,   )    isLoading: isAvailableMarketsLoading,   %    refetch: refetchAvailableMarkets,     } = useAvailableMarkets({       me,       channels,       markets: allMarkets,     });       8  const refetchAllMarketData = useCallback(async () => {       await refetchMarkets();   $    await refetchAvailableMarkets();   	  }, []);       '  const value: ChannelsContextValue = {       channels,       markets: {         ...allMarkets,   ?      isLoading: isMarketsLoading || isAvailableMarketsLoading,         data: {   !        ...availableMarkets.data,   0        nodes: availableMarkets.data.nodes.sort(   M          (a: ChannelMarket, b: ChannelMarket) => (a.name > b.name ? 1 : -1),   
        ),         },   $      refetch: refetchAllMarketData,       },     };         useEffect(() => {   J    const isChannelUnset = !selectedChannel && channels.data.nodes.length;   I    const persistedChannelId = localStorage.getItem('selectedChannelId');       %    const setDefaultChannel = () => {   1      setSelectedChannel(channels.data.nodes[0]);       };           if (persistedChannelId) {   3      const channelNode = channels.data.nodes.find(   B        (node: EnhancedChannel) => node.id === persistedChannelId,         );             if (!channelNode) {   #        return setDefaultChannel();         }       -      return setSelectedChannel(channelNode);       }           if (isChannelUnset) {         setDefaultChannel();       }     }, [   *    selectedChannel && selectedChannel.id,   3    channels.data.nodes.map(({ id }) => id).join(),     ]);         useEffect(() => {   P    const isMarketUnset = !selectedMarket && availableMarkets.data.nodes.length;   -    const isSelectedMarketNoLongerAvailable =         selectedMarket &&   +      availableMarkets.data.nodes.length &&   (      !availableMarkets.data.nodes.find(   4        (market) => market.id === selectedMarket.id,         );       =    if (isMarketUnset || isSelectedMarketNoLongerAvailable) {   8      setSelectedMarket(availableMarkets.data.nodes[0]);       }     }, [   (    selectedMarket && selectedMarket.id,   ;    availableMarkets.data.nodes.map(({ id }) => id).join(),     ]);       
  return (   ,    <ChannelsContext.Provider value={value}>         {props.children}       </ChannelsContext.Provider>     );   }5�5�_�                     �        ����                                                                                                                                                                                                                                                                                                                                                             `�d     �              +   import gql from 'graphql-tag';   Limport React, { useCallback, useContext, useEffect, useState } from 'react';       <import { ColorLevel, ColorName, HexColor } from 'happytree';        import { MeContext } from 'App';   *import useQuery from 'Lib/hooks/useQuery';   %import { noop } from 'Src/constants';   import {     ChannelMarket,     ChannelsContextChannelsQuery,     ChannelsContextMarketsQuery,     CompanyRole,     Fed_Group,   } from 'Src/generated/graphql';       4import enhanceNodeData from './lib/enhanceNodeData';   <import setSelectedNodeById from './lib/setSelectedNodeById';   <import useAvailableMarkets from './lib/useAvailableMarkets';       1const marketColors: [ColorName, ColorLevel][] = [     ['blue', 2],     ['aqua', 2],     ['yellow', 2],     ['red', 2],     ['gray', 2],     ['purple', 2],     ['orange', 2],     ['green', 2],     ['brown', 2],   ];       2const channelColors = [...marketColors].reverse();       type Props = {     children: React.ReactNode;   };       export type Markets = {     nodes: EnhancedMarket[];   };       +export type EnhancedChannel = Fed_Group & {     textColor: HexColor;     color: HexColor;   };   .export type EnhancedMarket = ChannelMarket & {     textColor: HexColor;     color: HexColor;   };       export type Channels = {     nodes: EnhancedChannel[];   };       $export type ChannelsContextValue = {     channels: {       data: Channels;       isLoading: boolean;   #    selectedNode?: EnhancedChannel;   .    setSelectedNodeById: (id: string) => void;       refetch: () => void;     };     markets: {       data: Markets;       allMarketsData: Markets;       isLoading: boolean;   "    selectedNode?: EnhancedMarket;   .    setSelectedNodeById: (id: string) => void;        refetch: () => Promise<any>;     };   };       "export const CHANNELS_QUERY = gql`   !  query ChannelsContextChannels {   &    FED_groups(type: UPLOAD_CHANNEL) {         nodes {   
        id           name         }       }     }   `;       !export const MARKETS_QUERY = gql`   2  query ChannelsContextMarkets($groupId: String) {   .    productServiceMarkets(groupId: $groupId) {         nodes {   
        id           name           currency {             id             code             name             symbol   	        }         }       }     }   `;       #const defaultChannels: Channels = {     nodes: [],   };       !const defaultMarkets: Markets = {     nodes: [],   };       3export const defaultValue: ChannelsContextValue = {     channels: {       data: defaultChannels,       isLoading: false,       setSelectedNodeById: noop,       refetch: noop,     },     markets: {   #    allMarketsData: defaultMarkets,       data: defaultMarkets,       isLoading: false,       setSelectedNodeById: noop,       refetch: noop,     },   };       Iexport const ChannelsContext = React.createContext<ChannelsContextValue>(     defaultValue,   );       0export function ChannelsProvider(props: Props) {   '  const { me } = useContext(MeContext);       9  const [selectedChannel, setSelectedChannel] = useState<   4    ChannelsContextValue['channels']['selectedNode']     >();   7  const [selectedMarket, setSelectedMarket] = useState<   3    ChannelsContextValue['markets']['selectedNode']     >();       	  const {       data: channelsData,       loading: isChannelsLoading,       refetch: refetchChannels,   .  } = useQuery<ChannelsContextChannelsQuery>({       query: CHANNELS_QUERY,       variables: {   A      creatorId: me.userRole === 'MANAGER' ? me.uuid : undefined,       },   9    skip: !me.id || me.companyRole === CompanyRole.Buyer,     });       	  const {       data: marketsData,       loading: isMarketsLoading,       refetch: refetchMarkets,   -  } = useQuery<ChannelsContextMarketsQuery>({       query: MARKETS_QUERY,       variables: {   #      groupId: selectedChannel?.id,       },   	    skip:   M      !me.id || !selectedChannel?.id || me.companyRole === CompanyRole.Buyer,     });          const getChannelData = () => {   6    if (!channelsData || isChannelsLoading) return [];       &    return enhanceNodeData<Fed_Group>(         channelsData.FED_groups,         channelColors,   ,    ).sort((a: Fed_Group, b: Fed_Group) => {   &      return a.name > b.name ? 1 : -1;       });     };         const getMarketData = () => {   4    if (!marketsData || isMarketsLoading) return [];       *    return enhanceNodeData<ChannelMarket>(   (      marketsData.productServiceMarkets,         marketColors,   O    ).sort((a: ChannelMarket, b: ChannelMarket) => (a.name > b.name ? 1 : -1));     };       ,  const enhancedChannels = getChannelData();   *  const enhancedMarkets = getMarketData();         const channels = {   &    data: { nodes: enhancedChannels },   "    selectedNode: selectedChannel,   ?    setSelectedNodeById: setSelectedNodeById<EnhancedChannel>({         nodes: enhancedChannels,   *      setSelectedNode: setSelectedChannel,       }),       refetch: refetchChannels,   !    isLoading: isChannelsLoading,     };       K  // Even though we are eventually only going to show a subset of these, we   L  // still want to maintain the master list so that the color codes that get   N  // assigned to each market are consistent at a high level. Otherwise, colors   3  // would change whenever users switched channels.     const allMarkets = {   %    data: { nodes: enhancedMarkets },   /    allMarketsData: { nodes: enhancedMarkets },   !    selectedNode: selectedMarket,   >    setSelectedNodeById: setSelectedNodeById<EnhancedMarket>({         nodes: enhancedMarkets,   )      setSelectedNode: setSelectedMarket,       }),       refetch: refetchMarkets,        isLoading: isMarketsLoading,     };       L  // This is a subset of markets that are guaranteed to have pricing data in   L  // them for the selected channel. We hide any markets that have no pricing   N  // in them. There is currently no use case for the ENTIRE list of markets in      // the app. This could change!   	  const {       availableMarkets,   )    isLoading: isAvailableMarketsLoading,   %    refetch: refetchAvailableMarkets,     } = useAvailableMarkets({       me,       channels,       markets: allMarkets,     });       8  const refetchAllMarketData = useCallback(async () => {       await refetchMarkets();   $    await refetchAvailableMarkets();   	  }, []);       '  const value: ChannelsContextValue = {       channels,       markets: {         ...allMarkets,   ?      isLoading: isMarketsLoading || isAvailableMarketsLoading,         data: {   !        ...availableMarkets.data,   0        nodes: availableMarkets.data.nodes.sort(   M          (a: ChannelMarket, b: ChannelMarket) => (a.name > b.name ? 1 : -1),   
        ),         },   $      refetch: refetchAllMarketData,       },     };         useEffect(() => {   J    const isChannelUnset = !selectedChannel && channels.data.nodes.length;   I    const persistedChannelId = localStorage.getItem('selectedChannelId');       %    const setDefaultChannel = () => {   1      setSelectedChannel(channels.data.nodes[0]);       };           if (persistedChannelId) {   3      const channelNode = channels.data.nodes.find(   B        (node: EnhancedChannel) => node.id === persistedChannelId,         );             if (!channelNode) {   #        return setDefaultChannel();         }       -      return setSelectedChannel(channelNode);       }           if (isChannelUnset) {         setDefaultChannel();       }     }, [   *    selectedChannel && selectedChannel.id,   3    channels.data.nodes.map(({ id }) => id).join(),     ]);         useEffect(() => {   P    const isMarketUnset = !selectedMarket && availableMarkets.data.nodes.length;   -    const isSelectedMarketNoLongerAvailable =         selectedMarket &&   +      availableMarkets.data.nodes.length &&   (      !availableMarkets.data.nodes.find(   4        (market) => market.id === selectedMarket.id,         );       =    if (isMarketUnset || isSelectedMarketNoLongerAvailable) {   8      setSelectedMarket(availableMarkets.data.nodes[0]);       }     }, [   (    selectedMarket && selectedMarket.id,   ;    availableMarkets.data.nodes.map(({ id }) => id).join(),     ]);       
  return (   ,    <ChannelsContext.Provider value={value}>         {props.children}       </ChannelsContext.Provider>     );   }5�5��