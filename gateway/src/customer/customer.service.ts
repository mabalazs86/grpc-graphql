import { Injectable } from '@nestjs/common';
import { Customer } from 'src/_generated/graphql/typings';
import { CreateCustomerInput } from './graphql/inputs/create.customer.input';

import { CustomerGrpcService } from './customer.grpc.service';
import { CustomerLoaders } from './graphql/customer.loader';

@Injectable()
export class CustomerService {
  constructor(
    private readonly customerGrpcService: CustomerGrpcService,
    private readonly customerLoaders: CustomerLoaders,
  ) {}

  async getCustomer(id: string): Promise<Customer> {
    return this.customerLoaders.findById.load(id);
  }

  async getCustomers(ids: string[]): Promise<(Customer | Error)[]> {
    return this.customerLoaders.findById.loadMany(ids);
  }

  async createCustomer(customer: CreateCustomerInput): Promise<Customer> {
    return this.customerGrpcService.createCustomer(customer);
  }
}
