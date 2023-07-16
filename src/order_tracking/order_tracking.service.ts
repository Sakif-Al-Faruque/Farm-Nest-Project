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


    async addOrdertrack(obj:OrderTrackingDto):Promise<any>
    {
        const add = await this.orderTrackingRepo.save(obj);

        if(!add)
        {
            return "Could not add new order track"
        }

        else
        {
            return "Added";
        }
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

    async updateOrderTrack(otid:number,obj:OrderTrackingDto): Promise<any>
    {
        const up = await this.orderTrackingRepo.update({otid},{...obj})

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

    async getOrderTrackinById(otid:number):Promise<any>
    {
        const track = await this.orderTrackingRepo.findOneBy({otid});
        if(!track)
        {
            return "Could not find id!";
        }

        else
        {
            return track;
        }
    }

    

}
