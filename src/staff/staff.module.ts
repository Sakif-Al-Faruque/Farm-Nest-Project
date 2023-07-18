import { Module } from '@nestjs/common';
import { StaffController } from './staff.controller';
import { StaffService } from './staff.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Staff } from './database/staff.entity';
import { HashingModule } from 'src/hashing/hashing.module';
import { SalesReportModule } from 'src/sales_report/sales_report.module';
import { SupplierModule } from 'src/supplier/supplier.module';
import { DeliveryManModule } from 'src/delivery_man/delivery_man.module';
import { ProductModule } from 'src/product/product.module';
import { ReviewModule } from 'src/review/review.module';
import { OrderTrackingModule } from 'src/order_tracking/order_tracking.module';
import { LogModule } from 'src/log/log.module';

@Module({
    controllers: [StaffController],
    providers: [StaffService],
    imports: [TypeOrmModule.forFeature([Staff]), HashingModule, SalesReportModule, SupplierModule, DeliveryManModule, ProductModule, ReviewModule, OrderTrackingModule],
    exports: [StaffService],
})
export class StaffModule {}
