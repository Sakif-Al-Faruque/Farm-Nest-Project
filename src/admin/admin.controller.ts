import { Body, Controller,Delete, Get, Param, ParseIntPipe, Patch, Post, Session } from '@nestjs/common';
import { AdminService } from './admin.service';
import { adminDto } from './dto/admin.dto';
import { SalesReportService } from 'src/sales_report/sales_report.service';
import { StaffService } from 'src/staff/staff.service';
import { adminLoginDto } from './dto/adminLogin.dto';
import {Admin} from "src/admin/admin.entity"
import session from 'express-session';

@Controller('admin')
export class AdminController {
    constructor(
        private adminService:AdminService,
        private salesService:SalesReportService,
        private staffService:StaffService
        )
    {}


    @Post("login")
    async login(@Body()user:adminLoginDto, @Session() session: Record<string,any>):Promise<any>
    {
        let fetchedUsr = await this.adminService.validate(user);

        if(fetchedUsr)
        {
           const admin =  await this.adminService.getAdminByEmail(user.email)
           
           session.adminId= admin.aid;
           session.adminEmail = admin.email;
           session.password = admin.password;

           return "Logged in"
        }

        else
        {
            return "Login Failed"
        }
    } 
    
    @Get("session-id")
    async getSession(@Session() session:Record<string,any>):Promise<any>
    {
        if(session.adminId != null)
        {
            return session.adminId;
        }

        else
        {
            return "No session found!"
        }
    }

    @Post("create-admin")
    async createAdmin(@Body() admin : adminDto,@Session() session:Record<string,any>)
    {
        if(session.adminId != null)
        {
            return this.adminService.addAdmin(admin);
        }

        else
        {
            return "Login first!";
        }
        
    }

    @Get("list-admin")
    async listAdmin(@Session() session:Record<string,any>)
    {
        if(session.adminId != null)
        {
            return this.adminService.getAllAdmin();
        }
        else
        {
            return "Login First!";
        }
       
    }

    @Patch("update-admin/:aid")
    async upAdmin(@Body() admin:adminDto, @Param('aid',ParseIntPipe) id:number,@Session() session:Record<string,any>)
    {
        if(session.adminId != null){
            return this.adminService.updateAdmin(admin,id);
        }
        else{
            return "login first"
        }
        
    }

    @Delete("delete-admin/:aid")
    async delAdmin(@Param("aid",ParseIntPipe)id:number,@Session() session:Record<string,any>):Promise <any>
    {
        if(session.adminId != null)
        {
            return this.adminService.removeAdmin(id);
        }
        else
        {
            return "login first"
        }
        
    }

    @Get("report/all")
    async getAllReports(@Session() session:Record<string,any>):Promise<any>
    {
        if(session.adminId != null)
        {
            const get = await this.salesService.getAllReports();

            if(!get)
            {
                return "Fetching failed"
            }

            else
            {
                return get;
            }
        }

        else{
           
            return "login first"
        }
        
    }

    @Get('report/:sid')
    previewOneSalesReport(@Param('sid', ParseIntPipe) id: number,@Session() session:Record<string,any>)
    {
        if(session.adminId)
        {
            let get =  this.salesService.getSingleReport(id)
            if(!get)
            {
                return "fetch failed"
            }
    
            else
            {
                return get;
            }

        }
        else
        {
            return "login first"
        } 
    }
    
    @Patch("approve/:sid")
    approveReport(@Param("sid",ParseIntPipe) id: number,@Session() session:Record<string,any>)
    {
        let adminId = session.adminId
        if(adminId != null)
        {
            return this.salesService.approveReport(id,adminId)
        }
        else
        {
            return "login failed"
        }
        
    }

    @Get("show-staff")
    async getAllStaff(@Session() session:Record<string,any>)
    {
        if(session.adminId != null)
        {
            return this.staffService.getAllStaff();
        }
        else
        {
            return "login first"
        }
        
    }

    @Get('show-staff/:id')
    async getStaffById(@Param('id',ParseIntPipe)id:number,@Session() session:Record<string,any>)
    {
        if(session.adminId != null)
        {
            return this.staffService.getStaffById(id)
        }

        else
        {
            return "login first"
        }
        
    }

    @Patch("approve-staff/:sid")
    async approveStaff(@Param("sid",ParseIntPipe)id:number,@Session() session:Record<string,any>)
    {
        let adminId = session.adminId;
        if(adminId != null)
        {
            return await this.staffService.approveStaff(id,adminId)
        }
        else
        {
            return "Login first"
        }
        
    }

    @Post("logout")
    async logout(@Session() session:Record<string,any>)
    {
        session.destroy();
        return "Logged out"
    }
}
