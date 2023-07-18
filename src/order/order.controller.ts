import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDto } from './dto/order.dto';
import { OrderEntity } from './entity/order.entity';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService){}

    @Get()
    async showSuppliers(): Promise<OrderEntity[]>{
        return await this.orderService.getAllOrders();
    }

    @Get(':o_id')
    async showSupplierById(@Param('o_id', ParseIntPipe) id: number): Promise<OrderEntity>{
        return await this.orderService.getOrderById(id);
    }

    @Post()
    async createSupplier(@Body() ord: OrderDto): Promise<OrderEntity>{
        return await this.orderService.addOrder(ord);
    }

    @Delete(':o_id')
    async discardSupplier(@Param('o_id', ParseIntPipe) id: number): Promise<OrderEntity>{
        return await this.orderService.removeOrder(id);
    }

    @Patch(':o_id')
    async changeSupplier(@Body() ord: OrderDto, @Param('o_id', ParseIntPipe) id: number): Promise<OrderEntity>{
        return await this.orderService.updateOrder(ord, id);
    }
}
