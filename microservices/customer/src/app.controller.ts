import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata } from 'grpc';
import { Observable, Observer } from 'rxjs';
import { AppService } from './app.service';
import {
  CreateCustomerRequest,
  CreateCustomerResponse,
  Customer,
  CustomersServiceController,
  CustomersServiceControllerMethods,
  GetCustomerByIdRequest,
  GetCustomerByIdResponse,
  GetCustomersByIdsRequest,
  GetCustomersByIdsResponse,
} from './proto/customer';

const customersDatas: Customer[] = [
  { id: 1, name: 'Peter' },
  { id: 2, name: 'Tom' },
  { id: 3, name: 'John' },
  { id: 4, name: 'Susan' },
  { id: 5, name: 'Lisa' },
  { id: 6, name: 'Emily' },
];

@Controller()
@CustomersServiceControllerMethods()
export class AppController implements CustomersServiceController {
  constructor(private readonly appService: AppService) {}
  getCustomerById(
    request: GetCustomerByIdRequest,
    metadata?: Metadata,
  ): Observable<GetCustomerByIdResponse> {
    const customer = customersDatas.find(({ id }) => id === request.id);
    const result = new Observable((observer: Observer<any>) => {
      observer.next({ customer });

      observer.complete();
    });

    return result;
  }
  getCustomersByIds(
    request: GetCustomersByIdsRequest,
    metadata?: Metadata,
  ): Observable<GetCustomersByIdsResponse> {
    const customers = customersDatas.filter(
      ({ id }) => request.ids.indexOf(id) !== -1,
    );
    const result = new Observable((observer: Observer<any>) => {
      observer.next({ customers });

      observer.complete();
    });
    return result;
  }
  createCustomer(
    request: CreateCustomerRequest,
    metadata?: Metadata,
  ): Observable<CreateCustomerResponse> {
    const newId = Math.max(...customersDatas.map(({ id }) => id)) + 1;
    const newCustomer: Customer = {
      id: newId,
      name: request.name,
    };
    customersDatas.push(newCustomer);
    const result = new Observable((observer: Observer<any>) => {
      observer.next({ customer: newCustomer });

      observer.complete();
    });
    return result;
  }
}
