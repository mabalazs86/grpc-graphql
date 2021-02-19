import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { Customer } from 'src/customer/customer.entity';

export default class CreateCustomers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Customer)().createMany(10);
  }
}
