import { Customer } from 'src/graphql/typings';
import * as proto from 'src/proto/customer';

export class CustomerMapper {
  public toCustomer(customerGrpc: proto.Customer): Customer {
    const customerGql: Customer = new Customer();
    customerGql.id = customerGrpc.id;
    customerGql.name = customerGrpc.name.toUpperCase();
    return customerGql;
  }

  public toCustomers(customersGrpc: proto.Customer[]): Customer[] {
    return customersGrpc.map(customer =>
      new CustomerMapper().toCustomer(customer),
    );
  }

  public toCreateCustomerRequest(
    customerGql: Customer,
  ): proto.CreateCustomerRequest {
    const input: proto.CreateCustomerRequest = {
      name: customerGql.name,
    };

    return input;
  }
}
