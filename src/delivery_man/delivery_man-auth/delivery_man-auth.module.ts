import { Module } from '@nestjs/common';
import { DeliveryManAuthController } from './delivery_man-auth.controller';
import { DeliveryManAuthService } from './delivery_man-auth.service';
import { DeliveryManModule } from '../delivery_man.module';
import { HashingModule } from 'src/hashing/hashing.module';
import { LogModule } from 'src/log/log.module';

@Module({
  controllers: [DeliveryManAuthController],
  providers: [DeliveryManAuthService],
  imports: [DeliveryManModule, HashingModule, LogModule]
})
export class DeliveryManAuthModule {}
