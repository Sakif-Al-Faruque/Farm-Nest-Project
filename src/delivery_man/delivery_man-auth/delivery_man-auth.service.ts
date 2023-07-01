import { Injectable } from '@nestjs/common';
import { DeliveryManDto } from '../dto/delivery_man.dto';
import { DeliveryManService } from '../delivery_man.service';
import { DeliveryManLoginDto } from '../dto/login.dto';

@Injectable()
export class DeliveryManAuthService {
    constructor (private deliveryManService: DeliveryManService){}

    validate(usr: DeliveryManLoginDto){
        let fetchedUsr = this.deliveryManService.getDeliveryManByEmail(usr.email);
        if(fetchedUsr && fetchedUsr.password === usr.password){
            return fetchedUsr;
        }

    //return 'not authenticated';
    }
}
