import { Injectable } from '@nestjs/common';
import { StaffDto } from './dto/staff.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Staff } from './database/staff.entity'; 

@Injectable()
export class StaffService {
    
    constructor(@InjectRepository(Staff)
    private staffRepo: Repository<Staff>){}

    async getAllStaff(): Promise<any>{
        return this.staffRepo.find();
    }

    async getStaffById(sid: number): Promise<any>{
        return this.staffRepo.findOneBy({sid});
    }

    // async getStaffByEmail(email: string): Promise<any>{
    //     return staffs.find((staff) => staff.email === email);
    // }

    async addStaff(staff: StaffDto): Promise<any>{
        this.staffRepo.save(staff);
        return 'User Added';
    }

    async removeStaff(sid: number): Promise<any>{
        this.staffRepo.delete(sid)
        return "staff deleted";
    }

    async updateStaff(staff: StaffDto, sid: number ): Promise<any>{
        this.staffRepo.update({sid}, {...staff});
        return "staff data updated";
    }
}
