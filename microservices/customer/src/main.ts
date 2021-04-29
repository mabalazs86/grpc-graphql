import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';
import { CUSTOMER_PACKAGE_NAME } from './proto/customer';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      url: `${process.env.GRPC_HOST}:${process.env.GRPC_PORT}`,
      package: CUSTOMER_PACKAGE_NAME,
      protoPath: `${process.env.PROTO_DIR}/customer.proto`,
      // protoPath: '/home/node/app/src/proto/customer.proto',
      loader: {
        keepCase: true,
        enums: String,
        oneofs: true,
        arrays: true,
      },
    },
  });

  await app.startAllMicroservicesAsync();
}
bootstrap();
