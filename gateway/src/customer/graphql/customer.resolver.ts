import { Inject, OnModuleInit, UsePipes, ValidationPipe } from '@nestjs/common';
import { Query, Resolver, Args, Context, Mutation } from '@nestjs/graphql';
import ConnectionArgs from 'src/common/pagination/connection.args';
import { Customer, GetCustomersInput } from 'src/_generated/graphql/typings';
import { CustomerService } from '../customer.service';
import CustomerPaginationResponse from './CustomerPaginationResponse';
import { CreateCustomerInput } from './inputs/create.customer.input';

@Resolver()
export class CustomerResolver {
  constructor(private customerService: CustomerService) {}

  @Query()
  async customer(@Args('id') id: string): Promise<Customer> {
    return this.customerService.getCustomer(id);
  }

  @Query()
  async customers(
    @Args('input') input: GetCustomersInput,
    @Args('pagination') pagination: ConnectionArgs,
  ): Promise<CustomerPaginationResponse> {
    return this.customerService.getCustomers(input, pagination);
  }

  @Mutation(() => Customer)
  @UsePipes(ValidationPipe)
  async createCustomer(
    @Args('input')
    input: CreateCustomerInput,
  ): Promise<Customer> {
    return this.customerService.createCustomer(input);
  }
}
