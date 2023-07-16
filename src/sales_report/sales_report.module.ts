import { Module } from '@nestjs/common';
import { SalesReportController } from './sales_report.controller';
import { SalesReportService } from './sales_report.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesReportEntity } from './entity/sales_report.entity';

@Module({
    controllers: [SalesReportController],
    providers: [SalesReportService],
    imports: [TypeOrmModule.forFeature([SalesReportEntity])],
    exports: [SalesReportService]
})
export class SalesReportModule {}
