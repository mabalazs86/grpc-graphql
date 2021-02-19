module.exports = [
  {
    name: 'default',
    type: 'postgres',
    host: 'customer-db',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'customer',
    entities: ['/home/node/app/dist/**/*.entity.js'],
    factories: ['/home/node/app/dist/factories/**/*.js'],
    seeds: ['/home/node/app/dist/seeds/**/*.js'],
    synchronize: true,
  },
];
