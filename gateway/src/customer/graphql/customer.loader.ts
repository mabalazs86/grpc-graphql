import { Injectable, Scope } from '@nestjs/common';
import DataLoader from 'dataloader';
import { CustomerGrpcService } from '../customer.grpc.service';
import { Customer } from 'src/graphql/typings';
@Injectable({ scope: Scope.REQUEST })
export class CustomerLoaders {
  constructor(private readonly customerGrpcService: CustomerGrpcService) {}

  public readonly findById = new DataLoader<number, Customer>(async ids => {
    try {
      //   @ts-ignore: TS4104
      const customers = await this.customerGrpcService.getCustomers(ids);

      return ids.map(id => customers.find(customer => customer.id === id));
    } catch (error) {
      throw error;
    }
  });
}