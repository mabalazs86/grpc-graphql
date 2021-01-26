import { Module } from '@nestjs/common';
import {
  ClientGrpcProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { CustomerResolver } from './graphql/customer.resolver';
import { CustomerService } from './customer.service';

@Module({
  // imports: [
  //   CustomerResolver,
  //   ClientsModule.register([
  //     {
  //       name: 'CustomerGRPC',
  //       transport: Transport.GRPC,
  //       options: {
  //         url: 'customer-svc:50051',
  //         package: 'customer',
  //         // protoPath: join(__dirname, '../proto/customer.proto'),
  //         protoPath: '/home/node/app/src/proto/customer.proto',
  //         loader: {
  //           keepCase: true,
  //           enums: String,
  //           oneofs: true,
  //           arrays: true,
  //         },
  //       },
  //     },
  //   ]),
  // ],
  providers: [
    CustomerResolver,
    {
      provide: 'CustomerGRPC',
      useFactory: (): ClientGrpcProxy => {
        return ClientProxyFactory.create({
          transport: Transport.GRPC,
          options: {
            url: 'customer-svc:50051',
            package: 'customer',
            protoPath: '/home/node/app/src/proto/customer.proto',
            loader: {
              keepCase: true,
              enums: String,
              oneofs: true,
              arrays: true,
            },
          },
        });
      },
    },
    CustomerService,
  ],
  exports: ['CustomerGRPC'],
})
export class CustomerModule {}
