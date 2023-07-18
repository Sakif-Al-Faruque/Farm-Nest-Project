import { Module } from '@nestjs/common';
import { NotificationBoxController } from './notification_box.controller';
import { NotificationBoxService } from './notification_box.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationBox } from './notification_box.entity';

@Module({
  controllers: [NotificationBoxController],
  providers: [NotificationBoxService],
  imports:[TypeOrmModule.forFeature([NotificationBox])],
  exports:[NotificationBoxService]
})
export class NotificationBoxModule {}
