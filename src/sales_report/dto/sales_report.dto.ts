import { IsNotEmpty, IsNumber, IsInt, IsString, IsBoolean} from "class-validator";

export class SalesReportDto{
    @IsInt()
    sale_id: number

    @IsString()
    sale_name: string

    @IsNumber()
    total_annual_income: number

    @IsNumber()
    avg_monthly_income: number

    @IsNumber()
    year: number

    @IsString()
    issue_date: string

    @IsBoolean()
    approved_status: boolean

    @IsInt()
    approved_by: number

    @IsInt()
    generated_by: number
}