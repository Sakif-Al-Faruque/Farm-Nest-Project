import { Module } from '@nestjs/common';
import { SalesReportController } from './sales_report.controller';
import { SalesReportService } from './sales_report.service';

@Module({
    controllers: [SalesReportController],
    providers: [SalesReportService],
})
export class SalesReportModule {}
