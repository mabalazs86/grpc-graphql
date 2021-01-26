import { Customer } from 'src/graphql/typings';
import { customer } from 'src/proto/customer';

export class CustomerMapper {
  public toCustomer(customerGrpc: customer.Customer): Customer {
    const customerGql: Customer = new Customer();
    customerGql.id = customerGrpc.id;
    customerGql.name = customerGrpc.name.toUpperCase();
    return customerGql;
  }

  public toCustomers(customersGrpc: customer.Customer[]): Customer[] {
    return customersGrpc.map(customer =>
      new CustomerMapper().toCustomer(customer),
    );
  }

  public toCreateCustomerRequest(
    customerGql: Customer,
  ): customer.CreateCustomerRequest {
    const input: customer.CreateCustomerRequest = {
      name: customerGql.name,
    };

    return input;
  }
}
