# Install and run the project with docker-compose

```
$ yarn
$ yarn proto    # Generate ts types from proto files
$ cd gateway && yarn
$ yarn generate:typings     # Generate ts types from graphql files
$ cd ..
$ docker-compose -f docker-compose.yml build --no-cache
$ docker-compose -f docker-compose.yml up
$ docker exec -it customer-svc yarn seed:db  # Generate test data in customer service
```

Open graphql playground: http://localhost:3000/graphql

# Install and run the project with kubernetes

```
$ minikube start --driver=kvm2
$ eval $(minikube -p minikube docker-env)
$ docker build -t mabalazs86/grpc-customer-svc:0.0.1 ./microservices/customer
$ docker build -t mabalazs86/grpc-gateway:0.0.1 ./gateway
$ kubectl apply -f infra/k8s
$ minikube service gateway --url
```

<!-- postgress: https://stackoverflow.com/questions/38713597/create-table-in-postgresql-docker-image/38714511 -->
