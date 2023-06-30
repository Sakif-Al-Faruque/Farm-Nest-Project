import { Injectable } from '@nestjs/common';
import { SupplierService } from '../supplier.service';
import { SupplierLoginDto } from '../dto/login.dto';

@Injectable()
export class SupplierAuthService {
    constructor (private supplierService: SupplierService){}

    validate(usr: SupplierLoginDto){
        let fetchedUsr = this.supplierService.getSupplierByEmail(usr.email);
        if(fetchedUsr && fetchedUsr.password === usr.password){
            return fetchedUsr;
        }

        //return 'not authenticated';
    }
}
