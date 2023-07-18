import { Controller,Post, Body,UsePipes,ValidationPipe, Get, Param, ParseIntPipe, Delete,Put } from '@nestjs/common';
import { CustomerDto } from './customerDto.dto';
import { CustomerService } from './customer.service';
import { CustomerEntity } from './entity/customer.entity';
import { ProductService } from 'src/product/product.service';
import { OrderDto } from 'src/order/dto/order.dto';
import { OrderService } from 'src/order/order.service';
import { OrderTrackingService } from 'src/order_tracking/order_tracking.service';



@Controller('customers')
export class CustomerController {
  constructor(
    private readonly customerService: CustomerService,
    private readonly productService: ProductService,
    private readonly orderService: OrderService,
    private readonly orderTrackingService: OrderTrackingService

    ){}


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
  async update (@Param('cid') cid: number, @Body() customer: CustomerEntity): Promise<any> {
    return this.customerService.update(cid, customer);
  }


  //delete
  @Delete(':cid')
  async delete(@Param('cid') cid: number): Promise<any>{
    const customer = await this.customerService.findOne(cid);
    return this.customerService.delete(cid);
  } 

  //features

  //preview product from customer
  @Get('product/show')
  async previewProduct(){
    return this.productService.getAllProduct();
  }

  //search product by name 
  @Get('product/search/:name')
  async searchByProductName(@Param('name')pname: string){
    return this.productService.searchByName(pname);
  }

  //select product by id
  @Get('product/select/:id')
  async selectProductById(@Param('id', ParseIntPipe)p_id:number){
     return this.productService.getSingleProduct(p_id);
  }

  // order a product
  @Get('product/order/:p_id')
  async buyProduct(@Param('p_id',ParseIntPipe)p_id: number,@Body()ord:OrderDto){
    let cid = 1;
    return this.customerService.orderProduct(cid,p_id,ord);
  }

  @Delete('product/order/cancel/:o_id')
  async cancelOrder(@Param('o_id',ParseIntPipe)o_id: number){
    return this.customerService.cancelOrder(o_id);
  }

  //preview all orders
  // @Get('product/order/preview/:c_id')
  // async previewOrder(@Param('c_id', ParseIntPipe)c_id:number){
  //   return this.orderService.showOrderByCustomerId(c_id);
  // }

    //preview all orders
  @Get('product/order/preview/:c_id')
  async previewOrder(@Param('c_id',ParseIntPipe)c_id: number){
    return this.orderService.showOrderByCustomerId(c_id);
  }

  //order tracking 
  @Get('product/order/tracking/:c_id')
  async getOrderByCustomerId(@Param('c_id',ParseIntPipe)c_id: number){
    return this.orderTrackingService.orderTrackingByCustomerId(c_id);
  }




}
