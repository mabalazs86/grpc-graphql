
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateCustomerInput {
    name: string;
}

export class GetCustomersInput {
    ids?: string[];
    isRegistered?: boolean;
}

export class PaginationInput {
    before?: string;
    after?: string;
    first?: number;
    last?: number;
}

export class Customer {
    id: string;
    name: string;
    isRegistered?: boolean;
}

export abstract class IQuery {
    abstract customer(id: string): Customer | Promise<Customer>;

    abstract customers(input?: GetCustomersInput, pagination?: PaginationInput): CustomerResponse | Promise<CustomerResponse>;
}

export abstract class IMutation {
    abstract createCustomer(input: CreateCustomerInput): Customer | Promise<Customer>;
}

export class CustomerConnection {
    edges?: CustomerEdge[];
    pageInfo?: PageInfo;
}

export class CustomerEdge {
    cursor?: string;
    node?: Customer;
}

export class CustomerResponse {
    page: CustomerConnection;
    pageData?: PageData;
}

export class PageData {
    count: number;
    limit: number;
    offset: number;
}

export class PageInfo {
    startCursor?: string;
    endCursor?: string;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
}
