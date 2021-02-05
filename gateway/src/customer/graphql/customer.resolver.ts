import { Inject, OnModuleInit, UsePipes, ValidationPipe } from '@nestjs/common';
import { Query, Resolver, Args, Context, Mutation } from '@nestjs/graphql';
import { CustomContext } from 'src/CustomContext';
import { Customer } from 'src/graphql/typings';
import { CustomerService } from '../customer.service';
import { CreateCustomerInput } from './inputs/create.customer.input';

@Resolver()
export class CustomerResolver {
  constructor(private customerService: CustomerService) {}

  @Query()
  async customer(@Args('id') id: number): Promise<Customer> {
    return this.customerService.getCustomer(id);
  }

  @Query()
  async customers(
    @Args('ids') ids: number[],
    @Context() ctx: CustomContext,
  ): Promise<Customer[]> {
    return ctx.loaders.CustomerLoaderById.loadMany(ids);
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
