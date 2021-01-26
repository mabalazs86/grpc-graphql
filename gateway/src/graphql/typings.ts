
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateCustomerInput {
    name: string;
}

export class Customer {
    id: number;
    name: string;
}

export abstract class IQuery {
    abstract customer(id: number): Customer | Promise<Customer>;

    abstract customers(ids: number[]): Customer[] | Promise<Customer[]>;
}

export abstract class IMutation {
    abstract createCustomer(input: CreateCustomerInput): Customer | Promise<Customer>;
}
