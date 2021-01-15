import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata } from 'grpc';
import { AppService } from './app.service';
import { customer } from './proto/customer';

@Controller()
export class AppController implements customer.CustomersService {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @GrpcMethod('CustomersService', 'FindOne')
  async findOne(
    data: customer.CustomerById,
    metadata?: Metadata,
  ): Promise<customer.Customer> {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    // const result = await items.find(({ id }) => id === data.id);
    return await items.find(({ id }) => id === data.id);
  }
}
