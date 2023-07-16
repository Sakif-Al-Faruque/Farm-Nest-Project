import { Body, Controller, Get, Post, Session } from '@nestjs/common';
import { SupplierAuthService } from './supplier-auth.service';
import { SupplierLoginDto } from '../dto/login.dto';

@Controller('supplier/auth')
export class SupplierAuthController {

    constructor(private supplierAuthService: SupplierAuthService){}

    @Post('login')
    async login(@Body() usr: SupplierLoginDto, @Session() ss: Record<string, any>){
        let authUser = await this.supplierAuthService.validate(usr);
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
