Vim�UnDo� �cؖ��~y4|����e/Mt3*���*          exclude: ["mapbox-gl"],                             `�`j    _�                             ����                                                                                                                                                                                                                                                                                                                                                             `�_�     �             5��                          �                      �                          �                      5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `�_�     �                �             5��                          �                      5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `�_�     �                optimizeDeps.exclude5��                          �                      5�_�                          ����                                                                                                                                                                                                                                                                                                                                                             `�_�     �                 optimizeDeps.exclude5��                        �                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `�_�     �      	           optimizeDeps: {exclude5��                        �                      �                         �                     5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                             `�_�     �      
   
          �      
   	    5��                          �                      �                         �                      �                         �                     5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                             `�_�     �      	   
          exclude5��                         �                      5�_�   	              
          ����                                                                                                                                                                                                                                                                                                                                                             `�_�     �      	   
          exclude: []5��                         �                      5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                                             `�_�    �      	   
          exclude: ['']5��                         �                      �                        �                     �                        �                     �                        �                     �                        �                     �                     	   �              	       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `�_�     �         
        plugins: [reactRefresh()]5��                         �                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `�_�    �               
   #import { defineConfig } from 'vite'   7import reactRefresh from '@vitejs/plugin-react-refresh'       // https://vitejs.dev/config/   export default defineConfig({     plugins: [reactRefresh()],     optimizeDeps: {       exclude: ['mapbox-gl']     }   })5��            
       
               �       �       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       `�`f     �         
          exclude: ["mapbox-gl"],�      	   
    5��                         �                      �                        �               N       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                 v       `�`i    �                   exclude: [{   	find: /(.+)utils\/mapboxgl/,   ,	replacement: '$1utils/mapboxgl.browser.js',   }],5��                         �       _       �       5�_�                          ����                                                                                                                                                                                                                                                                                                                                                             `�_�     �                 optimizeDep.exclude5��                         �                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `�_�     �               
  .exclude5��                         �                      5��