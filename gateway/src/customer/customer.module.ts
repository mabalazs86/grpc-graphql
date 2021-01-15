import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { CustomerController } from './customer.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CustomerGRPC',
        transport: Transport.GRPC,
        options: {
          url: 'customer-svc:50051',
          package: 'customer',
          // protoPath: join(__dirname, '../proto/customer.proto'),
          protoPath: '/home/node/app/src/proto/customer.proto',
          loader: {
            keepCase: true,
            enums: String,
            oneofs: true,
            arrays: true,
          },
        },
      },
    ]),
  ],
  controllers: [CustomerController],
})
export class CustomerModule {}
