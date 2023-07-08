import { Injectable } from '@nestjs/common';
import { SupplierService } from '../supplier.service';
import { SupplierLoginDto } from '../dto/login.dto';
import { HashingService } from 'src/hashing/hashing.service';

@Injectable()
export class SupplierAuthService {
    constructor (
        private supplierService: SupplierService,
        private hashingService: HashingService
        ){}

    async validate(usr: SupplierLoginDto){
        let fetchedUsr = await this.supplierService.getSupplierByEmail(usr.email);

        if(fetchedUsr && await this.hashingService.checkText(usr.password, fetchedUsr.password)){
            return fetchedUsr;
        }

        //return 'not authenticated';
    }
}
