import { IsNotEmpty, IsNumber, IsInt, IsString, IsBoolean} from "class-validator";

export class SalesReportDto{
    @IsNotEmpty()
    @IsInt()
    sale_id: number

    @IsNotEmpty()
    @IsString()
    sale_name: string

    @IsNotEmpty()
    @IsNumber()
    total_annual_income: number

    @IsNotEmpty()
    @IsNumber()
    avg_monthly_income: number

    @IsNotEmpty()
    @IsNumber()
    year: number

    @IsNotEmpty()
    @IsString()
    issue_date: string

    @IsNotEmpty()
    @IsBoolean()
    approved_status: boolean

    @IsNotEmpty()
    @IsInt()
    approved_by: number

    @IsNotEmpty()
    @IsInt()
    generated_by: number
}