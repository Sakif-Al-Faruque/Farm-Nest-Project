import { Injectable } from '@nestjs/common';


let Supplier = [
    {
        su_id: 110,
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
        su_id: 120,
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
export class SupplierService {
    getAllSuppliers(){
        return Supplier;
    }

    getSupplierById(su_id: number){
        return Supplier.find((su) => su.su_id === su_id);
    }

    addSupplier(){

    }

    removeSupplier(){

    }

    updateSupplier(){

    }
}
