import { Injectable, Scope } from '@nestjs/common';
import DataLoader from 'dataloader';
import { CustomerGrpcService } from '../customer.grpc.service';
import { Customer, GetCustomersInput } from 'src/_generated/graphql/typings';
import ConnectionArgs from 'src/common/pagination/connection.args';
import { connectionFromArraySlice } from 'graphql-relay';
import relayTypes from 'src/common/pagination/relay.types';
import CustomerPaginationResponse from './CustomerPaginationResponse';

@Injectable({ scope: Scope.REQUEST })
export class CustomerLoaders {
  constructor(private readonly customerGrpcService: CustomerGrpcService) {}

  public readonly loadById = new DataLoader<string, Customer>(async ids => {
    try {
      //   @ts-ignore: TS4104
      const entities = await this.customerGrpcService.getCustomers(ids);
      return ids.map(id => entities.find(entity => entity.id === id));
    } catch (error) {
      throw error;
    }
  });

  public readonly loadFilteredCustomers = async (
    input: GetCustomersInput,
    pagination: ConnectionArgs,
  ) => {
    const { limit, offset } = pagination.pagingParams();

    const {
      ids,
      count,
    } = await this.customerGrpcService.getCustomerIdsByIsRegistered(
      input.isRegistered,
      offset,
      limit,
    );

    const entities = await this.loadById.loadMany(ids);
    const page = connectionFromArraySlice(entities, pagination, {
      arrayLength: count,
      sliceStart: offset || 0,
    });

    return { page, pageData: { count, limit, offset } };
  };
}
