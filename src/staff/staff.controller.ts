import { Controller, Get, Post, Delete, Patch, Param, Body, ParseIntPipe, Session } from '@nestjs/common';
import { StaffService } from './staff.service';
import { StaffDto } from './dto/staff.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Controller('staff')
export class StaffController {
    constructor(private staffService: StaffService, private mailService: MailerService){}

    @Get()
    showSuppliers(){
        return this.staffService.getAllStaff();
    }

    @Get(':sid')
    showSupplierById(@Param('sid', ParseIntPipe) id: number){
        return this.staffService.getStaffById(id);
    }

    @Post()
    async createStaff(@Body() staff: StaffDto){
        this.mailService.sendMail({
            to: staff.email,
            from: 'rs.expoit123@gmail.com',
            subject: 'Account Creation Mail',
            text: `Welcome ${staff.first_name}. Your account has been created successfully!`
        });
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
