import { Body, Controller, Post, Session } from '@nestjs/common';
import { DeliveryManLoginDto } from '../dto/login.dto';
import { DeliveryManAuthService } from './delivery_man-auth.service';

@Controller('delivery-man/auth')
export class DeliveryManAuthController {
    constructor(private deliveryManAuthService: DeliveryManAuthService){}

    @Post('login')
    login(@Body() usr: DeliveryManLoginDto, @Session() ss: Record<string, any>){
        let authUser = this.deliveryManAuthService.validate(usr);
        if(authUser){
            ss.email = authUser.email;
            return 'Authenticated';
        }

        return 'Not authenticated'
    }

    @Post('logout')
    logout(@Session() ss: Record<string, any>){
        ss.destroy();
        return 'Logged out';
    }
}
