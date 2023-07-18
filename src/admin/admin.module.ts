import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { Admin } from './admin.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesReportModule } from 'src/sales_report/sales_report.module';
import { StaffModule } from 'src/staff/staff.module';


@Module({
  controllers: [AdminController],
  providers: [AdminService],
  imports: [TypeOrmModule.forFeature([Admin]),SalesReportModule,StaffModule],
  exports:[AdminService]
})
export class AdminModule {}
