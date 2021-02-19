import { Injectable } from '@nestjs/common';
import { Customer, GetCustomersInput } from 'src/_generated/graphql/typings';
import { CreateCustomerInput } from './graphql/inputs/create.customer.input';

import { CustomerGrpcService } from './customer.grpc.service';
import { CustomerLoaders } from './graphql/customer.loader';
import ConnectionArgs from 'src/common/pagination/connection.args';
import CustomerPaginationResponse from './graphql/CustomerPaginationResponse';

@Injectable()
export class CustomerService {
  constructor(
    private readonly customerGrpcService: CustomerGrpcService,
    private readonly customerLoaders: CustomerLoaders,
  ) {}

  async getCustomer(id: string): Promise<Customer> {
    return this.customerLoaders.loadById.load(id);
  }

  async getCustomers(
    input: GetCustomersInput,
    pagination: ConnectionArgs,
  ): Promise<CustomerPaginationResponse> {
    return this.customerLoaders.loadFilteredCustomers(input, pagination);
    // return this.customerLoaders.findById.loadMany(ids);
  }

  async createCustomer(customer: CreateCustomerInput): Promise<Customer> {
    return this.customerGrpcService.createCustomer(customer);
  }
}
