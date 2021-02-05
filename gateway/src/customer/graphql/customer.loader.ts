import { Injectable } from '@nestjs/common';

import DataLoader from 'dataloader';
import { Customer } from 'src/graphql/typings';
import { IServices } from 'src/loader/loader.interceptor';
import { ILoader } from 'src/loader/loader.interface';

@Injectable()
export class CustomerLoaderById implements ILoader {
  public services: IServices = null;
  public generateDataLoader(services: IServices): DataLoader<number, Customer> {
    this.services = services;

    return new DataLoader<number, Customer>(ids => this.findById(ids));
  }

  public async findById(ids: readonly number[]) {
    const result = await this.services.CustomersService.getCustomersByIds({
      // @ts-ignore: TS4104
      ids,
    }).toPromise();
    return ids.map(id => result.customers.find(b => b.id === id));
  }
}
