import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Session } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { SupplierDto } from './dto/supplier.dto';

@Controller('supplier')
export class SupplierController {
    constructor(private supplierService: SupplierService){}

    @Get()
    showSuppliers(){
        return this.supplierService.getAllSuppliers();
    }

    @Get(':su_id')
    showSupplierById(@Param('su_id', ParseIntPipe) id: number){
        return this.supplierService.getSupplierById(id);
    }

    @Post()
    createSupplier(@Body() su: SupplierDto){
        return this.supplierService.addSupplier(su);
    }

    @Delete(':su_id')
    discardSupplier(@Param('su_id', ParseIntPipe) id: number){
        return this.supplierService.removeSupplier(id);
    }

    @Patch(':su_id')
    changeSupplier(@Body() su: SupplierDto, @Param('su_id', ParseIntPipe) id: number){
        return this.supplierService.updateSupplier(su, id);
    }

    @Get('auth/test')
    testing(@Session() ss:Record<string, any>){
        return ss.email;
        //return 'he'
    }
}
