import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata } from 'grpc';
import { Observable, Observer } from 'rxjs';
import { AppService } from './app.service';
import { customer } from './proto/customer';

const customersDatas: customer.Customer[] = [
  { id: 1, name: 'Peter' },
  { id: 2, name: 'Tom' },
  { id: 3, name: 'John' },
  { id: 4, name: 'Susan' },
  { id: 5, name: 'Lisa' },
  { id: 6, name: 'Emily' },
];

@Controller()
export class AppController implements customer.CustomersService {
  constructor(private readonly appService: AppService) {}

  @GrpcMethod('CustomersService')
  getCustomerById(
    data: customer.GetCustomerByIdRequest,
    metadata?: Metadata,
  ): Observable<customer.GetCustomerByIdResponse> {
    const customer = customersDatas.find(({ id }) => id === data.id);
    const result = new Observable((observer: Observer<any>) => {
      observer.next({ customer });

      observer.complete();
    });

    return result;
  }

  @GrpcMethod('CustomersService')
  getCustomersByIds(
    data: customer.GetCustomersByIdsRequest,
    metadata?: Metadata,
  ): Observable<customer.GetCustomersByIdsResponse> {
    const customers = customersDatas.filter(
      ({ id }) => data.ids.indexOf(id) !== -1,
    );
    const result = new Observable((observer: Observer<any>) => {
      observer.next({ customers });

      observer.complete();
    });
    return result;
  }

  @GrpcMethod('CustomersService')
  createCustomer(
    data: customer.CreateCustomerRequest,
    metadata?: Metadata,
  ): Observable<customer.CreateCustomerResponse> {
    const newId = Math.max(...customersDatas.map(({ id }) => id)) + 1;
    const newCustomer: customer.Customer = {
      id: newId,
      name: data.name,
    };
    customersDatas.push(newCustomer);
    const result = new Observable((observer: Observer<any>) => {
      observer.next({ customer: newCustomer });

      observer.complete();
    });
    return result;
  }
}
