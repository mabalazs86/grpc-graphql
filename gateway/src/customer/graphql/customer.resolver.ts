import { Inject, OnModuleInit, UsePipes, ValidationPipe } from '@nestjs/common';
import { Query, Resolver, Args, Context, Mutation } from '@nestjs/graphql';
import { Customer } from 'src/_generated/graphql/typings';
import { CustomerService } from '../customer.service';
import { CreateCustomerInput } from './inputs/create.customer.input';

@Resolver()
export class CustomerResolver {
  constructor(private customerService: CustomerService) {}

  @Query()
  async customer(@Args('id') id: string): Promise<Customer> {
    return this.customerService.getCustomer(id);
  }

  @Query()
  async customers(@Args('ids') ids: string[]): Promise<(Customer | Error)[]> {
    return this.customerService.getCustomers(ids);
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
