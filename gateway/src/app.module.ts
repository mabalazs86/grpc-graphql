import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { createCustomerMutation } from './customer/graphql/playground/create.customer.mutation';
import { customersQuery } from './customer/graphql/playground/customers.query';

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
        tabs: [
          {
            name: 'Customers Query',
            endpoint: '/',
            query: customersQuery,
          },
          {
            name: 'Create Customer',
            endpoint: '/',
            query: createCustomerMutation,
          },
        ],
      },
      context: ({ req, res }): any => ({ req, res, loaders: {} }),
    }),
    CustomerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
