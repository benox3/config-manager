Vim�UnDo� �j��WY��G�3���g�2��􍮓�������   J              %   %       %   %   %    _��:    _�           $       %           ����                                                                                                                                                                                                                                                                                                                                                  V        _��9     �               J   import 'firebase/auth';   import 'firebase/database';   import 'firebase/firestore';       $import firebase from 'firebase/app';   3import React, { useEffect, useState } from 'react';       4export const FirebaseContext = React.createContext({     firebase: {},   } as {     firebase: typeof firebase;   });       .type ConfigVariableValue = string | undefined;       !interface FirebaseProviderProps {     config: {        apiKey: ConfigVariableValue;   $    authDomain: ConfigVariableValue;   %    databaseURL: ConfigVariableValue;   #    projectId: ConfigVariableValue;   '    storageBucket: ConfigVariableValue;   +    messagingSenderId: ConfigVariableValue;       appId: ConfigVariableValue;   '    measurementId: ConfigVariableValue;     };     loaderNode?: React.ReactNode;     children: React.ReactNode;   }       @export function FirebaseProvider(props: FirebaseProviderProps) {   <  const [isInitialized, setIsInitialized] = useState(false);   6  const [isLoggedIn, setIsLoggedIn] = useState(false);     useEffect(() => {       // Initialize Firebase   )    firebase.initializeApp(props.config);           // Authenticate       firebase         .auth()         .signInAnonymously()         .catch(error => {   (        // TODO: handle auth error here.   	      });           // Update logged in state   D    const unsubscribe = firebase.auth().onAuthStateChanged(user => {         if (user) {           // User is signed in.           setIsLoggedIn(true);         } else {           // User is signed out.           setIsLoggedIn(false);         }       });           setIsInitialized(true);           // Clean up       return () => {         unsubscribe();       };     }, [props.config]);       &  if (!isInitialized || !isLoggedIn) {   =    return <>{props.loaderNode ? props.loaderNode : null}</>;     }       
  return (   3    <FirebaseContext.Provider value={{ firebase }}>         {props.children}       </FirebaseContext.Provider>     );   }5�_�              %   $           ����                                                                                                                                                                                                                                                                                                                                                  V        _럠     �       K       F   $import firebase from 'firebase/app';   3import React, { useEffect, useState } from 'react';       4export const FirebaseContext = React.createContext({     firebase: {},   } as {     firebase: typeof firebase;   });       .type ConfigVariableValue = string | undefined;       !interface FirebaseProviderProps {     config: {        apiKey: ConfigVariableValue;   $    authDomain: ConfigVariableValue;   %    databaseURL: ConfigVariableValue;   #    projectId: ConfigVariableValue;   '    storageBucket: ConfigVariableValue;   +    messagingSenderId: ConfigVariableValue;       appId: ConfigVariableValue;   '    measurementId: ConfigVariableValue;     };     loaderNode?: React.ReactNode;     children: React.ReactNode;   }       @export function FirebaseProvider(props: FirebaseProviderProps) {   <  const [isInitialized, setIsInitialized] = useState(false);   6  const [isLoggedIn, setIsLoggedIn] = useState(false);     useEffect(() => {       // Initialize Firebase   )    firebase.initializeApp(props.config);           // Authenticate       firebase         .auth()         .signInAnonymously()         .catch(error => {   (        // TODO: handle auth error here.   	      });           // Update logged in state   D    const unsubscribe = firebase.auth().onAuthStateChanged(user => {         if (user) {           // User is signed in.           setIsLoggedIn(true);         } else {           // User is signed out.           setIsLoggedIn(false);         }       });           setIsInitialized(true);           // Clean up       return () => {         unsubscribe();       };     }, [props.config]);       &  if (!isInitialized || !isLoggedIn) {   =    return <>{props.loaderNode ? props.loaderNode : null}</>;     }       
  return (   3    <FirebaseContext.Provider value={{ firebase }}>         {props.children}       </FirebaseContext.Provider>     );   }5�_�              $      %        ����                                                                                                                                                                                                                                                                                                                                                             _�H     �   %   &   J          �   %   '   K          console.log(5�_�                    &       ����                                                                                                                                                                                                                                                                                                                                                             _�H     �   %   '   K          console.log(firebase);5�_�                    &       ����                                                                                                                                                                                                                                                                                                                                                             _�H     �   &   '   K          �   &   (   L          console.log(5�_�                    '       ����                                                                                                                                                                                                                                                                                                                                                             _�H     �   &   (   L          console.log(firebase.auth()5�_�                    '       ����                                                                                                                                                                                                                                                                                                                                                             _�H     �   &   (   L      !    console.log(firebase.auth());5�_�                    '       ����                                                                                                                                                                                                                                                                                                                                                             _�I�    �   &   (        5�_�                    &       ����                                                                                                                                                                                                                                                                                                                                                             _�I�    �   &   '   K       5�_�      	              &       ����                                                                                                                                                                                                                                                                                                                                                             _�J     �   &   '   L    �   &   '   L          console.log(firebase);5�_�      
           	   '       ����                                                                                                                                                                                                                                                                                                                                                             _�J    �   &   (   M          console.log(firebase.auth);5�_�   	              
   '       ����                                                                                                                                                                                                                                                                                                                                                             _�Jz    �   &   (   M      !    console.log(firebase.auth());5�_�   
                 '       ����                                                                                                                                                                                                                                                                                                                                                             _�M4     �   &   (   M          console.log(firebase());5�_�                    '       ����                                                                                                                                                                                                                                                                                                                                                             _�M5     �   &   (   M          console.log(firebase));5�_�                    '       ����                                                                                                                                                                                                                                                                                                                                                             _�M7    �   &   (   M          console.log(firebase);5�_�                    &       ����                                                                                                                                                                                                                                                                                                                                                             _�MN     �   %   '        5�_�                    &       ����                                                                                                                                                                                                                                                                                                                                                             _�MP   	 �   %   '   L          console.log(firebase.auth);5�_�                   &       ����                                                                                                                                                                                                                                                                                                                                                             _�N�   
 �   %   '   L      !    console.log(firebase.auth());5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�N�    �               5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 V       _�N�    �               5�_�                    "       ����                                                                                                                                                                                                                                                                                                                                                 V       _�O~     �   !   #   H           console.log(firebase.auth));5�_�                    "       ����                                                                                                                                                                                                                                                                                                                                                 V       _�O~    �   !   #   H          console.log(firebase.auth);5�_�                    "       ����                                                                                                                                                                                                                                                                                                                                                 V       _�O�    �   !   #   H      !    console.log(firebase.auth());5�_�                    "       ����                                                                                                                                                                                                                                                                                                                                                 V       _�P     �   !   #   H           console.log(firebase.auth));5�_�                    "       ����                                                                                                                                                                                                                                                                                                                                                 V       _�P    �   !   #   H          console.log(firebase.auth);5�_�                   "       ����                                                                                                                                                                                                                                                                                                                                                 V       _�P(    �   !   #   H      /    console.log(firebase.auth.mockReturnValue);5�_�                    "   -    ����                                                                                                                                                                                                                                                                                                                                                 V       _�P2    �   !   #   H      1    console.log(firebase.auth.mockReturnValue());5�_�                    "       ����                                                                                                                                                                                                                                                                                                                                                 V       _�Qr     �   !   #   H      !    console.log(firebase.auth());5�_�                    "       ����                                                                                                                                                                                                                                                                                                                                                 V       _�Qr     �   !   #   H          console.log(firebase.auth5�_�                    "       ����                                                                                                                                                                                                                                                                                                                                                 V       _�Qs    �   !   #   H      !    console.log(firebase.auth());5�_�                     "       ����                                                                                                                                                                                                                                                                                                                                                 V       _�V�     �   !   #        5�_�      !               "        ����                                                                                                                                                                                                                                                                                                                                                 V       _�V�    �   !   #        5�_�       "           !   (       ����                                                                                                                                                                                                                                                                                                                                                             _�\�     �       G       F   $import firebase from 'firebase/app';   3import React, { useEffect, useState } from 'react';       4export const FirebaseContext = React.createContext({     firebase: {},   } as {     firebase: typeof firebase;   });       .type ConfigVariableValue = string | undefined;       !interface FirebaseProviderProps {     config: {        apiKey: ConfigVariableValue;   $    authDomain: ConfigVariableValue;   %    databaseURL: ConfigVariableValue;   #    projectId: ConfigVariableValue;   '    storageBucket: ConfigVariableValue;   +    messagingSenderId: ConfigVariableValue;       appId: ConfigVariableValue;   '    measurementId: ConfigVariableValue;     };     loaderNode?: React.ReactNode;     children: React.ReactNode;   }       @export function FirebaseProvider(props: FirebaseProviderProps) {   <  const [isInitialized, setIsInitialized] = useState(false);   6  const [isLoggedIn, setIsLoggedIn] = useState(false);     useEffect(() => {       // Initialize Firebase   )    firebase.initializeApp(props.config);           // Authenticate       firebase         .auth()         .signInAnonymously()         .catch(error => {   (        // TODO: handle auth error here.   	      });           // Update logged in state   D    const unsubscribe = firebase.auth().onAuthStateChanged(user => {         if (user) {           // User is signed in.           setIsLoggedIn(true);         } else {           // User is signed out.           setIsLoggedIn(false);         }       });           setIsInitialized(true);           // Clean up       return () => {         unsubscribe();       };     }, [props.config]);       &  if (!isInitialized || !isLoggedIn) {   =    return <>{props.loaderNode ? props.loaderNode : null}</>;     }       
  return (   3    <FirebaseContext.Provider value={{ firebase }}>         {props.children}       </FirebaseContext.Provider>     );   }5�_�   !   #           "           ����                                                                                                                                                                                                                                                                                                                                                 V       _�m     �         F    �          F      import 'firebase/auth';   import 'firebase/database';   import 'firebase/firestore';5�_�   "               #           ����                                                                                                                                                                                                                                                                                                                                                 V       _�n    �         I       5�_�                    "       ����                                                                                                                                                                                                                                                                                                                                                 V       _�P    �   !   #   H      1    console.log(firebase.auth.mockReturnValue());5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _�M�    �               5��