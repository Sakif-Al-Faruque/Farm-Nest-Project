import { Injectable } from '@nestjs/common';
import { StaffDto } from './dto/staff.dto';

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
    getAllStaff(){
        return staffs;
    }

    getStaffById(sid: number){
        return staffs.find((staff) => staff.sid === sid);
    }

    getStaffByEmail(email: string){
        return staffs.find((staff) => staff.email === email);
    }

    addStaff(staff: StaffDto){
        staffs.push(staff);
        return 'User Added';
    }

    removeStaff(sid: number){
        staffs = staffs.filter((staff) => staff.sid != sid);
        return staffs;
    }

    updateStaff(staff: StaffDto, sid: number ){
        let userIndex = 0;
        staffs.forEach((staff, index)=>{
            if(staff.sid == sid){
                userIndex = index;
            }
        });

        staffs[userIndex] = staff;
        return staffs;
    }
}
