Vim�UnDo� �j���	݊�!�SE��N���͐$vz�9                                      _��Y    _�                     	       ����                                                                                                                                                                                                                                                                                                                                                             _�f�     �   	              �   	          5�_�                    
       ����                                                                                                                                                                                                                                                                                                                                                             _�g     �   	              injectTraceId:�   
          5�_�                    
       ����                                                                                                                                                                                                                                                                                                                                                             _�g!     �   	            "  injectTraceId:logInjection: true5�_�                    
       ����                                                                                                                                                                                                                                                                                                                                                             _�g!     �   	              :logInjection: true5�_�      	              
       ����                                                                                                                                                                                                                                                                                                                                                             _�g#    �   	              logInjection: true5�_�      
          	           ����                                                                                                                                                                                                                                                                                                                            
          
          V       _�l�     �      	          �             5�_�   	              
           ����                                                                                                                                                                                                                                                                                                                                                  V        _�l�     �                	ssl: true�                Fpath: '/v1/input/<APIKEY>?ddsource=nodejs&service=<APPLICATION_NAME>',�                'host: 'http-intake.logs.datadoghq.com',5�_�   
                         ����                                                                                                                                                                                                                                                                                                                                                  V        _�n!     �      
       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        _�n#     �             5�_�                            ����                                                                                                                                                                                                                                                                                                                                      
           V       _�p�     �                  import tracer from 'dd-trace';   7import { getEnvironment } from './getIsDevEnvironment';   import config from 'config';       const httpTransportOptions = {   )  host: 'http-intake.logs.datadoghq.com',   H  path: '/v1/input/<APIKEY>?ddsource=nodejs&service=<APPLICATION_NAME>',     ssl: true   };       0const hostname: string = config.get('hostname');   %const env = getEnvironment(hostname);       tracer.init({     env,     logInjection: true,   });       export default tracer;5�_�                     
        ����                                                                                                                                                                                                                                                                                                                                      
           V       _��X     �                  import tracer from 'dd-trace';   7import { getEnvironment } from './getIsDevEnvironment';   import config from 'config';       0const hostname: string = config.get('hostname');   %const env = getEnvironment(hostname);       tracer.init({     env,     logInjection: true,   });       export default tracer;5�_�             	      
        ����                                                                                                                                                                                                                                                                                                                            
                     V       _�l     �   	           �   
          �   	   
           logger: {   $    error: err => logger.error(err),   *    warn: message => logger.warn(message),   *    info: message => logger.info(message),   ,    debug: message => logger.trace(message),     },5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 V       _�lY     �                �               import logger from './logger';5�_�                            ����                                                                                                                                                                                                                                                                                                                                                 V       _�lc    �               ,    debug: message => logger.trace(message),�                  �                import tracer from 'dd-trace';�               7import { getEnvironment } from './getIsDevEnvironment';�               import config from 'config';�               import logger from './logger';�                �               0const hostname: string = config.get('hostname');�               %const env = getEnvironment(hostname);�                �      	   	      tracer.init({�   	   
   
        env,�   
              logger: {�               &    error: (err) => logger.error(err),�               ,    warn: (message) => logger.warn(message),�               ,    info: (message) => logger.info(message),�               .    debug: (message) => logger.trace(message),�                 },�               });�                �               export default tracer;�              5��