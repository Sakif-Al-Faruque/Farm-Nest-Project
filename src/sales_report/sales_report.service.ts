import { Injectable } from '@nestjs/common';
import { SalesReportDto } from './dto/sales_report.dto';

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
    getAllReports(){
        return sales_reports;
    }

    getSingleReport(sale_id: number){
        return sales_reports.find((report) => report.sale_id === sale_id);
    }

    addReport(report: SalesReportDto){
        sales_reports.push(report);
        return sales_reports;
    }

    updateReport(report: SalesReportDto, sale_id: number){
        let userIndex = 0;
        sales_reports.forEach((report, index)=>{
            if(report.sale_id == sale_id){
                userIndex = index;
            }
        });

        sales_reports[userIndex] = report;
        return sales_reports;
    }

    removeReport(sale_id: number){
        sales_reports = sales_reports.filter((report) => report.sale_id != sale_id);
        return sales_reports;
    }
}