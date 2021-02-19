import { ObjectType } from '@nestjs/graphql';
import relayTypes from 'src/common/pagination/relay.types';
import { Customer } from 'src/_generated/graphql/typings';

@ObjectType()
export default class CustomerPaginationResponse extends relayTypes<Customer>(
  Customer,
) {}
