import { Injectable } from '@nestjs/common';
import { SupplierService } from '../supplier.service';
import { SupplierLoginDto } from '../dto/login.dto';
import { HashingService } from 'src/hashing/hashing.service';
import { LogService } from 'src/log/log.service';

@Injectable()
export class SupplierAuthService {
    constructor (
        private supplierService: SupplierService,
        private hashingService: HashingService,
        private logService: LogService
        ){}

    async validate(usr: SupplierLoginDto){
        let fetchedUsr = await this.supplierService.getSupplierByEmail(usr.email);

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
