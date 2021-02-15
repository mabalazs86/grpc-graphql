import { TypeOrmModuleOptions } from '@nestjs/typeorm';
console.log(__dirname);

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'customer-db',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'customer',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: true,
};
