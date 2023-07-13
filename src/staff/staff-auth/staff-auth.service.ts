import { Injectable } from '@nestjs/common';
import { StaffService } from '../staff.service';
import { StaffLoginDto } from '../dto/login.dto';
import { HashingService } from 'src/hashing/hashing.service';


@Injectable()
export class StaffAuthService {
    constructor (
        private staffService: StaffService,
        private hashingService: HashingService
        ){}

        async validate(user: StaffLoginDto){
            let fetchedUser = await this.staffService.getStaffByEmail(user.email);

            if(fetchedUser && await this.hashingService.checkText(user.password, fetchedUser.password)){
                return fetchedUser;
            }
            // return null
        }
}
