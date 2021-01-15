#!/bin/bash

# generate ts types from proto files
node_modules/.bin/tsproto --path ./_proto --output ./_proto --template ../../_proto/grpc-promise-template.hbs

# generate doc from proto files
# docker run --rm -v $PWD/_doc:/out -v $PWD/_proto:/protos pseudomuto/protoc-gen-doc --doc_opt=markdown,docs.md

# copy the generated ts files to the services
node_modules/.bin/cpy _proto ./gateway/src/proto
node_modules/.bin/cpy _proto ./microservices/customer/src/proto
# node_modules/.bin/cpy _proto ./microservices/organization/src/proto

# SRC_DIR=./_proto
# DEST_DIR=./_proto

# node_modules/.bin/pbjs \
# --target static-module \
# --wrap commonjs \
# --keep-case \
# --path ${SRC_DIR} \
# --out ${DEST_DIR}/rpc.js \
# ${SRC_DIR}/**/*.proto

# node_modules/.bin/pbts \
# --out ${DEST_DIR}/rpc.d.ts \
# ${DEST_DIR}/rpc.js


# node_modules/.bin/cpy _proto ./microservices/customer/src/proto