import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotificationBox } from './notification_box.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NotificationBoxService {
    constructor(
        @InjectRepository(NotificationBox)
        private notificationRepo:Repository<NotificationBox>
    ){}

    async addNotification(obj:NotificationBox):Promise<any>
    {
        const add = await this.notificationRepo.save(obj);

        if(!add)
        {
            return "Add notification failed!"
        }
        else
        {
            return "Notification Added"
        }
    }

    async updateNotification(obj:NotificationBox,noid:number):Promise<any>
    {
        const up = await this.notificationRepo.update({noid},{...obj});

        if(!up)
        {
            return "Update Failed!";
        }

        else
        {
            return "Update Successfull";
        }
    }

    async deleteNotification(id:number):Promise<any>
    {
        const del = await this.notificationRepo.delete(id)

        if(!del)
        {
            return "Delete Failed"
        }

        else
        {
            return "Notification Deleted!"
        }
    }

    async getAllNotification():Promise<any>
    {
        const all = await this.notificationRepo.find()

        if(!all)
        {
            return "Fetching Failed!"
        }

        else
        {
            return all;
        }
    }

    async getNotificationById(noid:number):Promise<any>
    {
        const get = await this.notificationRepo.findOneBy({noid});

        if(!get)
        {
            return "Fetch Failed!"
        }

        else
        {
            return get;
        }
    }
}
