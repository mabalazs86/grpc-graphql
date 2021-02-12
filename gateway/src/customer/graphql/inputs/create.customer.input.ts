import { Length } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';
import { Customer } from 'src/_generated/graphql/typings';

@InputType()
export class CreateCustomerInput extends Customer {
  @Field()
  @Length(2, 255)
  name: string;
}
