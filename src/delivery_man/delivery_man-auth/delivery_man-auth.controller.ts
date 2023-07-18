import { Body, Controller, Post, Session } from '@nestjs/common';
import { DeliveryManLoginDto } from '../dto/login.dto';
import { DeliveryManAuthService } from './delivery_man-auth.service';
import { LogService } from 'src/log/log.service';

@Controller('delivery-man/auth')
export class DeliveryManAuthController {
    constructor(
        private deliveryManAuthService: DeliveryManAuthService,
        private logService: LogService
        ){}

    //Delivery man login
    @Post('login')
    async login(@Body() usr: DeliveryManLoginDto, @Session() ss: Record<string, any>){
        let {fetchedUsr, log_id} = await this.deliveryManAuthService.validate(usr);
        if(fetchedUsr){
            ss.deliveryManId = fetchedUsr.d_id;
            ss.deliveryManEmail = fetchedUsr.email;
            ss.deliveryManLogId = log_id;
            return 'Authenticated';
        }

        return 'Not authenticated'
    }

    //Delivery man logout
    @Post('logout')
    async logout(@Session() ss: Record<string, any>): Promise<any>{
        let {log_id, log_time, u_email} = await this.logService.getLogById(ss.userLogId);
        let logout_time = "dummy from log out";
        this.logService.updateLog({log_time, u_email, logout_time}, log_id)
        ss.destroy();
        return 'Logged out';
    }
    
}
