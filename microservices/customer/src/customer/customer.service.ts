import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Metadata } from 'grpc';
import { Observable, Observer } from 'rxjs';
import { In } from 'typeorm';
import {
  CreateCustomerRequest,
  CreateCustomerResponse,
  CustomersServiceController,
  CustomersServiceControllerMethods,
  GetCustomerByIdRequest,
  GetCustomerByIdResponse,
  GetCustomersByIdsRequest,
  GetCustomersByIdsResponse,
} from '../proto/customer';
import { Customer } from './customer.entity';
import { CustomerRepository } from './customer.repository';

@Controller()
@CustomersServiceControllerMethods()
export class CustomerService implements CustomersServiceController {
  constructor(
    @InjectRepository(CustomerRepository)
    private customerRepository: CustomerRepository,
  ) {}

  async getCustomerById(
    request: GetCustomerByIdRequest,
    metadata?: Metadata,
  ): Promise<GetCustomerByIdResponse> {
    const customer = await this.customerRepository.findOne(request.id);

    return { customer };
  }
  async getCustomersByIds(
    request: GetCustomersByIdsRequest,
    metadata?: Metadata,
  ): Promise<GetCustomersByIdsResponse> {
    console.log(request.ids);

    const customers = await this.customerRepository.find({
      where: { id: In(request.ids) },
    });

    return { customers };
  }

  async createCustomer(
    request: CreateCustomerRequest,
    metadata?: Metadata,
  ): Promise<CreateCustomerResponse> {
    const customer = { ...new Customer(), ...request };
    const newCustomer = await this.customerRepository.save(customer);

    return { customer: newCustomer };
  }
}
