import { Injectable } from '@nestjs/common';
import { Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpcProxy } from '@nestjs/microservices';
import {
  CustomersServiceClient,
  CUSTOMERS_SERVICE_NAME,
  CUSTOMER_PACKAGE_NAME,
} from 'src/_generated/proto/customer';
import { Customer } from 'src/_generated/graphql/typings';
import { CreateCustomerInput } from './graphql/inputs/create.customer.input';

import { CustomerMapper } from './mappers/customer.mapper';

@Injectable()
export class CustomerGrpcService implements OnModuleInit {
  private customerService: CustomersServiceClient;
  private customerMapper = new CustomerMapper();

  constructor(
    @Inject(CUSTOMER_PACKAGE_NAME)
    private readonly client: ClientGrpcProxy,
  ) {}

  onModuleInit(): void {
    this.customerService = this.client.getService<CustomersServiceClient>(
      CUSTOMERS_SERVICE_NAME,
    );
  }

  async getCustomer(id: number): Promise<Customer> {
    const result = await this.customerService
      .getCustomerById({ id })
      .toPromise();
    return this.customerMapper.toCustomer(result.customer);
  }

  async getCustomers(ids: number[]): Promise<Customer[]> {
    const result = await this.customerService
      .getCustomersByIds({ ids })
      .toPromise();
    return this.customerMapper.toCustomers(result.customers);
  }

  async createCustomer(customer: CreateCustomerInput): Promise<Customer> {
    const input = this.customerMapper.toCreateCustomerRequest(customer);
    const result = await this.customerService.createCustomer(input).toPromise();
    return this.customerMapper.toCustomer(result.customer);
  }
}
