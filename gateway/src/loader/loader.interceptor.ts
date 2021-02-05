import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  NestInterceptor,
  OnModuleInit,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ClientGrpcProxy } from '@nestjs/microservices';

import { Observable } from 'rxjs';
import {
  CustomersServiceClient,
  CUSTOMERS_SERVICE_NAME,
  CUSTOMER_PACKAGE_NAME,
} from 'src/proto/customer';
import { generateDataLoaders, ILoaders } from './loaders';

export interface IServices {
  [CUSTOMERS_SERVICE_NAME]: CustomersServiceClient;
}

@Injectable()
export class LoaderInterceptor implements NestInterceptor, OnModuleInit {
  private services: IServices;

  @Inject(CUSTOMER_PACKAGE_NAME)
  private readonly client: ClientGrpcProxy;
  onModuleInit() {
    this.services = {
      [CUSTOMERS_SERVICE_NAME]: this.client.getService<CustomersServiceClient>(
        CUSTOMERS_SERVICE_NAME,
      ),
    };
  }
  public intercept(
    context: ExecutionContext,
    next: CallHandler<unknown>,
  ): Observable<unknown> | Promise<Observable<unknown>> {
    const gqlExecutionContext = GqlExecutionContext.create(context);
    const ctx = gqlExecutionContext.getContext();

    const loaders: ILoaders = generateDataLoaders(this.services);

    Object.keys(loaders).forEach(key => {
      ctx.loaders[key] = loaders[key];
    });

    return next.handle();
  }
}
