import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { NotificationBoxService } from './notification_box.service';
import { NotificationBoxDto } from './dto/notification_box.dto';

@Controller('notification-box')
export class NotificationBoxController {

    constructor(private notificationService: NotificationBoxService) {}

    @Get()
    getAllNotification()
    {
       return this.notificationService.getAllNotification(); 
    }

    @Get(":noid")
    getNotificationById(@Param("noid",ParseIntPipe)id:number)
    {
        return this.getNotificationById(id);        
    }

    @Post("add-notification")
    addNotification(@Body() obj:NotificationBoxDto)
    {
        return this.notificationService.addNotification(obj)
    }

    @Patch("update-notification/:noid")
    updateNotification(@Body() obj:NotificationBoxDto,@Param("noid",ParseIntPipe)id:number)
    { 
        return this.notificationService.updateNotification(obj,id)  
    }

    @Delete(":id")
    deletenotification(@Param("id",ParseIntPipe)id:number)
    {
        return this.notificationService.deleteNotification(id)
    }
}
