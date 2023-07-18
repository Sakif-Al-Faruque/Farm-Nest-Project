import { Injectable } from '@nestjs/common';
import { StaffService } from '../staff.service';
import { StaffLoginDto } from '../dto/login.dto';
import { HashingService } from 'src/hashing/hashing.service';
import { LogService } from 'src/log/log.service';


@Injectable()
export class StaffAuthService {
    constructor (
        private staffService: StaffService,
        private hashingService: HashingService,
        private logService: LogService
        ){}

        async validate(user: StaffLoginDto){
            let fetchedUser = await this.staffService.getStaffByEmail(user.email);

            if(fetchedUser && await this.hashingService.checkText(user.password, fetchedUser.password)){
                let {log_id} = await this.logService.addLog({
                    log_time: "dummy",
                    logout_time: "",
                    u_email: user.email
                });
                return {fetchedUser, log_id};
            }
            
            // return null
        }
}
