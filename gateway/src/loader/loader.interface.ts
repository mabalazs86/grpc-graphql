import DataLoader from 'dataloader';
import { IServices } from './loader.interceptor';

export interface ILoader {
  generateDataLoader(services: IServices): DataLoader<unknown, unknown>;
}
