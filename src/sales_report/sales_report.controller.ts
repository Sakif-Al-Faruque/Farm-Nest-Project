import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { SalesReportDto } from './dto/sales_report.dto';
import { SalesReportService } from './sales_report.service';

@Controller('sales_report')
export class SalesReportController {
    constructor(private salesReportService: SalesReportService){}

    @Get()
    getAllReports(){
        return this.salesReportService.getAllReports();
    }

    @Get(':sales_id')
    getSingleReport(@Param('sales_id', ParseIntPipe) id: number){
        return this.salesReportService.getSingleReport(id);
    }

    @Post()
    addReport(@Body() report: SalesReportDto){
        return this.salesReportService.addReport(report);
    }

    @Patch(':sales_id')
    updateReport(@Body() report: SalesReportDto, @Param('sales_id', ParseIntPipe) id: number){
        return this.salesReportService.updateReport(report, id);
    }

    @Delete(':sales_id')
    removeReport(@Param('sales_id', ParseIntPipe) id: number){
        return this.salesReportService.removeReport(id);
    }
}
