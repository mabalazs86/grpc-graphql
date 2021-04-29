export const createCustomerMutation = `mutation {
  createCustomer(input: { name: "Robesz" }) {
    id
    name
    isRegistered
  }
}`;
