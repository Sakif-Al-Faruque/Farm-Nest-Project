import { Module } from '@nestjs/common';
import { OrderTrackingController } from './order_tracking.controller';
import { OrderTrackingService } from './order_tracking.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderTracking } from './order_tracking.entity';
import { DeliveryManEntity } from 'src/delivery_man/enitity/delivery_man.entity';

@Module({
  controllers: [OrderTrackingController],
  providers: [OrderTrackingService],
  imports: [TypeOrmModule.forFeature([OrderTracking, DeliveryManEntity])],
  exports:[OrderTrackingService]
})
export class OrderTrackingModule {}
