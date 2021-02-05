import { ILoaders } from './loader/loaders';

export interface CustomContext {
  req: any;
  res: any;
  loaders: ILoaders;
}
