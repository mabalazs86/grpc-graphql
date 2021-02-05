import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { LoaderProvider } from './loader/loader.prodiver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      path: '/',
      subscriptions: '/',
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(__dirname, 'graphql.ts'),
        outputAs: 'class',
      },
      debug: true,
      cors: false,
      installSubscriptionHandlers: true,
      playground: {
        endpoint: '/',
        subscriptionEndpoint: '/',
        settings: {
          'request.credentials': 'include',
        },
        // tabs: [
        //   {
        //     name: 'GraphQL API',
        //     endpoint: '/',
        //     query: playgroundQuery
        //   }
        // ]
      },
      context: ({ req, res }): any => ({ req, res, loaders: {} }),
    }),
    CustomerModule,
  ],
  controllers: [AppController],
  providers: [AppService, LoaderProvider],
})
export class AppModule {}
