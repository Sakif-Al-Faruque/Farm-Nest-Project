import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Session } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { SupplierDto } from './dto/supplier.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Controller('supplier')
export class SupplierController {
    constructor(
        private supplierService: SupplierService,
        private mailService: MailerService
        ){}

    @Get()
    async showSuppliers(){
        return this.supplierService.getAllSuppliers();
    }

    @Get(':su_id')
    async showSupplierById(@Param('su_id', ParseIntPipe) id: number){
        return this.supplierService.getSupplierById(id);
    }

    @Post()
    async createSupplier(@Body() su: SupplierDto){
        this.mailService.sendMail({
            to: 'amimahinurrahman@gmail.com',
            from: 'rs.expoit123@gmail.com',
            subject: 'Account Creation Mail',
            text: `Welcome ${su.first_name}. Your account has been created successfully!`
        });
        return this.supplierService.addSupplier(su);
    }

    @Delete(':su_id')
    async discardSupplier(@Param('su_id', ParseIntPipe) id: number){
        return this.supplierService.removeSupplier(id);
    }

    @Patch(':su_id')
    async changeSupplier(@Body() su: SupplierDto, @Param('su_id', ParseIntPipe) id: number){
        return this.supplierService.updateSupplier(su, id);
    }

    @Get('auth/test')
    testing(@Session() ss:Record<string, any>){
        return ss.email;
        //return 'he'
    }
}
