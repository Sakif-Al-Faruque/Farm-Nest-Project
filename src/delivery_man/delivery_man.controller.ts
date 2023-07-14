import { Controller, Get, Post, Delete, Patch, Param, Body, ParseIntPipe, Session} from '@nestjs/common';
import { DeliveryManService } from './delivery_man.service';
import { DeliveryManDto } from './dto/delivery_man.dto';

@Controller('delivery-man')
export class DeliveryManController {
    /* constructor(private deliveryManService: DeliveryManService){}

    @Get()
    showSuppliers(){
        return this.deliveryManService.getAllDeliveryMan();
    }

    @Get(':d_id')
    showSupplierById(@Param('d_id', ParseIntPipe) id: number){
        return this.deliveryManService.getDeliveryManById(id);
    }

    @Post()
    createSupplier(@Body() dm: DeliveryManDto){
        return this.deliveryManService.addDeliveryMan(dm);
    }

    @Delete(':d_id')
    discardSupplier(@Param('d_id', ParseIntPipe) id: number){
        return this.deliveryManService.removeDeliveryMan(id);
    }

    @Patch(':d_id')
    changeSupplier(@Body() su: DeliveryManDto, @Param('d_id', ParseIntPipe) id: number){
        return this.deliveryManService.updateDeliveryMan(su, id);
    }

    @Get('auth/test')
    testing(@Session() ss:Record<string, any>){
        return ss.email;
        //return 'he'
    } */


    /* 
    constructor(
        private deliveryManService: DeliveryManService,
        private mailService: MailerService
        ){}

    @Get()
    async showDeliveryMen(){
        return this.deliveryManService.getAllDeliveryMan();
    }

    @Get(':d_id')
    async showDeliveryManById(@Param('d_id', ParseIntPipe) id: number){
        return this.deliveryManService.getDeliveryManById(id);
    }

    @Post()
    async createDeliveryMan(@Body() dm: SupplierDto){
        this.mailService.sendMail({
            to: 'sakif.saf915@gmail.com',
            from: 'rs.expoit123@gmail.com',
            subject: 'Account Creation Mail',
            text: `Welcome ${dm.first_name}. Your account has been created successfully!`
        });
        return this.deliveryManService.addDeliveryMan(dm);
    }

    @Delete(':d_id')
    async discardDeliveryMan(@Param('d_id', ParseIntPipe) id: number){
        return this.deliveryManService.removeDeliveryMan(id);
    }

    @Patch(':d_id')
    async changeDeliveryMan(@Body() dm: DeliveryManDto, @Param('d_id', ParseIntPipe) id: number){
        return this.deliveryManService.updateDeliveryMan(su, id);
    }
    
    */
}
