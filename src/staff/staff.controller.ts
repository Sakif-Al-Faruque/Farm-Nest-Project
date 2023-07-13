import { Controller, Get, Post, Delete, Patch, Param, Body, ParseIntPipe, Session, Put} from '@nestjs/common';
import { StaffService } from './staff.service';
import { StaffDto } from './dto/staff.dto';

@Controller('staff')
export class StaffController {
    constructor(private staffService: StaffService){}

    @Get()
    showSuppliers(){
        return this.staffService.getAllStaff();
    }

    @Get(':sid')
    showSupplierById(@Param('sid', ParseIntPipe) id: number){
        return this.staffService.getStaffById(id);
    }

    @Post()
    createSupplier(@Body() staff: StaffDto){
        return this.staffService.addStaff(staff);
    }

    @Delete(':sid')
    discardSupplier(@Param('sid', ParseIntPipe) id: number){
        return this.staffService.removeStaff(id);
    }

    @Patch(':sid')
    changeSupplier(@Body() staff: StaffDto, @Param('sid', ParseIntPipe) id: number){
        return this.staffService.updateStaff(staff, id);
    }

    @Get('auth/test')
    testing(@Session() ss:Record<string, any>){
        return ss.email;
    }
}
