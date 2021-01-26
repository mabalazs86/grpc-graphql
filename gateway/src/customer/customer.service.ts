import { Injectable } from '@nestjs/common';
import { Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpcProxy } from '@nestjs/microservices';
import { CreateCustomerInput } from './graphql/inputs/create.customer.input';

import { customer } from '../proto/customer';
import { CustomerMapper } from './mappers/customer.mapper';

@Injectable()
export class CustomerService implements OnModuleInit {
  private customerService: customer.CustomersService;
  constructor(
    @Inject('CustomerGRPC')
    private readonly client: ClientGrpcProxy,
  ) {}
  onModuleInit(): void {
    this.customerService = this.client.getService<customer.CustomersService>(
      'CustomersService',
    );
  }
  async getCustomer(id: number): Promise<customer.Customer> {
    const result = await this.customerService
      .getCustomerById({ id })
      .toPromise();
    return new CustomerMapper().toCustomer(result.customer);
  }

  async getCustomers(ids: number[]): Promise<customer.Customer[]> {
    const result = await this.customerService
      .getCustomersByIds({ ids })
      .toPromise();
    return new CustomerMapper().toCustomers(result.customers);
  }

  async createCustomer(
    customer: CreateCustomerInput,
  ): Promise<customer.Customer> {
    const input = new CustomerMapper().toCreateCustomerRequest(customer);
    const result = await this.customerService.createCustomer(input).toPromise();
    return new CustomerMapper().toCustomer(result.customer);
  }
}
