import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { OrderTrackingService } from './order_tracking.service';
import { OrderTrackingDto } from './dto/order_tracking.dto';

@Controller('order-tracking')
export class OrderTrackingController {

    constructor(private orderTrackinService:OrderTrackingService) {}

    @Get()
    getAllOrderTracks()
    {
       return this.orderTrackinService.getAllOrderTracking(); 
    }

    @Get(":otid")
    getOrderTrackbyId(@Param("otid",ParseIntPipe) id:number)
    {
        return this.orderTrackinService.getOrderTrackinById(id);
    }

    @Post("add-order-track")
    addOrderTrack(@Body()obj:OrderTrackingDto)
    {
        return this.orderTrackinService.addOrdertrack(obj);        
    }

    @Delete("remove/:otid")
    delOrderTrack(@Param("otid",ParseIntPipe) id :number)
    {
        return this.orderTrackinService.deleteOrderTrack(id);
    }
    
    @Patch("update-ordertrack/:otid")
    up(@Body() obj:OrderTrackingDto,@Param("otid",ParseIntPipe)id:number)
    {
        return this.orderTrackinService.updateOrderTrack(id,obj);
    }

}
