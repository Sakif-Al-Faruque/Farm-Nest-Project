import { Injectable } from '@nestjs/common';
import { DeliveryManDto } from '../dto/delivery_man.dto';
import { DeliveryManService } from '../delivery_man.service';
import { DeliveryManLoginDto } from '../dto/login.dto';
import { HashingService } from 'src/hashing/hashing.service';
import { LogService } from 'src/log/log.service';

@Injectable()
export class DeliveryManAuthService {
    constructor (
        private deliveryManService: DeliveryManService,
        private hashingService: HashingService,
        private logService: LogService
        ){}

    async validate(usr: DeliveryManLoginDto){
        let fetchedUsr = await this.deliveryManService.getDeliveryManByEmail(usr.email);

        if(fetchedUsr && await this.hashingService.checkText(usr.password, fetchedUsr.password)){
            let {log_id} = await this.logService.addLog({
                log_time: "dummy",
                logout_time: "",
                u_email: usr.email
            });
            return {fetchedUsr, log_id};
        }

        //return 'not authenticated';
    }   
}
