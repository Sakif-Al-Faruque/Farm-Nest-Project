import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerEntity } from './entity/customer.entity';
import { Repository } from 'typeorm';
import { CustomerDto } from './customerDto.dto';
import { ReviewEntity } from 'src/review/entity/review.entity';
import { OrderEntity } from 'src/order/entity/order.entity';
import { OrderDto } from 'src/order/dto/order.dto';
import { ProductEntity } from 'src/product/entity/product.entity';
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
        // phone_no:"",
        // image:"",
        // total_points:"",
        // total_order:"",
        // status:""


//     }
// ];
@Injectable()
export class CustomerService {

    constructor(
        @InjectRepository(CustomerEntity)
        private customerRepository: Repository<CustomerEntity>,
        @InjectRepository(OrderEntity)
        private orderRepository: Repository<OrderEntity>,
        @InjectRepository(ProductEntity)
        private productRepository: Repository<ProductEntity>,
    ){}

    //create
    async create(customer: CustomerDto): Promise<CustomerEntity>{
        const newcustomer = this.customerRepository.create(customer);
        return this.customerRepository.save(newcustomer);
    }


    //search
    async findAll(): Promise<CustomerEntity[]>{
        return this.customerRepository.find({relations:['orders']});
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

    //features

    //order the products
    async orderProduct(cid:number, p_id:number, order:OrderDto): Promise<any>{
       const product = await this.productRepository.findOneBy({p_id});
       const customer = await this.customerRepository.findOneBy({cid});

       let ord = await this.orderRepository.create(order);
       ord.customer = customer;
       ord.products = [product];
       ord.p_id = p_id;
       await this.orderRepository.save(ord);
    }

    //cancel order
    async cancelOrder(o_id:number): Promise<any>{
        const order = await this.orderRepository.delete(o_id);
    }



    
}

