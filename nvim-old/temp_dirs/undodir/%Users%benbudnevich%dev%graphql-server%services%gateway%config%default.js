Vim�UnDo� �L ������i�:Z����JE�@�h��:H                                      a`��    _�                             ����                                                                                                                                                                                                                                                                                                                                                             a`�8    �                 �             5��                          5                     �                         7                     �                        7                    5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             a`��     �                  Lconst proxyDomain = process.env.PROXY_DOMAIN || 'https://dev-api.inturn.io';       module.exports = {     proxyDomain,   +  port: process.env.GRAPHQL_PORT || '4000',   4  hostname: process.env.GRAPHQL_HOST || 'localhost',   +  authServiceDomain: `${proxyDomain}/auth`,   2  coreAPIServiceDomain: `${proxyDomain}/core-api`,   8  productServiceDomain: `${proxyDomain}/productservice`,   8  profileServiceDomain: `${proxyDomain}/profileservice`,   :  documentServiceDomain: `${proxyDomain}/documentservice`,   G  documentServiceImgixHostname: 'inturn-dev-documentservice.imgix.net',   <  documentServiceS3Bucket: `${proxyDomain}/documentservice`,   -  s3Endpoint: 'http://s3.inturn.docker:9093',   6  searchServiceDomain: `${proxyDomain}/searchservice`,   5  activityServiceDomain: `${proxyDomain}/activities`,     logLevel: 'info',     environment: 'local',   *  companyServiceAddress: 'localhost:8081',   +  currencyServiceAddress: 'localhost:8089',   )  groupsServiceAddress: 'localhost:8087',   (  offerServiceAddress: 'localhost:8083',   *  productServiceAddress: 'localhost:8085',   6  workflowUpdateOfferServiceAddress: 'localhost:8091',     haha: 'nooo',   };5�5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             a`��    �                 �             5��                          5                     �                      
   7              
       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             a`�    �                  bla: 'hi',5��                          5                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             a`�o     �                 �             5��                          5                     �                         7                     �                        =                    �                        =                    5�_�                       6    ����                                                                                                                                                                                                                                                                                                                                                             a`�s     �               6  workflowUpdateOfferServiceAddress: 'localhost:8091',5��       6                  4                     �       6                  4                     5�_�                       5    ����                                                                                                                                                                                                                                                                                                                                                             a`�t    �                 bla: 'haha'5��                         5                    5�_�                             ����                                                                                                                                                                                                                                                                                                                                                             a`��     �                  Lconst proxyDomain = process.env.PROXY_DOMAIN || 'https://dev-api.inturn.io';       module.exports = {     proxyDomain,   +  port: process.env.GRAPHQL_PORT || '4000',   4  hostname: process.env.GRAPHQL_HOST || 'localhost',   +  authServiceDomain: `${proxyDomain}/auth`,   2  coreAPIServiceDomain: `${proxyDomain}/core-api`,   8  productServiceDomain: `${proxyDomain}/productservice`,   8  profileServiceDomain: `${proxyDomain}/profileservice`,   :  documentServiceDomain: `${proxyDomain}/documentservice`,   G  documentServiceImgixHostname: 'inturn-dev-documentservice.imgix.net',   <  documentServiceS3Bucket: `${proxyDomain}/documentservice`,   -  s3Endpoint: 'http://s3.inturn.docker:9093',   6  searchServiceDomain: `${proxyDomain}/searchservice`,   5  activityServiceDomain: `${proxyDomain}/activities`,     logLevel: 'info',     environment: 'local',   *  companyServiceAddress: 'localhost:8081',   +  currencyServiceAddress: 'localhost:8089',   )  groupsServiceAddress: 'localhost:8087',   (  offerServiceAddress: 'localhost:8083',   *  productServiceAddress: 'localhost:8085',   6  workflowUpdateOfferServiceAddress: 'localhost:8091',     bla: 'haha',   };5�5��