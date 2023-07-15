import { Body, Controller,Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
import { adminDto } from './dto/admin.dto';

@Controller('admin')
export class AdminController {
    constructor(private adminService:AdminService)
    {}

    @Post("create-admin")
    async createAdmin(@Body() admin : adminDto)
    {
        return this.adminService.addAdmin(admin);
    }

    @Get("list-admin")
    async listAdmin()
    {
        return this.adminService.getAllAdmin();
    }

    @Patch("update-admin/:aid")
    async upAdmin(@Body() admin:adminDto, @Param('aid',ParseIntPipe) id:number)
    {
        return this.adminService.updateAdmin(admin,id);
    }

    @Delete("delete-admin/:aid")
    async delAdmin(@Param("aid",ParseIntPipe)id:number):Promise <any>
    {
        return this.adminService.removeAdmin(id);
    }
}
