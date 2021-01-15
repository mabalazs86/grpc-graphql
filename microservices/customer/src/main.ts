import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      url: `${process.env.GRPC_HOST}:${process.env.GRPC_PORT}`,
      package: 'customer',
      // protoPath: join(__dirname, 'proto/customer.proto'),
      protoPath: '/home/node/app/src/proto/customer.proto',
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
