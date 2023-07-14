import { Injectable } from '@nestjs/common';
import { SalesReportDto } from './dto/sales_report.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SalesReportEntity } from './entity/sales_report.entity';
import { Repository } from 'typeorm';

let sales_reports = [
    {
        sale_id: 28462,
        sale_name: "Dairy Milk",
        total_annual_income: 1200000,
        avg_monthly_income: 100000,
        year: 2023,
        issue_date: "2023-06-26 18:31",
        approved_status: true,
        approved_by: 28247,
        generated_by: 12871
    },
    {
        sale_id: 9372,
        sale_name: "Beef Meat",
        total_annual_income: 2400000,
        avg_monthly_income: 200000,
        year: 2022,
        issue_date: "2022-06-26 18:31",
        approved_status: true,
        approved_by: 42492,
        generated_by: 28437
    }
]

@Injectable()
export class SalesReportService {

    constructor(
        @InjectRepository(SalesReportEntity)
        private salesReportRepository: Repository<SalesReportEntity>
    ){}

    async getAllReports(): Promise<SalesReportEntity[]>{
        return await this.salesReportRepository.find()
    }

    async getSingleReport(sale_id: number): Promise<SalesReportEntity>{
        return await this.salesReportRepository.findOneBy({sale_id})
    }

    async addReport(report: SalesReportDto): Promise<string>{
        await this.salesReportRepository.save(report)
        return "sales_report added"
    }

    async updateReport(report: SalesReportDto, sale_id: number): Promise<string>{
        await this.salesReportRepository.update({sale_id}, {...report})
        return "sales_report updated"
    }

    async removeReport(sale_id: number): Promise<string>{
        await this.salesReportRepository.delete({sale_id})
        return "sales_report deleted"
    }
}