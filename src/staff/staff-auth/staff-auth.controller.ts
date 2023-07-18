import { Controller, Body, Post, Session } from '@nestjs/common';
import { StaffAuthService } from './staff-auth.service';
import { StaffLoginDto } from '../dto/login.dto';
import { LogService } from 'src/log/log.service';

@Controller('staff/auth')
export class StaffAuthController {

    constructor(
        private staffAuthService: StaffAuthService,
        private logService: LogService
        ){}

    @Post('login')
    async login(@Body() user: StaffLoginDto, @Session() ss: Record<string, any>){
        let {fetchedUser, log_id} = await this.staffAuthService.validate(user)
        if(fetchedUser){
            ss.staffId = fetchedUser.sid;
            ss.staffEmail = fetchedUser.email;
            ss.staffLogId = log_id;
            return 'Authenticated';
        }

        return 'Not authenticated'
    }

    @Post('logout')
    async logout(@Session() ss: Record<string, any>): Promise<any>{
        let {log_id, log_time, u_email} = await this.logService.getLogById(ss.staffLogId);
        let logout_time = "dummy from log out";
        this.logService.updateLog({log_time, u_email, logout_time}, log_id)
        ss.destroy();
        return 'Logged out';
    }
}
