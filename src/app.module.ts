import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupplierModule } from './supplier/supplier.module';
import { DeliveryManModule } from './delivery_man/delivery_man.module';
import { LogModule } from './log/log.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [SupplierModule, DeliveryManModule, LogModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
