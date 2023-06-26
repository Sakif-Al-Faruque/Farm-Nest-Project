import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDto } from './dto/order.dto';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService){}

    @Get()
    showSuppliers(){
        return this.orderService.getAllOrders();
    }

    @Get(':o_id')
    showSupplierById(@Param('o_id', ParseIntPipe) id: number){
        return this.orderService.getOrderById(id);
    }

    @Post()
    createSupplier(@Body() ord: OrderDto){
        return this.orderService.addOrder(ord);
    }

    @Delete(':o_id')
    discardSupplier(@Param('o_id', ParseIntPipe) id: number){
        return this.orderService.removeOrder(id);
    }

    @Patch(':o_id')
    changeSupplier(@Body() ord: OrderDto, @Param('o_id', ParseIntPipe) id: number){
        return this.orderService.updateOrder(ord, id);
    }
}
