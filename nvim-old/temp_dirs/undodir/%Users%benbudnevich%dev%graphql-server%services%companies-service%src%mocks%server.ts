Vim�UnDo� ���΁ �*)��fy�e�"82�u>�[ �      Lexport const { query } = mock({ dataSources, schema, serviceName: 'user' });      C                       `Yg(    _�                            ����                                                                                                                                                                                                                                                                                                                                                             `O�     �         3          name: 'company-service',5��                         B                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `O�     �         3          name: '-service',5��                         B                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `O�     �         3          name: 'user-service',5��                         F                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `O�!     �         3      !    url: 'http://company-service'5��                         c                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `O�!    �         3          url: 'http://-service'5��                         c                     �                        c                    5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        `O��    �                 // @ts-ignore   const rootTypes = gql`     type Query     # type Mutation   `;    5��                          +      I               5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `YW    �          -      :import { ApolloServer, gql } from 'apollo-server-express';5��                                                5�_�      	                      ����                                                                                                                                                                                                                                                                                                                                                             `Yf�     �               -   5import { ApolloServer } from 'apollo-server-express';   /import { dataSources, schema } from '../index';   9import { createTestClient } from 'apollo-server-testing';   Himport { ApolloGateway, LocalGraphQLDataSource } from '@apollo/gateway';       :import { buildFederatedSchema } from '@apollo/federation';       0export const buildService = ({ name }: any) => {   $  return new LocalGraphQLDataSource(       buildFederatedSchema(         schema       ),     );   };       #const gateway = new ApolloGateway({     serviceList: [{       name: 'users-service',       url: 'http://users-service'     }],     buildService,   K  // Experimental: Enabling this enables the query plan view in Playground.   });       !const server = new ApolloServer({   
  gateway,     dataSources: () => ({       ...dataSources,     }),     subscriptions: false,     cacheControl: true,     context: () => {       return {        token: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3FhLWFwaS5pbnR1cm4uaW86NTY4NS9hdXRoL2FjY2Vzc190b2tlbiIsImlhdCI6MTYxNDExNjAzNSwiZXhwIjoxNjE0MjAyNDM1LCJuYmYiOjE2MTQxMTYwMzUsImp0aSI6Im1Vc2YwVTFWaUtzWkhYRUEiLCJzdWIiOjU0ODYsInVpZCI6NTQzOSwidWlkX3V1aWQiOiI4MDgwNGU1MC01OWIxLTQ1ZTAtYjRmYy1hYTkyMDkyYmRkODMiLCJjb21wYW55X2lkIjozNTA3LCJjb21wYW55X3V1aWQiOiJlNTc5NWM2Ni03YTU2LTQ5NjktYTM2Ny1kYjViMTgyZGEwOGIiLCJjb21wYW55X3JvbGUiOiJTRUxMRVIiLCJ1c2VyX3JvbGUiOiJBRE1JTiJ9.c6ZtXNnCubbQX58K_aGWx9Pw79z_7y-xyyveXpjV3Js',         user: {           userRole: 'ADMIN',            uuid: '123-123-123-123',         },       };     },     tracing: true,   });       // @ts-ignore   2export const { query } = createTestClient(server);5�5�_�      
           	           ����                                                                                                                                                                                                                                                                                                                                       -           V        `Yf�    �                   �               �              -   5import { ApolloServer } from 'apollo-server-express';   /import { dataSources, schema } from '../index';   9import { createTestClient } from 'apollo-server-testing';   Himport { ApolloGateway, LocalGraphQLDataSource } from '@apollo/gateway';       :import { buildFederatedSchema } from '@apollo/federation';       0export const buildService = ({ name }: any) => {   $  return new LocalGraphQLDataSource(       buildFederatedSchema(         schema       ),     );   };       #const gateway = new ApolloGateway({     serviceList: [{       name: 'users-service',       url: 'http://users-service'     }],     buildService,   K  // Experimental: Enabling this enables the query plan view in Playground.   });       !const server = new ApolloServer({   
  gateway,     dataSources: () => ({       ...dataSources,     }),     subscriptions: false,     cacheControl: true,     context: () => {       return {        token: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3FhLWFwaS5pbnR1cm4uaW86NTY4NS9hdXRoL2FjY2Vzc190b2tlbiIsImlhdCI6MTYxNDExNjAzNSwiZXhwIjoxNjE0MjAyNDM1LCJuYmYiOjE2MTQxMTYwMzUsImp0aSI6Im1Vc2YwVTFWaUtzWkhYRUEiLCJzdWIiOjU0ODYsInVpZCI6NTQzOSwidWlkX3V1aWQiOiI4MDgwNGU1MC01OWIxLTQ1ZTAtYjRmYy1hYTkyMDkyYmRkODMiLCJjb21wYW55X2lkIjozNTA3LCJjb21wYW55X3V1aWQiOiJlNTc5NWM2Ni03YTU2LTQ5NjktYTM2Ny1kYjViMTgyZGEwOGIiLCJjb21wYW55X3JvbGUiOiJTRUxMRVIiLCJ1c2VyX3JvbGUiOiJBRE1JTiJ9.c6ZtXNnCubbQX58K_aGWx9Pw79z_7y-xyyveXpjV3Js',         user: {           userRole: 'ADMIN',            uuid: '123-123-123-123',         },       };     },     tracing: true,   });       // @ts-ignore   2export const { query } = createTestClient(server);5��            -                                     �                                           �       5�_�   	              
      C    ����                                                                                                                                                                                                                                                                                                                                          K       V        `Yf�     �                 Lexport const { query } = mock({ dataSources, schema, serviceName: 'user' });5��       C                  �                      5�_�   
                    C    ����                                                                                                                                                                                                                                                                                                                                          K       V        `Yf�     �                 Iexport const { query } = mock({ dataSources, schema, serviceName: 'r' });5��       C                 �                     5�_�                       3    ����                                                                                                                                                                                                                                                                                                                                          K       V        `Yg    �                 Oexport const { query } = mock({ dataSources, schema, serviceName: 'company' });5��       3                  �                      5�_�                        3    ����                                                                                                                                                                                                                                                                                                                                          K       V        `Yg'    �                 6export const { query } = mock({ dataSources, schema});5��                         c       7       8       5��