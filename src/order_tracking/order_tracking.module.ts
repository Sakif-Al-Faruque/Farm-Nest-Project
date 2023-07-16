import { Module } from '@nestjs/common';
import { OrderTrackingController } from './order_tracking.controller';
import { OrderTrackingService } from './order_tracking.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderTracking } from './order_tracking.entity';

@Module({
  controllers: [OrderTrackingController],
  providers: [OrderTrackingService],
  imports: [TypeOrmModule.forFeature([OrderTracking])],
  exports:[OrderTrackingService]
})
export class OrderTrackingModule {}
