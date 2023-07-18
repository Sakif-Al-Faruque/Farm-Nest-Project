import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderTracking } from './order_tracking.entity';
import { Repository } from 'typeorm';
import { OrderTrackingDto } from './dto/order_tracking.dto';

@Injectable()
export class OrderTrackingService {

    constructor(@InjectRepository(OrderTracking)
    private orderTrackingRepo:Repository<OrderTracking>
    ) {}


    async addOrdertrack(obj:OrderTrackingDto):Promise<OrderTracking>
    {
        const add = await this.orderTrackingRepo.save(obj);

        
            return add;
        
    }

    async deleteOrderTrack(otid:number):Promise<any>
    {
        const del = await this.orderTrackingRepo.delete(otid)

        if(!del)
        {
            return "Delete Failed";
        }
        else
        {
            return "order track deleted!"
        }
    }

    async updateOrderTrack(ot_id:number, obj:OrderTrackingDto): Promise<any>
    {
        const up = await this.orderTrackingRepo.update({ot_id}, {...obj})

        if(!up)
        {
            return "Update Failed"
        }

        else
        {
            return "Updated!"
        }
    }


    async getAllOrderTracking() : Promise<any>
    {
        return await this.orderTrackingRepo.find();
    }

    async getOrderTrackinById(ot_id:number):Promise<any>
    {
        const track = await this.orderTrackingRepo.findOneBy({ot_id});
        if(!track)
        {
            return "Could not find id!";
        }

        else
        {
            return track;
        }
    }

    async showAllOrdersByDeliveryMan(assigned_to: number): Promise<any>{
        return await this.orderTrackingRepo.findBy({assigned_to});
    }

    // order tracking by customer id
    async orderTrackingByCustomerId(c_id:number): Promise<any>{
        return await this.orderTrackingRepo.findBy({c_id});
    }

}
