Vim�UnDo� b~��={�2
>Y>��ݏLըdY'@y��8b�s�                                      `r    _�                           ����                                                                                                                                                                                                                                                                                                                                                             `�     �               7PROTOC_GEN_TS_PATH="../node_modules/.bin/protoc-gen-ts"5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `�    �               IPROTOC_GEN_GRPC_PATH="../node_modules/.bin/grpc_tools_node_protoc_plugin"5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `�C    �                �             5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `�K    �                ls5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `�T    �               ls ../5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                             `�b   	 �               ls ../node_modules5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                             `�   
 �                �             5�_�   	              
          ����                                                                                                                                                                                                                                                                                                                                                             `�6     �               echo 'PATH:'5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                                             `�7    �               echo "PATH:'5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��     �               ls ../node_modules/.bin/5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��     �               ls .:w/node_modules/.bin/5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `��     �               ls .:w   /node_modules/.bin/5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��     �               ls .:w /node_modules/.bin/5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��    �               ls .: /node_modules/.bin/5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��    �               ls . /node_modules/.bin/5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��     �               ls ./node_modules/.bin/5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��    �               ls ./node_modules//5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `��     �               ls ./node_modules/5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             ` T     �                  #!/bin/bash   # Path to this plugin   6PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"       # Path to the grpc_node_plugin   HPROTOC_GEN_GRPC_PATH="./node_modules/.bin/grpc_tools_node_protoc_plugin"       <# Directory to write generated code to (.js and .d.ts files)   OUT_DIR="$PWD/src/generated"   ls $OUT_DIR        ln -sf ../../protorepo protorepo   cd protorepo   echo "PATH:"   ls .//       protoc \   4    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \   6    --plugin=protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH} \   8    --js_out="import_style=commonjs,binary:${OUT_DIR}" \   :    --ts_out="service=grpc-node,mode=grpc-js:${OUT_DIR}" \   %    --grpc_out="grpc_js:${OUT_DIR}" \     ./google/api/http.proto \   "  ./google/api/annotations.proto \   '  ./offerservice/v1beta1/offers.proto \   )  ./offerservice/v1beta1/offers_api.proto5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ` \    �               ls ./node_modules/5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             ` h    �                �             5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             ` �    �                pwd5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       `CZ    �                  ./google/api/http.proto \   "  ./google/api/annotations.proto \   '  ./offerservice/v1beta1/offers.proto \   )  ./offerservice/v1beta1/offers_api.proto5�_�                             ����                                                                                                                                                                                                                                                                                                                                                 V       `q    �                %    --grpc_out="grpc_js:${OUT_DIR}" \�                :    --ts_out="service=grpc-node,mode=grpc-js:${OUT_DIR}" \�                8    --js_out="import_style=commonjs,binary:${OUT_DIR}" \�                6    --plugin=protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH} \�                4    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \�                protoc \�                 �                ls ../node_modules/�                echo "PATH:"�                cd protorepo�                 ln -sf ../../protorepo protorepo�   
              �   	             ls $OUT_DIR�      
          OUT_DIR="$PWD/src/generated"�      	          <# Directory to write generated code to (.js and .d.ts files)�                 �                HPROTOC_GEN_GRPC_PATH="./node_modules/.bin/grpc_tools_node_protoc_plugin"�                # Path to the grpc_node_plugin�                 �                6PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"�                # Path to this plugin�                 #!/bin/bash5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `�     �               4PROTOC_GEN_TS_PATH="node_modules/.bin/protoc-gen-ts"5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `�     �               (PROTOC_GEN_TS_PATH="/.bin/protoc-gen-ts"5��