import { Injectable } from '@nestjs/common';
import { StaffDto } from './dto/staff.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Staff } from './database/staff.entity'; 

let staffs = [
    {
        sid:72645,
        email:"ami@tumi.com",
        first_name:"Ami",
        last_name:"Tumi",
        gender:"male",
        password:"12345678",
        dob:"1995-09-20",
        house_no: 121,
        road: "kazi nazrul islam avenue",
        area: "karwanbazar",
        police_station: "vatara",
        district: "dhaka",
        division: "dhaka",
        nationality:"Bangladeshi",
        phone_no: "01999777777",
        image: "img1.jpg",
        approved_status:false,
        approved_by: 1140,
        account_status: "pending"
    },
    {
        sid:48237,
        email:"tumi@ami.com",
        first_name:"Tumi",
        last_name:"Ami",
        gender:"female",
        password:"12345678",
        dob:"1995-09-20",
        house_no: 121,
        road: "kazi nazrul islam avenue",
        area: "karwanbazar",
        police_station: "vatara",
        district: "dhaka",
        division: "dhaka",
        nationality:"Bangladeshi",
        phone_no: "01999777777",
        image: "img1.jpg",
        approved_status:false,
        approved_by: 1140,
        account_status: "pending"
    }
]

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
