import { Injectable } from '@nestjs/common';
import { OrderDto } from './dto/order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from './entity/order.entity';
import { Repository } from 'typeorm';

let Order = [
    {
        o_id: 1109388,
        order_date: "2023-06-26 18:31",
        confirmed: "true",
        payable: 120,
        delivery_type: "cod",
        amount_of_unit: 4,
        p_id: 8383,
        c_id: 180
    },
    {
        o_id: 1109390,
        order_date: "2023-06-26 18:31",
        confirmed: "true",
        payable: 120,
        delivery_type: "online",
        amount_of_unit: 5,
        p_id: 8384,
        c_id: 190
    }
];
@Injectable()
export class OrderService {

    constructor(
        @InjectRepository(OrderEntity)
        private readonly orderRepo: Repository<OrderEntity>
    ){}
    async getAllOrders(): Promise<OrderEntity[]>{
        return await this.orderRepo.find();
    }

    async getOrderById(o_id: number): Promise<OrderEntity>{
        return await this.orderRepo.findOneBy({o_id});
    }

    async addOrder(ord: OrderDto): Promise<OrderEntity>{
        return await this.orderRepo.save(ord);
        
    }

    async removeOrder(o_id: number): Promise<any>{
        return await this.orderRepo.delete({o_id});
    }

    async updateOrder(ordu: OrderDto, o_id: number ): Promise<any>{
        return await this.orderRepo.update({o_id}, {...ordu});

    }

    //show order by customer id
    async showOrderByCustomerId(c_id: number): Promise<any>{
        return await this.orderRepo.findBy({c_id});
    }
    
}
