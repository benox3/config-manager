Vim�UnDo� :���mqm.^>n!��b3t\����Ǫa��ٍ.�   g                                  _h��    _�                     6        ����                                                                                                                                                                                                                                                                                                                                                             _h��     �   6   8   o                      �   6   8   n    5�_�                    7       ����                                                                                                                                                                                                                                                                                                                                                             _h��     �   6   8   o                      aria-label={}5�_�                    7   #    ����                                                                                                                                                                                                                                                                                                                            7   #       7   (       v   #    _h��     �   6   8   o      0                aria-label={props['aria-label']}5�_�                    7   #    ����                                                                                                                                                                                                                                                                                                                            7   #       7   (       v   #    _h��     �   6   8   o      *                aria-label={props['abel']}5�_�                    7   #    ����                                                                                                                                                                                                                                                                                                                            7   #       7   (       v   #    _h��     �   6   8   o      &                aria-label={props['']}5�_�                   8       ����                                                                                                                                                                                                                                                                                                                            7   #       7   (       v   #    _h�     �   o   p           �   n   p   o    �   m   o   n    �   l   n   m    �   k   m   l    �   j   l   k    �   i   k   j    �   h   j   i    �   g   i   h    �   f   h   g    �   e   g   f    �   d   f   e    �   c   e   d    �   b   d   c    �   a   c   b    �   `   b   a    �   _   a   `    �   ^   `   _    �   ]   _   ^    �   \   ^   ]    �   [   ]   \    �   Z   \   [    �   Y   [   Z    �   X   Z   Y    �   W   Y   X    �   V   X   W    �   U   W   V    �   T   V   U    �   S   U   T    �   R   T   S    �   Q   S   R    �   P   R   Q    �   O   Q   P    �   N   P   O    �   M   O   N    �   L   N   M    �   K   M   L    �   J   L   K    �   I   K   J    �   H   J   I    �   G   I   H    �   F   H   G    �   E   G   F    �   D   F   E    �   C   E   D    �   B   D   C    �   A   C   B    �   @   B   A    �   ?   A   @    �   >   @   ?    �   =   ?   >    �   <   >   =    �   ;   =   <    �   :   <   ;    �   9   ;   :    �   8   :   9    �   7   9   8    �   6   8   7    �   5   7   6    �   4   6   5    �   3   5   4    �   2   4   3    �   1   3   2    �   0   2   1    �   /   1   0    �   .   0   /    �   -   /   .    �   ,   .   -    �   +   -   ,    �   *   ,   +    �   )   +   *    �   (   *   )    �   '   )   (    �   &   (   '    �   %   '   &    �   $   &   %    �   #   %   $    �   "   $   #    �   !   #   "    �       "   !    �      !        �              �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �   
          �   	      
    �      
   	    �      	       �             �             �             �             �             �             �              �              o   import React from 'react';       :import { Box, Checkbox, Flex, Text, Tooltip } from 'dank';   :import { EventPayload } from 'dank/lib/Checkbox/Checkbox';   !import getColor from 'happytree';       %import { noop } from 'Src/constants';       import Cell from '../Cell';       type Props = {     children: string;   =  handleSelection: (id: string, isSelected: boolean) => void;     hasOuterBorderLeft: boolean;     hasOuterBorderTop: boolean;     hasBorderTop: boolean;     id: string;     isDisabled: boolean;     isFocused: boolean;     isSelected: boolean;   *  checkboxTooltipContent: React.ReactNode;   };       const defaultProps: Props = {     children: '',     handleSelection: noop,     hasOuterBorderLeft: false,     hasOuterBorderTop: false,     hasBorderTop: false,   	  id: '',     isDisabled: false,     isFocused: false,     isSelected: false,     checkboxTooltipContent: '',   };       8export default function RowSelectionCell(props: Props) {   
  return (   	    <Cell   '      hasBorderTop={props.hasBorderTop}   3      hasOuterBorderLeft={props.hasOuterBorderLeft}   1      hasOuterBorderTop={props.hasOuterBorderTop}   #      isDisabled={props.isDisabled}   !      isFocused={props.isFocused}   #      isSelected={props.isSelected}   '      onClick={handleCellChange(props)}   &      onKeyDown={handleKeyDown(props)}       >         <Flex width="100%">           <Box width={1 / 3}>   (          <Flex justifyContent="center">   L            <Tooltip placement="right" title={props.checkboxTooltipContent}>   4              <Box css="height: 16px;" width="16px">                   <Checkbox   7                aria-label={props['checkboxAriaLabel']}   ,                  checked={props.isSelected}   -                  disabled={props.isDisabled}   4                  onChange={handleCellChange(props)}                   />                 </Box>               </Tooltip>             </Flex>           </Box>           <Box width={2 / 3}>   (          <Flex justifyContent="center">               <Text.Body                 color={   O                props.isFocused ? getColor('primary') : getColor('neutral', -4)                 }                 fontWeight={700}               >                 {props.children}               </Text.Body>             </Flex>           </Box>         </Flex>       </Cell>     );   }   -RowSelectionCell.defaultProps = defaultProps;       &function handleKeyDown(props: Props) {   9  return function onKeyDown(event: React.KeyboardEvent) {   ,    const { isFocused, isDisabled } = props;       if (isDisabled) return;           const enterKeyCode = 13;   /    const submitKeys = new Set([enterKeyCode]);       5    if (submitKeys.has(event.keyCode) && isFocused) {         event.preventDefault();   %      handleCellChange(props)(event);       }     };   }       )function handleCellChange(props: Props) {     return function onCellChange(   A    event: React.MouseEvent | React.KeyboardEvent | EventPayload,     ) {   B    const { id, isDisabled, isSelected, handleSelection } = props;       if (isDisabled) return;       F    // prevent it from firing two events when clicking on the checkbox   $    if ('preventDefault' in event) {         event.preventDefault();       }       $    handleSelection(id, isSelected);     };   }�   7   9   o      ,                  checked={props.isSelected}5�_�      	              6       ����                                                                                                                                                                                                                                                                                                                            p   #       p   (       v   #    _h�    �   6   8   o      9                  aria-label={props['checkboxAriaLabel']}5�_�      
           	   "       ����                                                                                                                                                                                                                                                                                                                            p   #       p   (       v   #    _h�     �   "   $   p        �   "   $   o    5�_�   	              
   #       ����                                                                                                                                                                                                                                                                                                                            q   #       q   (       v   #    _h�     �   "   #            checkboxA5�_�   
                         ����                                                                                                                                                                                                                                                                                                                            p   #       p   (       v   #    _h�     �         p        �         o    5�_�                           ����                                                                                                                                                                                                                                                                                                                            q   #       q   (       v   #    _h�!    �         p        checkboxAriaLabel: string;5�_�                           ����                                                                                                                                                                                                                                                                                                                               	          	       v   	    _h�     �               p   import React from 'react';       :import { Box, Checkbox, Flex, Text, Tooltip } from 'dank';   :import { EventPayload } from 'dank/lib/Checkbox/Checkbox';   !import getColor from 'happytree';       %import { noop } from 'Src/constants';       import Cell from '../Cell';       type Props = {     children: string;   =  handleSelection: (id: string, isSelected: boolean) => void;     hasOuterBorderLeft: boolean;     hasOuterBorderTop: boolean;     hasBorderTop: boolean;     id: string;     isDisabled: boolean;     isFocused: boolean;     isSelected: boolean;   *  checkboxTooltipContent: React.ReactNode;     checkboxAriaLabel?: string;   };       const defaultProps: Props = {     children: '',     handleSelection: noop,     hasOuterBorderLeft: false,     hasOuterBorderTop: false,     hasBorderTop: false,   	  id: '',     isDisabled: false,     isFocused: false,     isSelected: false,     checkboxTooltipContent: '',   };       8export default function RowSelectionCell(props: Props) {   
  return (   	    <Cell   '      hasBorderTop={props.hasBorderTop}   3      hasOuterBorderLeft={props.hasOuterBorderLeft}   1      hasOuterBorderTop={props.hasOuterBorderTop}   #      isDisabled={props.isDisabled}   !      isFocused={props.isFocused}   #      isSelected={props.isSelected}   '      onClick={handleCellChange(props)}   &      onKeyDown={handleKeyDown(props)}       >         <Flex width="100%">           <Box width={1 / 3}>   (          <Flex justifyContent="center">   L            <Tooltip placement="right" title={props.checkboxTooltipContent}>   4              <Box css="height: 16px;" width="16px">                   <Checkbox   6                  aria-label={props.checkboxAriaLabel}   ,                  checked={props.isSelected}   -                  disabled={props.isDisabled}   4                  onChange={handleCellChange(props)}                   />                 </Box>               </Tooltip>             </Flex>           </Box>           <Box width={2 / 3}>   (          <Flex justifyContent="center">               <Text.Body                 color={   O                props.isFocused ? getColor('primary') : getColor('neutral', -4)                 }                 fontWeight={700}               >                 {props.children}               </Text.Body>             </Flex>           </Box>         </Flex>       </Cell>     );   }   -RowSelectionCell.defaultProps = defaultProps;       &function handleKeyDown(props: Props) {   9  return function onKeyDown(event: React.KeyboardEvent) {   ,    const { isFocused, isDisabled } = props;       if (isDisabled) return;           const enterKeyCode = 13;   /    const submitKeys = new Set([enterKeyCode]);       5    if (submitKeys.has(event.keyCode) && isFocused) {         event.preventDefault();   %      handleCellChange(props)(event);       }     };   }       )function handleCellChange(props: Props) {     return function onCellChange(   A    event: React.MouseEvent | React.KeyboardEvent | EventPayload,     ) {   B    const { id, isDisabled, isSelected, handleSelection } = props;       if (isDisabled) return;       F    // prevent it from firing two events when clicking on the checkbox   $    if ('preventDefault' in event) {         event.preventDefault();       }       $    handleSelection(id, isSelected);     };   }5�_�                       	    ����                                                                                                                                                                                                                                                                                                                               	          	       v   	    _h��     �         p      :import { Box, Checkbox, Flex, Text, Tooltip } from 'dank';5�_�                       	    ����                                                                                                                                                                                                                                                                                                                               	          	       v   	    _h��     �         p      7import { , Checkbox, Flex, Text, Tooltip } from 'dank';5�_�                           ����                                                                                                                                                                                                                                                                                                                               	          	       v   	    _h��     �         p      6import {  Checkbox, Flex, Text, Tooltip } from 'dank';5�_�                           ����                                                                                                                                                                                                                                                                                                                               	          	       v   	    _h��     �   p   q           �   o   q   p    �   n   p   o    �   m   o   n    �   l   n   m    �   k   m   l    �   j   l   k    �   i   k   j    �   h   j   i    �   g   i   h    �   f   h   g    �   e   g   f    �   d   f   e    �   c   e   d    �   b   d   c    �   a   c   b    �   `   b   a    �   _   a   `    �   ^   `   _    �   ]   _   ^    �   \   ^   ]    �   [   ]   \    �   Z   \   [    �   Y   [   Z    �   X   Z   Y    �   W   Y   X    �   V   X   W    �   U   W   V    �   T   V   U    �   S   U   T    �   R   T   S    �   Q   S   R    �   P   R   Q    �   O   Q   P    �   N   P   O    �   M   O   N    �   L   N   M    �   K   M   L    �   J   L   K    �   I   K   J    �   H   J   I    �   G   I   H    �   F   H   G    �   E   G   F    �   D   F   E    �   C   E   D    �   B   D   C    �   A   C   B    �   @   B   A    �   ?   A   @    �   >   @   ?    �   =   ?   >    �   <   >   =    �   ;   =   <    �   :   <   ;    �   9   ;   :    �   8   :   9    �   7   9   8    �   6   8   7    �   5   7   6    �   4   6   5    �   3   5   4    �   2   4   3    �   1   3   2    �   0   2   1    �   /   1   0    �   .   0   /    �   -   /   .    �   ,   .   -    �   +   -   ,    �   *   ,   +    �   )   +   *    �   (   *   )    �   '   )   (    �   &   (   '    �   %   '   &    �   $   &   %    �   #   %   $    �   "   $   #    �   !   #   "    �       "   !    �      !        �              �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �   
          �   	      
    �      
   	    �      	       �             �             �             �             �             �             �              �              p   import React from 'react';       0import {  Checkbox, Text, Tooltip } from 'dank';   :import { EventPayload } from 'dank/lib/Checkbox/Checkbox';   !import getColor from 'happytree';       %import { noop } from 'Src/constants';       import Cell from '../Cell';       type Props = {     children: string;   =  handleSelection: (id: string, isSelected: boolean) => void;     hasOuterBorderLeft: boolean;     hasOuterBorderTop: boolean;     hasBorderTop: boolean;     id: string;     isDisabled: boolean;     isFocused: boolean;     isSelected: boolean;   *  checkboxTooltipContent: React.ReactNode;     checkboxAriaLabel?: string;   };       const defaultProps: Props = {     children: '',     handleSelection: noop,     hasOuterBorderLeft: false,     hasOuterBorderTop: false,     hasBorderTop: false,   	  id: '',     isDisabled: false,     isFocused: false,     isSelected: false,     checkboxTooltipContent: '',   };       8export default function RowSelectionCell(props: Props) {   
  return (   	    <Cell   '      hasBorderTop={props.hasBorderTop}   3      hasOuterBorderLeft={props.hasOuterBorderLeft}   1      hasOuterBorderTop={props.hasOuterBorderTop}   #      isDisabled={props.isDisabled}   !      isFocused={props.isFocused}   #      isSelected={props.isSelected}   '      onClick={handleCellChange(props)}   &      onKeyDown={handleKeyDown(props)}       >         <Flex width="100%">           <Box width={1 / 3}>   (          <Flex justifyContent="center">   L            <Tooltip placement="right" title={props.checkboxTooltipContent}>   4              <Box css="height: 16px;" width="16px">                   <Checkbox   6                  aria-label={props.checkboxAriaLabel}   ,                  checked={props.isSelected}   -                  disabled={props.isDisabled}   4                  onChange={handleCellChange(props)}                   />                 </Box>               </Tooltip>             </Flex>           </Box>           <Box width={2 / 3}>   (          <Flex justifyContent="center">               <Text.Body                 color={   O                props.isFocused ? getColor('primary') : getColor('neutral', -4)                 }                 fontWeight={700}               >                 {props.children}               </Text.Body>             </Flex>           </Box>         </Flex>       </Cell>     );   }   -RowSelectionCell.defaultProps = defaultProps;       &function handleKeyDown(props: Props) {   9  return function onKeyDown(event: React.KeyboardEvent) {   ,    const { isFocused, isDisabled } = props;       if (isDisabled) return;           const enterKeyCode = 13;   /    const submitKeys = new Set([enterKeyCode]);       5    if (submitKeys.has(event.keyCode) && isFocused) {         event.preventDefault();   %      handleCellChange(props)(event);       }     };   }       )function handleCellChange(props: Props) {     return function onCellChange(   A    event: React.MouseEvent | React.KeyboardEvent | EventPayload,     ) {   B    const { id, isDisabled, isSelected, handleSelection } = props;       if (isDisabled) return;       F    // prevent it from firing two events when clicking on the checkbox   $    if ('preventDefault' in event) {         event.preventDefault();       }       $    handleSelection(id, isSelected);     };   }�         p      0import {  Checkbox, Text, Tooltip } from 'dank';5�_�                    3   	    ����                                                                                                                                                                                                                                                                                                                            q   	       q   	       v   	    _h��     �   2   4   p              <Box width={1 / 3}>5�_�                    3   	    ����                                                                                                                                                                                                                                                                                                                            q   	       q   	       v   	    _h��     �   2   4   p              < width={1 / 3}>5�_�                    3       ����                                                                                                                                                                                                                                                                                                                            q   	       q   	       v   	    _h��     �   	      p    5�_�                    5       ����                                                                                                                                                                                                                                                                                                                            r   	       r   	       v   	    _h��     �   4   6   q      (          <Flex justifyContent="center">5�_�                    5       ����                                                                                                                                                                                                                                                                                                                            r   	       r   	       v   	    _h��     �   4   6   q      $          < justifyContent="center">5�_�                    5       ����                                                                                                                                                                                                                                                                                                                            r   	       r   	       v   	    _h��     �   4   6   q      (          <Flex justifyContent="center">5�_�                    5       ����                                                                                                                                                                                                                                                                                                                            r   	       r   	       v   	    _h��     �   4   6   q      $          < justifyContent="center">5�_�                    5       ����                                                                                                                                                                                                                                                                                                                            r   	       r   	       v   	    _h��     �   	      q      !import {Box} from '@rebass/grid';5�_�                    5       ����                                                                                                                                                                                                                                                                                                                            r   	       r   	       v   	    _h��     �   q   r           �   p   r   q    �   o   q   p    �   n   p   o    �   m   o   n    �   l   n   m    �   k   m   l    �   j   l   k    �   i   k   j    �   h   j   i    �   g   i   h    �   f   h   g    �   e   g   f    �   d   f   e    �   c   e   d    �   b   d   c    �   a   c   b    �   `   b   a    �   _   a   `    �   ^   `   _    �   ]   _   ^    �   \   ^   ]    �   [   ]   \    �   Z   \   [    �   Y   [   Z    �   X   Z   Y    �   W   Y   X    �   V   X   W    �   U   W   V    �   T   V   U    �   S   U   T    �   R   T   S    �   Q   S   R    �   P   R   Q    �   O   Q   P    �   N   P   O    �   M   O   N    �   L   N   M    �   K   M   L    �   J   L   K    �   I   K   J    �   H   J   I    �   G   I   H    �   F   H   G    �   E   G   F    �   D   F   E    �   C   E   D    �   B   D   C    �   A   C   B    �   @   B   A    �   ?   A   @    �   >   @   ?    �   =   ?   >    �   <   >   =    �   ;   =   <    �   :   <   ;    �   9   ;   :    �   8   :   9    �   7   9   8    �   6   8   7    �   5   7   6    �   4   6   5    �   3   5   4    �   2   4   3    �   1   3   2    �   0   2   1    �   /   1   0    �   .   0   /    �   -   /   .    �   ,   .   -    �   +   -   ,    �   *   ,   +    �   )   +   *    �   (   *   )    �   '   )   (    �   &   (   '    �   %   '   &    �   $   &   %    �   #   %   $    �   "   $   #    �   !   #   "    �       "   !    �      !        �              �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �   
          �   	      
    �      
   	    �      	       �             �             �             �             �             �             �              �              q   import React from 'react';       /import { Checkbox, Text, Tooltip } from 'dank';   :import { EventPayload } from 'dank/lib/Checkbox/Checkbox';   !import getColor from 'happytree';       %import { noop } from 'Src/constants';       import Cell from '../Cell';   'import {Box, Flex} from '@rebass/grid';       type Props = {     children: string;   =  handleSelection: (id: string, isSelected: boolean) => void;     hasOuterBorderLeft: boolean;     hasOuterBorderTop: boolean;     hasBorderTop: boolean;     id: string;     isDisabled: boolean;     isFocused: boolean;     isSelected: boolean;   *  checkboxTooltipContent: React.ReactNode;     checkboxAriaLabel?: string;   };       const defaultProps: Props = {     children: '',     handleSelection: noop,     hasOuterBorderLeft: false,     hasOuterBorderTop: false,     hasBorderTop: false,   	  id: '',     isDisabled: false,     isFocused: false,     isSelected: false,     checkboxTooltipContent: '',   };       8export default function RowSelectionCell(props: Props) {   
  return (   	    <Cell   '      hasBorderTop={props.hasBorderTop}   3      hasOuterBorderLeft={props.hasOuterBorderLeft}   1      hasOuterBorderTop={props.hasOuterBorderTop}   #      isDisabled={props.isDisabled}   !      isFocused={props.isFocused}   #      isSelected={props.isSelected}   '      onClick={handleCellChange(props)}   &      onKeyDown={handleKeyDown(props)}       >         <Flex width="100%">           <Box width={1 / 3}>   (          <Flex justifyContent="center">   L            <Tooltip placement="right" title={props.checkboxTooltipContent}>   4              <Box css="height: 16px;" width="16px">                   <Checkbox   6                  aria-label={props.checkboxAriaLabel}   ,                  checked={props.isSelected}   -                  disabled={props.isDisabled}   4                  onChange={handleCellChange(props)}                   />                 </Box>               </Tooltip>             </Flex>           </Box>           <Box width={2 / 3}>   (          <Flex justifyContent="center">               <Text.Body                 color={   O                props.isFocused ? getColor('primary') : getColor('neutral', -4)                 }                 fontWeight={700}               >                 {props.children}               </Text.Body>             </Flex>           </Box>         </Flex>       </Cell>     );   }   -RowSelectionCell.defaultProps = defaultProps;       &function handleKeyDown(props: Props) {   9  return function onKeyDown(event: React.KeyboardEvent) {   ,    const { isFocused, isDisabled } = props;       if (isDisabled) return;           const enterKeyCode = 13;   /    const submitKeys = new Set([enterKeyCode]);       5    if (submitKeys.has(event.keyCode) && isFocused) {         event.preventDefault();   %      handleCellChange(props)(event);       }     };   }       )function handleCellChange(props: Props) {     return function onCellChange(   A    event: React.MouseEvent | React.KeyboardEvent | EventPayload,     ) {   B    const { id, isDisabled, isSelected, handleSelection } = props;       if (isDisabled) return;       F    // prevent it from firing two events when clicking on the checkbox   $    if ('preventDefault' in event) {         event.preventDefault();       }       $    handleSelection(id, isSelected);     };   }�   4   6   q      (          <Flex justifyContent="center">5�_�                    5       ����                                                                                                                                                                                                                                                                                                                            r   	       r   	       v   	    _h��    �          q   
   import React from 'react';       /import { Checkbox, Text, Tooltip } from 'dank';   :import { EventPayload } from 'dank/lib/Checkbox/Checkbox';   !import getColor from 'happytree';       %import { noop } from 'Src/constants';       import Cell from '../Cell';   )import { Box, Flex } from '@rebass/grid';5�_�                             ����                                                                                                                                                                                                                                                                                                                            r   	       r   	       v   	    _h��     �               q   )import { Box, Flex } from '@rebass/grid';   import React from 'react';       /import { Checkbox, Text, Tooltip } from 'dank';   :import { EventPayload } from 'dank/lib/Checkbox/Checkbox';   !import getColor from 'happytree';       %import { noop } from 'Src/constants';       import Cell from '../Cell';       type Props = {     children: string;   =  handleSelection: (id: string, isSelected: boolean) => void;     hasOuterBorderLeft: boolean;     hasOuterBorderTop: boolean;     hasBorderTop: boolean;     id: string;     isDisabled: boolean;     isFocused: boolean;     isSelected: boolean;   *  checkboxTooltipContent: React.ReactNode;     checkboxAriaLabel?: string;   };       const defaultProps: Props = {     children: '',     handleSelection: noop,     hasOuterBorderLeft: false,     hasOuterBorderTop: false,     hasBorderTop: false,   	  id: '',     isDisabled: false,     isFocused: false,     isSelected: false,     checkboxTooltipContent: '',   };       8export default function RowSelectionCell(props: Props) {   
  return (   	    <Cell   '      hasBorderTop={props.hasBorderTop}   3      hasOuterBorderLeft={props.hasOuterBorderLeft}   1      hasOuterBorderTop={props.hasOuterBorderTop}   #      isDisabled={props.isDisabled}   !      isFocused={props.isFocused}   #      isSelected={props.isSelected}   '      onClick={handleCellChange(props)}   &      onKeyDown={handleKeyDown(props)}       >         <Flex width="100%">           <Box width={1 / 3}>   (          <Flex justifyContent="center">   L            <Tooltip placement="right" title={props.checkboxTooltipContent}>   4              <Box css="height: 16px;" width="16px">                   <Checkbox   6                  aria-label={props.checkboxAriaLabel}   ,                  checked={props.isSelected}   -                  disabled={props.isDisabled}   4                  onChange={handleCellChange(props)}                   />                 </Box>               </Tooltip>             </Flex>           </Box>           <Box width={2 / 3}>   (          <Flex justifyContent="center">               <Text.Body                 color={   O                props.isFocused ? getColor('primary') : getColor('neutral', -4)                 }                 fontWeight={700}               >                 {props.children}               </Text.Body>             </Flex>           </Box>         </Flex>       </Cell>     );   }   -RowSelectionCell.defaultProps = defaultProps;       &function handleKeyDown(props: Props) {   9  return function onKeyDown(event: React.KeyboardEvent) {   ,    const { isFocused, isDisabled } = props;       if (isDisabled) return;           const enterKeyCode = 13;   /    const submitKeys = new Set([enterKeyCode]);       5    if (submitKeys.has(event.keyCode) && isFocused) {         event.preventDefault();   %      handleCellChange(props)(event);       }     };   }       )function handleCellChange(props: Props) {     return function onCellChange(   A    event: React.MouseEvent | React.KeyboardEvent | EventPayload,     ) {   B    const { id, isDisabled, isSelected, handleSelection } = props;       if (isDisabled) return;       F    // prevent it from firing two events when clicking on the checkbox   $    if ('preventDefault' in event) {         event.preventDefault();       }       $    handleSelection(id, isSelected);     };   }5�_�                    7       ����                                                                                                                                                                                                                                                                                                                            7   #       7   (       v   #    _h��     �   6   8   o                      aria-label={}5��