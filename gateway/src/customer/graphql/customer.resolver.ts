import { Inject, OnModuleInit, UsePipes, ValidationPipe } from '@nestjs/common';
import { Query, Resolver, Args, Context, Mutation } from '@nestjs/graphql';
import { Customer } from 'src/graphql/typings';
import { CustomerGrpcService } from '../customer.grpc.service';
import { CustomerService } from '../customer.service';
import { CustomerLoaders } from './customer.loader';
import { CreateCustomerInput } from './inputs/create.customer.input';

@Resolver()
export class CustomerResolver {
  constructor(private customerService: CustomerService) {}

  @Query()
  async customer(@Args('id') id: number): Promise<Customer> {
    return this.customerService.getCustomer(id);
  }

  @Query()
  async customers(@Args('ids') ids: number[]): Promise<(Customer | Error)[]> {
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
