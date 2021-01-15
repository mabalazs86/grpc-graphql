import { Controller, Get, Inject } from '@nestjs/common';
import { ClientGrpcProxy } from '@nestjs/microservices';
import { customer } from '../proto/customer';

@Controller('customer')
export class CustomerController {
  private customerService: customer.CustomersService;
  constructor(
    @Inject('CustomerGRPC')
    private readonly client: ClientGrpcProxy,
  ) {}

  onModuleInit(): void {
    this.customerService = this.client.getService<customer.CustomersService>(
      'CustomersService',
    );
  }

  @Get('/')
  async getCustomer() {
    const a = await this.customerService.findOne({ id: 1 });
    console.log(a);

    return this.customerService.findOne({ id: 1 });
  }
}
