import { Module } from '@nestjs/common';
import { DeliveryManController } from './delivery_man.controller';
import { DeliveryManService } from './delivery_man.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryManEntity } from './enitity/delivery_man.entity';
import { HashingModule } from 'src/hashing/hashing.module';

@Module({
  controllers: [DeliveryManController],
  providers: [DeliveryManService],
  imports: [TypeOrmModule.forFeature([DeliveryManEntity]), HashingModule],
  exports: [DeliveryManService]
})
export class DeliveryManModule {}
