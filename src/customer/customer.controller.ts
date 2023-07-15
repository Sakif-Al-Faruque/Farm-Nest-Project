import { Controller,Post, Body,UsePipes,ValidationPipe, Get, Param, ParseIntPipe, Delete,Put } from '@nestjs/common';
import { CustomerDto } from './customerDto.dto';
import { CustomerService } from './customer.service';
import { CustomerEntity } from './entity/customer.entity';



@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService){}


  //create
  @Post()
  async create(@Body() customer: CustomerDto): Promise<CustomerEntity> {
    return this.customerService.create(customer);
  }


  //search
  @Get()
  async findAll(): Promise<CustomerEntity[]> {
    return this.customerService.findAll();
  }

  @Get(':cid')
  async findOne(@Param('cid') cid: number): Promise<CustomerEntity>{
    const customer = await this.customerService.findOne(cid);
    return customer;
  }


  //update
  @Put(':cid')
  async update (@Param('cid') cid: number, @Body() customer: CustomerDto): Promise<any> {
    return this.customerService.update(cid, customer);
  }


  //delete
  @Delete(':cid')
  async delete(@Param('cid') cid: number): Promise<any>{
    const customer = await this.customerService.findOne(cid);
    return this.customerService.delete(cid);
  } 

}
