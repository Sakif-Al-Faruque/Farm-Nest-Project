import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaffController } from './staff/staff.controller';
import { StaffService } from './staff/staff.service';
import { StaffModule } from './staff/staff.module';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { CategoryModule } from './category/category.module';
import { SalesReportController } from './sales_report/sales_report.controller';
import { SalesReportService } from './sales_report/sales_report.service';
import { SalesReportModule } from './sales_report/sales_report.module';

@Module({
  imports: [StaffModule, CategoryModule, SalesReportModule],
  controllers: [AppController, StaffController, CategoryController, SalesReportController],
  providers: [AppService, StaffService, CategoryService, SalesReportService],
})
export class AppModule {}
