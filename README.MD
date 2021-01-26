# Install and run the project

```
$ yarn
$ yarn proto    # Generate ts types from proto files
$ cd gateway && yarn
$ yarn generate:typings     # Generate ts types from graphql files
$ cd ..
$ docker-compose -f docker-compose.yml build --no-cache
$ docker-compose -f docker-compose.yml up
```

Open graphql playground: http://localhost:3000/graphql
