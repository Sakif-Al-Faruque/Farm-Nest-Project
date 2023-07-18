import { Injectable } from '@nestjs/common';
import { StaffDto } from './dto/staff.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Staff } from './database/staff.entity'; 
import { HashingService } from 'src/hashing/hashing.service';

@Injectable()
export class StaffService {
    
    constructor(@InjectRepository(Staff)
    private staffRepo: Repository<Staff>,
    private readonly hashingService: HashingService
    ){}

    async getAllStaff(): Promise<Staff[]>{
        return await this.staffRepo.find();
    }

    async getStaffById(sid: number): Promise<Staff>{
        return await this.staffRepo.findOneBy({sid});
    }

    async getStaffByEmail(email: string): Promise<Staff>{
        return await this.staffRepo.findOneBy({email});
    }

    async addStaff(staff: StaffDto): Promise<string>{
        let password = await this.hashingService.encodText(staff.password);
        const userRepo = await this.staffRepo.create({...staff, password});
        await this.staffRepo.save(userRepo);
        return 'User Added';
    }

    async removeStaff(sid: number): Promise<string>{
        await this.staffRepo.delete(sid)
        return "staff deleted";
    }

    async updateStaff(staff: StaffDto, sid: number ): Promise<string>{
        let password = await this.hashingService.encodText(staff.password);
        const userRepo = await this.staffRepo.create({...staff, password});
        await this.staffRepo.update({sid}, userRepo);
        return "staff data updated";
    }

    //ashrafee

    async approveStaff(sid:number,approved_by:number)
    {
        let approved_status = true;
        let account_status = "approved";
        let staff = await this.staffRepo.findOneBy({sid});

        return await this.staffRepo.update({sid},{...staff,approved_status,approved_by,account_status})
    }
 
}
