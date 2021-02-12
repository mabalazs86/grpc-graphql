import { Module } from '@nestjs/common';
import {
  ClientGrpcProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { CustomerResolver } from './graphql/customer.resolver';
import { CustomerLoaders } from './graphql/customer.loader';
import { CustomerGrpcService } from './customer.grpc.service';
import { CustomerService } from './customer.service';
import { CUSTOMER_PACKAGE_NAME } from 'src/_generated/proto/customer';

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
  //         protoPath: '/home/node/app/src/generated/proto/customer.proto',
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
      provide: CUSTOMER_PACKAGE_NAME,
      useFactory: (): ClientGrpcProxy => {
        return ClientProxyFactory.create({
          transport: Transport.GRPC,
          options: {
            url: 'customer-svc:50051',
            package: CUSTOMER_PACKAGE_NAME,
            protoPath: '/home/node/app/src/_generated/proto/customer.proto',
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
    CustomerGrpcService,
    CustomerService,
    CustomerLoaders,
  ],
  exports: [CUSTOMER_PACKAGE_NAME],
})
export class CustomerModule {}
