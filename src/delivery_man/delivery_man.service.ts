import { Injectable } from '@nestjs/common';
import { DeliveryManDto } from './dto/delivery_man.dto';


let Delivery_man = [
    {
        d_id: 110,
        email: "john@g.co",
        first_name: "john",
        last_name: "shoe",
        gender: "male",
        password: "12345678",
        dob: "1995-09-20",
        house_no: 121,
        road: "kazi nazrul islam avenue",
        area: "karwanbazar",
        police_station: "vatara",
        district: "dhaka",
        division: "dhaka",
        phone_no: "01999777777",
        image: "img1.jpg",
        approved_by: 1140,
        account_status: "pending"
    },
    {
        d_id: 120,
        email: "bob@g.co",
        first_name: "bob",
        last_name: "bro",
        gender: "male",
        password: "87654321",
        dob: "1992-03-29",
        house_no: 122,
        road: "kazi nazrul islam avenue",
        area: "mirpur",
        police_station: "kafrul",
        district: "dhaka",
        division: "dhaka",
        phone_no: "01388999999",
        image: "img2.jpg",
        approved_by: 1150,
        account_status: "approved"
    },
];
@Injectable()
export class DeliveryManService {
    getAllDeliveryMan(){
        return Delivery_man;
    }

    getDeliveryManById(d_id: number){
        return Delivery_man.find((dm) => dm.d_id === d_id);
    }

    getDeliveryManByEmail(email: string){
        return Delivery_man.find((dm) => dm.email === email);
    }

    addDeliveryMan(dm: DeliveryManDto){
        Delivery_man.push(dm);
        return 'User Added';
    }

    removeDeliveryMan(d_id: number){
        Delivery_man = Delivery_man.filter((dm) => dm.d_id != d_id);
        return Delivery_man;
    }

    updateDeliveryMan(dmu: DeliveryManDto, d_id: number ){
        let userIndex = 0;
        Delivery_man.forEach((dm, index)=>{
            if(dm.d_id == d_id){
                userIndex = index;
            }
        });

        Delivery_man[userIndex] = dmu;
        return Delivery_man;
    }
}
