import { Module } from '@nestjs/common';
import { DeliveryManController } from './delivery_man.controller';
import { DeliveryManService } from './delivery_man.service';

@Module({
  controllers: [DeliveryManController],
  providers: [DeliveryManService]
})
export class DeliveryManModule {}
