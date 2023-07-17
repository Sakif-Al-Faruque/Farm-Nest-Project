import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './entity/order.entity';

@Module({
  providers: [OrderService],
  controllers: [OrderController],
  exports: [OrderService],
  imports: [TypeOrmModule.forFeature([OrderEntity])]
})
export class OrderModule {}
