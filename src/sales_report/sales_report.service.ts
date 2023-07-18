import { Injectable } from '@nestjs/common';
import { SalesReportDto } from './dto/sales_report.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SalesReportEntity } from './entity/sales_report.entity';
import { Repository } from 'typeorm';

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

    //ashrafee
    //jhamela ase ... sokale dekhte hobe 

    async approveReport(sale_id:number,approved_by:number):Promise<any>
    {
        let approved_status = true;
        const report = await this.salesReportRepository.findOneBy({sale_id})
        return await this.salesReportRepository.update({sale_id},{...report,approved_status,approved_by})
    }
}