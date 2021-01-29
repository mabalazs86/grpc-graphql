/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Metadata } from "grpc";

export const protobufPackage = "customer";

export interface Customer {
  id: number;
  name: string;
}

export interface GetCustomerByIdRequest {
  id: number;
}

export interface GetCustomerByIdResponse {
  customer: Customer | undefined;
}

export interface GetCustomersByIdsRequest {
  ids: number[];
}

export interface GetCustomersByIdsResponse {
  customers: Customer[];
}

export interface CreateCustomerRequest {
  name: string;
}

export interface CreateCustomerResponse {
  customer: Customer | undefined;
}

export const CUSTOMER_PACKAGE_NAME = "customer";

export interface CustomersServiceClient {
  getCustomerById(
    request: GetCustomerByIdRequest,
    metadata?: Metadata
  ): Observable<GetCustomerByIdResponse>;

  getCustomersByIds(
    request: GetCustomersByIdsRequest,
    metadata?: Metadata
  ): Observable<GetCustomersByIdsResponse>;

  createCustomer(
    request: CreateCustomerRequest,
    metadata?: Metadata
  ): Observable<CreateCustomerResponse>;
}

export interface CustomersServiceController {
  getCustomerById(
    request: GetCustomerByIdRequest,
    metadata?: Metadata
  ): Observable<GetCustomerByIdResponse>;

  getCustomersByIds(
    request: GetCustomersByIdsRequest,
    metadata?: Metadata
  ): Observable<GetCustomersByIdsResponse>;

  createCustomer(
    request: CreateCustomerRequest,
    metadata?: Metadata
  ): Observable<CreateCustomerResponse>;
}

export function CustomersServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods = [
      "getCustomerById",
      "getCustomersByIds",
      "createCustomer",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method
      );
      GrpcMethod("CustomersService", method)(
        constructor.prototype[method],
        method,
        descriptor
      );
    }
    const grpcStreamMethods = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method
      );
      GrpcStreamMethod("CustomersService", method)(
        constructor.prototype[method],
        method,
        descriptor
      );
    }
  };
}

export const CUSTOMERS_SERVICE_NAME = "CustomersService";
