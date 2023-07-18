import { Body, Controller, Get, Post, Session } from '@nestjs/common';
import { SupplierAuthService } from './supplier-auth.service';
import { SupplierLoginDto } from '../dto/login.dto';
import { LogService } from 'src/log/log.service';

@Controller('supplier/auth')
export class SupplierAuthController {

    constructor(
        private supplierAuthService: SupplierAuthService,
        private logService: LogService
        ){}

    //supplier login
    @Post('login')
    async login(@Body() usr: SupplierLoginDto, @Session() ss: Record<string, any>){
        let {fetchedUsr, log_id} = await this.supplierAuthService.validate(usr);
        if(fetchedUsr){
            ss.supplierId = fetchedUsr.su_id;
            ss.supplierEmail = fetchedUsr.email;
            ss.supplierLogId = log_id;
            return 'Authenticated';
        }

        return 'Not authenticated'
    }

    //supplier logout
    @Post('logout')
    async logout(@Session() ss: Record<string, any>): Promise<any>{
        let {log_id, log_time, u_email} = await this.logService.getLogById(ss.supplierLogId);
        let logout_time = "dummy from log out";
        this.logService.updateLog({log_time, u_email, logout_time}, log_id)
        ss.destroy();
        return 'Logged out';
    }
}
