Vim�UnDo� +����a��TNV:��p�	˪oL����9�Ͱ   %                                  _���    _�                            ����                                                                                                                                                                                                                                                                                                                                                             _���     �          %      2const { ApolloServer } = require("apollo-server");5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             _���    �         %      5const { ApolloGateway } = require("@apollo/gateway");5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             _���    �   %   &           �   $   &   %    �   #   %   $    �   "   $   #    �   !   #   "    �       "   !    �      !        �              �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �             �   
          �   	      
    �      
   	    �      	       �             �             �             �             �             �             �              �              %   +import {ApolloServer} from "apollo-server";   .import {ApolloGateway} from "@apollo/gateway";       #const gateway = new ApolloGateway({   M  // This entire `serviceList` is optional when running in managed federation   M  // mode, using Apollo Graph Manager as the source of truth.  In production,   J  // using a single source of truth to compose a schema is recommended and   K  // prevents composition failures at runtime using schema validation using     // real usage-based metrics.     serviceList: [   ?    { name: "accounts", url: "http://localhost:4001/graphql" },   >    { name: "reviews", url: "http://localhost:4002/graphql" },   ?    { name: "products", url: "http://localhost:4003/graphql" },   ?    { name: "inventory", url: "http://localhost:4004/graphql" }     ],       K  // Experimental: Enabling this enables the query plan view in Playground.   '  __exposeQueryPlanExperimental: false,   });       (async () => {   #  const server = new ApolloServer({       gateway,       ?    // Apollo Graph Manager (previously known as Apollo Engine)   F    // When enabled and an `ENGINE_API_KEY` is set in the environment,   ?    // provides metrics, schema management and trace reporting.       engine: false,       N    // Subscriptions are unsupported but planned for a future Gateway version.       subscriptions: false,     });       %  server.listen().then(({ url }) => {   /    console.log(`🚀 Server ready at ${url}`);     });   })();�         %      .import {ApolloGateway} from "@apollo/gateway";5��