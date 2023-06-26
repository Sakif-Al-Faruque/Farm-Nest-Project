import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupplierModule } from './supplier/supplier.module';
import { DeliveryManModule } from './delivery_man/delivery_man.module';

@Module({
  imports: [SupplierModule, DeliveryManModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
