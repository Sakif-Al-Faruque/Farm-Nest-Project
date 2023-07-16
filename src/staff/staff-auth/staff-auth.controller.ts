import { Controller, Body, Post, Session } from '@nestjs/common';
import { StaffAuthService } from './staff-auth.service';
import { StaffLoginDto } from '../dto/login.dto';

@Controller('staff/auth')
export class StaffAuthController {

    constructor(private staffAuthService: StaffAuthService){}

    @Post('login')
    async login(@Body() user: StaffLoginDto, @Session() ss: Record<string, any>){
        let authUser = await this.staffAuthService.validate(user);
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
