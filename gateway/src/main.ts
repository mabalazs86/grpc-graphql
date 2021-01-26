import { NestFactory } from '@nestjs/core';
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';
import cors from 'cors';
import { AppModule } from './app.module';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
  const app: NestExpressApplication = await NestFactory.create<
    NestExpressApplication
  >(AppModule, new ExpressAdapter());
  app.use(
    cors({
      origin: '*',
      credentials: true,
    }),
  );
  return app.listenAsync(3000);
}
bootstrap();
