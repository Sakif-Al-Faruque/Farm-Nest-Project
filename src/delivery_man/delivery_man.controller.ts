import { Controller, Get, Post, Delete, Patch, Param, Body, ParseIntPipe, Session} from '@nestjs/common';
import { DeliveryManService } from './delivery_man.service';
import { DeliveryManDto } from './dto/delivery_man.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Controller('delivery-man')
export class DeliveryManController {
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
    async createDeliveryMan(@Body() dm: DeliveryManDto){
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
        return this.deliveryManService.updateDeliveryMan(dm, id);
    }
}
