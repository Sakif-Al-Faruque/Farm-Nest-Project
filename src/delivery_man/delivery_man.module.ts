import { Module } from '@nestjs/common';
import { DeliveryManController } from './delivery_man.controller';
import { DeliveryManService } from './delivery_man.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryManEntity } from './enitity/delivery_man.entity';
import { HashingModule } from 'src/hashing/hashing.module';
import { OrderTrackingModule } from 'src/order_tracking/order_tracking.module';

@Module({
  controllers: [DeliveryManController],
  providers: [DeliveryManService],
  imports: [
    TypeOrmModule.forFeature([DeliveryManEntity]), 
    HashingModule,
    OrderTrackingModule
  ],
  exports: [DeliveryManService]
})
export class DeliveryManModule {}
