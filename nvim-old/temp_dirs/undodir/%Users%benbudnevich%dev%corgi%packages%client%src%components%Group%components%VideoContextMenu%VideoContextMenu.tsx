Vim�UnDo� 1Y�|���W�X`��M϶[ ��a�����|�   �           .      
       
   
   
    _�v�    _�                     4       ����                                                                                                                                                                                                                                                                                                                                                             _�v�     �   3   5   �          e: React.ChangeEvent<{}>,5�_�                    4       ����                                                                                                                                                                                                                                                                                                                                                             _�v�     �   3   5   �          e: React.ChangeEvent<}>,5�_�                    4       ����                                                                                                                                                                                                                                                                                                                                                             _�v�     �   3   5   �          e: React.ChangeEvent<>,5�_�                    4       ����                                                                                                                                                                                                                                                                                                                                                             _�v�     �   3   5   �          e: React.ChangeEvent>,5�_�                    4       ����                                                                                                                                                                                                                                                                                                                                                             _�v�    �   }   ~           �   |   ~   }    �   {   }   |    �   z   |   {    �   y   {   z    �   x   z   y    �   w   y   x    �   v   x   w    �   u   w   v    �   t   v   u    �   s   u   t    �   r   t   s    �   q   s   r    �   p   r   q    �   o   q   p    �   n   p   o    �   m   o   n    �   l   n   m    �   k   m   l    �   j   l   k    �   i   k   j    �   h   j   i    �   g   i   h    �   f   h   g    �   e   g   f    �   d   f   e    �   c   e   d    �   b   d   c    �   a   c   b    �   `   b   a    �   _   a   `    �   ^   `   _    �   ]   _   ^    �   \   ^   ]    �   [   ]   \    �   Z   \   [    �   Y   [   Z    �   X   Z   Y    �   W   Y   X    �   V   X   W    �   U   W   V    �   T   V   U    �   S   U   T    �   R   T   S    �   Q   S   R    �   P   R   Q    �   O   Q   P    �   N   P   O    �   M   O   N    �   L   N   M    �   K   M   L    �   J   L   K    �   I   K   J    �   H   J   I    �   G   I   H    �   F   H   G    �   E   G   F    �   D   F   E    �   C   E   D    �   B   D   C    �   A   C   B    �   @   B   A    �   ?   A   @    �   >   @   ?    �   =   ?   >    �   <   >   =    �   ;   =   <    �   :   <   ;    �   9   ;   :    �   8   :   9    �   7   9   8    �   6   8   7    �   5   7   6    �   4   6   5    �   3   5   4    �   2   4   3    �   1   3   2    �   0   2   1    �   /   1   0    �   .   0   /    �   -   /   .    �   ,   .   -    �   +   -   ,    �   *   ,   +    �   )   +   *    �   (   *   )    �   '   )   (    �   &   (   '    �   %   '   &    �   $   &   %    �   #   %   $    �   "   $   #    �   !   #   "    �       "   !    �      !        �              �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �   
          �   	      
    �      
   	    �      	       �             �             �             �             �             �             �              �              �   import {     Box,     FormControlLabel,     Grid,     Menu,   	  Slider,   	  Switch,     Typography,   } from '@material-ui/core';   :import { VolumeDown, VolumeUp } from '@material-ui/icons';   import theme from 'lib/theme';   (import React, { useState } from 'react';   (import { useRecoilState } from 'recoil';       ;import { pinnedStreamIdState } from '../../lib/GroupState';       interface Props {     children: React.ReactNode;     volume: number;   &  setVolume: (volume: number) => void;     streamId: string;   }       const initialState = {     mouseX: null,     mouseY: null,   };       8export default function VideoContextMenu(props: Props) {   &  const [state, setState] = useState<{       mouseX: null | number;       mouseY: null | number;     }>(initialState);       =  const [pinnedStreamId, setPinnedStreamId] = useRecoilState(       pinnedStreamIdState,     );       G  const handleOpenMenu = (event: React.MouseEvent<HTMLDivElement>) => {       event.preventDefault();       setState({          mouseX: event.clientX - 2,          mouseY: event.clientY - 4,       });     };         const handleClose = () => {       setState(initialState);     };         const onVolumeChange = (       e: React.ChangeEvent,       value: number | number[],     ) => {   $    if (typeof value === 'number') {         props.setVolume(value);       }     };       O  const onPinnedVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {   D    setPinnedStreamId(event.target.checked ? props.streamId : null);     };       $  const onDoubleClickVideo = () => {       setPinnedStreamId(   @      pinnedStreamId === props.streamId ? null : props.streamId,       );     };       
  return (       <>   
      <Box           width="100%"           height="100%"   &        onContextMenu={handleOpenMenu}   *        onDoubleClick={onDoubleClickVideo}         >           {props.children}         </Box>         <Menu           keepMounted   $        open={state.mouseY !== null}           onClose={handleClose}   (        anchorReference="anchorPosition"           anchorPosition={   8          state.mouseY !== null && state.mouseX !== null   7            ? { top: state.mouseY, left: state.mouseX }               : undefined   	        }         >   2        <Box width="200px" p={theme.spacing(0.3)}>             <FormControlLabel   A            style={{ margin: 0, marginBottom: theme.spacing(1) }}               control={                 <Switch                   color="primary"   ;                checked={pinnedStreamId === props.streamId}   .                onChange={onPinnedVideoChange}   "                name="pinnedVideo"                 />               }               label="Pin Video"   "            labelPlacement="start"             />       6          <Typography id="volume-slider" gutterBottom>               Volume             </Typography>   &          <Grid container spacing={2}>               <Grid item>                 <VolumeDown />               </Grid>               <Grid item xs>                 <Slider   $                value={props.volume}   )                onChange={onVolumeChange}   /                aria-labelledby="volume-slider"                 />               </Grid>               <Grid item>                 <VolumeUp />               </Grid>             </Grid>           </Box>         </Menu>       </>     );   }�   3   5   �          e: React.ChangeEvent,5�_�                    3   .    ����                                                                                                                                                                                                                                                                                                                                                             _�v�     �   2   4   }      N  const onVolumeChange = (e: React.ChangeEvent, value: number | number[]) => {5�_�                    3   /    ����                                                                                                                                                                                                                                                                                                                                                             _�v�     �   2   4   }      O  const onVolumeChange = (e: React.ChangeEvent<, value: number | number[]) => {5�_�      	              3   6    ����                                                                                                                                                                                                                                                                                                                                                             _�v�     �   2   4   }      V  const onVolumeChange = (e: React.ChangeEvent<Record<, value: number | number[]) => {5�_�      
           	   3   A    ����                                                                                                                                                                                                                                                                                                                                                             _�v�     �   2   4   }      a  const onVolumeChange = (e: React.ChangeEvent<Record<string, unk, value: number | number[]) => {5�_�   	               
   3   F    ����                                                                                                                                                                                                                                                                                                                                                             _�v�    �   �   �           �      �   �    �   ~   �       �   }      ~    �   |   ~   }    �   {   }   |    �   z   |   {    �   y   {   z    �   x   z   y    �   w   y   x    �   v   x   w    �   u   w   v    �   t   v   u    �   s   u   t    �   r   t   s    �   q   s   r    �   p   r   q    �   o   q   p    �   n   p   o    �   m   o   n    �   l   n   m    �   k   m   l    �   j   l   k    �   i   k   j    �   h   j   i    �   g   i   h    �   f   h   g    �   e   g   f    �   d   f   e    �   c   e   d    �   b   d   c    �   a   c   b    �   `   b   a    �   _   a   `    �   ^   `   _    �   ]   _   ^    �   \   ^   ]    �   [   ]   \    �   Z   \   [    �   Y   [   Z    �   X   Z   Y    �   W   Y   X    �   V   X   W    �   U   W   V    �   T   V   U    �   S   U   T    �   R   T   S    �   Q   S   R    �   P   R   Q    �   O   Q   P    �   N   P   O    �   M   O   N    �   L   N   M    �   K   M   L    �   J   L   K    �   I   K   J    �   H   J   I    �   G   I   H    �   F   H   G    �   E   G   F    �   D   F   E    �   C   E   D    �   B   D   C    �   A   C   B    �   @   B   A    �   ?   A   @    �   >   @   ?    �   =   ?   >    �   <   >   =    �   ;   =   <    �   :   <   ;    �   9   ;   :    �   8   :   9    �   7   9   8    �   6   8   7    �   5   7   6    �   4   6   5    �   3   5   4    �   2   4   3    �   1   3   2    �   0   2   1    �   /   1   0    �   .   0   /    �   -   /   .    �   ,   .   -    �   +   -   ,    �   *   ,   +    �   )   +   *    �   (   *   )    �   '   )   (    �   &   (   '    �   %   '   &    �   $   &   %    �   #   %   $    �   "   $   #    �   !   #   "    �       "   !    �      !        �              �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �   
          �   	      
    �      
   	    �      	       �             �             �             �             �             �             �              �              }   import {     Box,     FormControlLabel,     Grid,     Menu,   	  Slider,   	  Switch,     Typography,   } from '@material-ui/core';   :import { VolumeDown, VolumeUp } from '@material-ui/icons';   import theme from 'lib/theme';   (import React, { useState } from 'react';   (import { useRecoilState } from 'recoil';       ;import { pinnedStreamIdState } from '../../lib/GroupState';       interface Props {     children: React.ReactNode;     volume: number;   &  setVolume: (volume: number) => void;     streamId: string;   }       const initialState = {     mouseX: null,     mouseY: null,   };       8export default function VideoContextMenu(props: Props) {   &  const [state, setState] = useState<{       mouseX: null | number;       mouseY: null | number;     }>(initialState);       =  const [pinnedStreamId, setPinnedStreamId] = useRecoilState(       pinnedStreamIdState,     );       G  const handleOpenMenu = (event: React.MouseEvent<HTMLDivElement>) => {       event.preventDefault();       setState({          mouseX: event.clientX - 2,          mouseY: event.clientY - 4,       });     };         const handleClose = () => {       setState(initialState);     };       g  const onVolumeChange = (e: React.ChangeEvent<Record<string, unknown>>, value: number | number[]) => {   $    if (typeof value === 'number') {         props.setVolume(value);       }     };       O  const onPinnedVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {   D    setPinnedStreamId(event.target.checked ? props.streamId : null);     };       $  const onDoubleClickVideo = () => {       setPinnedStreamId(   @      pinnedStreamId === props.streamId ? null : props.streamId,       );     };       
  return (       <>   
      <Box           width="100%"           height="100%"   &        onContextMenu={handleOpenMenu}   *        onDoubleClick={onDoubleClickVideo}         >           {props.children}         </Box>         <Menu           keepMounted   $        open={state.mouseY !== null}           onClose={handleClose}   (        anchorReference="anchorPosition"           anchorPosition={   8          state.mouseY !== null && state.mouseX !== null   7            ? { top: state.mouseY, left: state.mouseX }               : undefined   	        }         >   2        <Box width="200px" p={theme.spacing(0.3)}>             <FormControlLabel   A            style={{ margin: 0, marginBottom: theme.spacing(1) }}               control={                 <Switch                   color="primary"   ;                checked={pinnedStreamId === props.streamId}   .                onChange={onPinnedVideoChange}   "                name="pinnedVideo"                 />               }               label="Pin Video"   "            labelPlacement="start"             />       6          <Typography id="volume-slider" gutterBottom>               Volume             </Typography>   &          <Grid container spacing={2}>               <Grid item>                 <VolumeDown />               </Grid>               <Grid item xs>                 <Slider   $                value={props.volume}   )                onChange={onVolumeChange}   /                aria-labelledby="volume-slider"                 />               </Grid>               <Grid item>                 <VolumeUp />               </Grid>             </Grid>           </Box>         </Menu>       </>     );   }�   2   4   }      g  const onVolumeChange = (e: React.ChangeEvent<Record<string, unknown>>, value: number | number[]) => {5��