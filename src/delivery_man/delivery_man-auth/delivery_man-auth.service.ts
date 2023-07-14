import { Injectable } from '@nestjs/common';
import { DeliveryManDto } from '../dto/delivery_man.dto';
import { DeliveryManService } from '../delivery_man.service';
import { DeliveryManLoginDto } from '../dto/login.dto';
import { HashingService } from 'src/hashing/hashing.service';

@Injectable()
export class DeliveryManAuthService {
    /* constructor (private deliveryManService: DeliveryManService){}

    validate(usr: DeliveryManLoginDto){
        let fetchedUsr = this.deliveryManService.getDeliveryManByEmail(usr.email);
        if(fetchedUsr && fetchedUsr.password === usr.password){
            return fetchedUsr;
        }

    //return 'not authenticated';
    } */

    
    constructor (
        private deliveryManService: DeliveryManService,
        private hashingService: HashingService
        ){}

    async validate(usr: DeliveryManLoginDto){
        let fetchedUsr = await this.deliveryManService.getDeliveryManByEmail(usr.email);

        if(fetchedUsr && await this.hashingService.checkText(usr.password, fetchedUsr.password)){
            return fetchedUsr;
        }

        //return 'not authenticated';
    }
    
   
}
