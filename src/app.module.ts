import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupplierModule } from './supplier/supplier.module';
import { DeliveryManModule } from './delivery_man/delivery_man.module';
import { LogModule } from './log/log.module';
import { OrderModule } from './order/order.module';
import { SupplierAuthModule } from './supplier/supplier-auth/supplier-auth.module';
import { DeliveryManAuthModule } from './delivery_man/delivery_man-auth/delivery_man-auth.module';
import { StaffModule } from './staff/staff.module';
import { CategoryModule } from './category/category.module';
import { SalesReportModule } from './sales_report/sales_report.module';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Staff } from './staff/database/staff.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'dekhona',
      database: 'mydb',
      entities: [Staff],
      synchronize: true,
    }),
    SupplierModule, DeliveryManModule, LogModule, OrderModule, SupplierAuthModule, DeliveryManAuthModule, StaffModule, CategoryModule, SalesReportModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
