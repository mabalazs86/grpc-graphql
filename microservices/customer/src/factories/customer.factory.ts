import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Customer } from 'src/customer/customer.entity';

define(Customer, (faker: typeof Faker) => {
  const customer = new Customer();
  customer.name = faker.name.firstName();
  customer.isRegistered = faker.random.boolean();
  return customer;
});
