import DataLoader from 'dataloader';
import { CustomerLoaderById } from 'src/customer/graphql/customer.loader';
import { IServices } from './loader.interceptor';

export interface ILoaders {
  CustomerLoaderById: DataLoader<number, any>;
}

export const generateDataLoaders = (services: IServices) => {
  return {
    CustomerLoaderById: new CustomerLoaderById().generateDataLoader(services),
  };
};
