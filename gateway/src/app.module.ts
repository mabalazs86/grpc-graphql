import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';

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
      context: ({ req, res }): any => ({ req, res }),
    }),
    CustomerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
