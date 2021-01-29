#!/bin/bash

yarn run grpc_tools_node_protoc --plugin="./node_modules/.bin/protoc-gen-ts_proto" \
  -I="./_proto" \
  --ts_proto_out="./_proto" \
  --ts_proto_opt="nestJs=true" \
  --ts_proto_opt="addGrpcMetadata=true" \
  --ts_proto_opt="returnObservable=true" \
  ./_proto/*.proto

# generate doc from proto files
docker run --rm -v $PWD/_doc:/out -v $PWD/_proto:/protos pseudomuto/protoc-gen-doc --doc_opt=markdown,docs.md

# copy the generated ts files to the services
node_modules/.bin/cpy _proto ./gateway/src/proto
node_modules/.bin/cpy _proto ./microservices/customer/src/proto
# node_modules/.bin/cpy _proto ./microservices/organization/src/proto
