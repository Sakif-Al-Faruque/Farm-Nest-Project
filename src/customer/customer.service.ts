import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerEntity } from './entity/customer.entity';
import { Repository } from 'typeorm';
import { CustomerDto } from './customerDto.dto';
import { ReviewEntity } from 'src/review/entity/review.entity';
// let customers=[
    // {
        // cid:"100",
        // email:"mehedi@gmail.com",
        // first_name:"Mehedi",
        // last_name:"Hasan",
        // gender:"Male",
        // password:"",
        // dob:2/11/2000,
        // house_no:"50",
        // road:"10",
        // area:"Nikunja",
        // police_station:"Khilkhet",
        // district:"Dhaka",
        // division:"Dhaka",
        // nationality:"Bangladeshi",
        // phone_no:"01784949487",
        // image:"",
        // total_points:"",
        // total_order:"",
        // status:""


//     },
//     {
//         cid:"101",
//         email:"ruhul@gmail.com",
//         first_name:"Ruhul",
//         last_name:"Amin",
//         gender:"Male",
//         password:"",
//         dob:2/11/2000,
//         house_no:"50",
//         road:"10",
//         area:"Paharpur",
//         police_station:"Khilkhet",
//         district:"Dinajpur",
//         division:"Rangpur",
//         nationality:"Bangladeshi",
//         phone_no:"01714514514",
//         image:"",
//         total_points:"",
//         total_order:"",
//         status:""
//     },
// ];
@Injectable()
export class CustomerService {

    constructor(
        @InjectRepository(CustomerEntity)
        private customerRepository: Repository<CustomerEntity>,
    ){}

    //create
    async create(customer: CustomerDto): Promise<CustomerEntity>{
        const newcustomer = this.customerRepository.create(customer);
        return this.customerRepository.save(newcustomer);
    }


    //search
    async findAll(): Promise<CustomerEntity[]>{
        return this.customerRepository.find();
    }

    async findOne(cid: number): Promise<CustomerEntity>{
        return this.customerRepository.findOne({ where: {cid} });
    }


    //update
    async update(cid: number, customer: CustomerDto): Promise<CustomerEntity>{
        await this.customerRepository.update(cid, customer);
        return this.customerRepository.findOne({ where: {cid} });
    }


    //delete
    async delete(cid: number): Promise<any>{
        await this.customerRepository.delete(cid);
    }
    
}

