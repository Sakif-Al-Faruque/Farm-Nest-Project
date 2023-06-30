import { Body, Controller, Get, Post } from '@nestjs/common';
import { SupplierAuthService } from './supplier-auth.service';
import { SupplierLoginDto } from '../dto/login.dto';

@Controller('supplier/auth')
export class SupplierAuthController {

    constructor(private supplierAuthService: SupplierAuthService){}

    @Post('login')
    login(@Body() usr: SupplierLoginDto){
        return this.supplierAuthService.validate(usr);
    }
}
