Vim�UnDo� �iGS�2p,�n:t�h�I�+�����
���(��P   p   8      peer.on('signal', (data: Record<string, any>) => {   H         	       	   	   	    _�w�    _�                     H       ����                                                                                                                                                                                                                                                                                                                                                             _�w~     �   G   I   p      (      peer.on('signal', (data: any) => {5�_�                    H       ����                                                                                                                                                                                                                                                                                                                                                             _�w~     �   G   I   p      %      peer.on('signal', (data: ) => {5�_�                    H   &    ����                                                                                                                                                                                                                                                                                                                                                             _�w�     �   G   I   p      ,      peer.on('signal', (data: Record<) => {5�_�                    H   /    ����                                                                                                                                                                                                                                                                                                                                                             _�w�     �   G   I   p      5      peer.on('signal', (data: Record<string, a) => {5�_�                    H   1    ����                                                                                                                                                                                                                                                                                                                                                             _�w�     �   p   q           �   o   q   p    �   n   p   o    �   m   o   n    �   l   n   m    �   k   m   l    �   j   l   k    �   i   k   j    �   h   j   i    �   g   i   h    �   f   h   g    �   e   g   f    �   d   f   e    �   c   e   d    �   b   d   c    �   a   c   b    �   `   b   a    �   _   a   `    �   ^   `   _    �   ]   _   ^    �   \   ^   ]    �   [   ]   \    �   Z   \   [    �   Y   [   Z    �   X   Z   Y    �   W   Y   X    �   V   X   W    �   U   W   V    �   T   V   U    �   S   U   T    �   R   T   S    �   Q   S   R    �   P   R   Q    �   O   Q   P    �   N   P   O    �   M   O   N    �   L   N   M    �   K   M   L    �   J   L   K    �   I   K   J    �   H   J   I    �   G   I   H    �   F   H   G    �   E   G   F    �   D   F   E    �   C   E   D    �   B   D   C    �   A   C   B    �   @   B   A    �   ?   A   @    �   >   @   ?    �   =   ?   >    �   <   >   =    �   ;   =   <    �   :   <   ;    �   9   ;   :    �   8   :   9    �   7   9   8    �   6   8   7    �   5   7   6    �   4   6   5    �   3   5   4    �   2   4   3    �   1   3   2    �   0   2   1    �   /   1   0    �   .   0   /    �   -   /   .    �   ,   .   -    �   +   -   ,    �   *   ,   +    �   )   +   *    �   (   *   )    �   '   )   (    �   &   (   '    �   %   '   &    �   $   &   %    �   #   %   $    �   "   $   #    �   !   #   "    �       "   !    �      !        �              �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �   
          �   	      
    �      
   	    �      	       �             �             �             �             �             �             �              �              p   "import { useEffect } from 'react';   import Peer from 'simple-peer';       )import { Options, User } from '../types';       4export default function useScreenShareSocketEvents({     connections,   
  groupId,     isScreenSharePeerConnected,     localStream,     myUserData,   	  socket,   }: Options) {     useEffect(() => {   ,    if (!isScreenSharePeerConnected) return;       8    socket.emit('userIsInPreview', { roomId: groupId });       #    socket.emit('userJoinedCall', {         groupId,         userData: {           ...myUserData,           isCameraOff: false,           isMuted: false,   2        name: `${myUserData.name}'s Screen Share`,         },         socketId: socket.id,       });       E    const onGotSignal = (data: { from: string; signal: string }) => {   4      const connection = connections.get(data.from);       +      connection?.peer.signal(data.signal);       };       M    const onAck = (data: { ack: boolean; userData: User; from: string }) => {   2      if (data.ack && localStream !== undefined) {           const peer = new Peer({             initiator: true,   +          stream: localStream || undefined,           });       F        connections.set(data.from, { peer, userData: data.userData });       0        peer.on('signal', function(signalData) {   %          socket.emit('sendSignal', {               to: data.from,               signal: signalData,             });           });         }       };       D    const onUserLeftRoom = ({ socketId }: { socketId: string }) => {   3      const connection = connections.get(socketId);         if (connection?.peer) {   $        connection?.peer?.destroy();       %        connections.delete(socketId);         }       };       J    const onUserJoined = (data: { socketId: string; userData: User }) => {   %      const clientId = data.socketId;       @      if (connections.has(clientId) || clientId === socket.id) {           return;         }       5      const peer = new Peer({ stream: localStream });       8      peer.on('signal', (data: Record<string, any>) => {   #        socket.emit('sendSignal', {             to: clientId,             signal: data,           });   	      });             socket.emit('ack', {           to: clientId,           from: socket.id,           userData: myUserData,   	      });       C      connections.set(clientId, { peer, userData: data.userData });       };           const listeners = {         gotSignal: onGotSignal,         ack: onAck,   #      userLeftRoom: onUserLeftRoom,         userJoined: onUserJoined,       };       >    Object.entries(listeners).forEach(([event, callback]) => {   !      socket.on(event, callback);       });           return function cleanup() {   /      Object.keys(listeners).forEach(event => {   *        socket.removeEventListener(event);   	      });       };     }, [       connections,       groupId,       isScreenSharePeerConnected,       localStream,       myUserData,       socket,     ]);   }�   G   I   p      8      peer.on('signal', (data: Record<string, any>) => {5�_�                    H   1    ����                                                                                                                                                                                                                                                                                                                                                             _�w�    �   c   e   p      1      Object.keys(listeners).forEach((event) => {5�_�      	             H   .    ����                                                                                                                                                                                                                                                                                                                                                             _�w�     �   G   I   p      8      peer.on('signal', (data: Record<string, any>) => {5�_�                  	   H   .    ����                                                                                                                                                                                                                                                                                                                                                             _�w�    �   G   I   p      5      peer.on('signal', (data: Record<string, >) => {5�_�                    H       ����                                                                                                                                                                                                                                                                                                                                                             _�w�     �   G   I   p      #      peer.on('signal', (data) => {5��