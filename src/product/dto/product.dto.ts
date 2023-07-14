import { IsNotEmpty, IsNumber, IsInt, IsString, IsBoolean} from "class-validator";

export class ProductDto{
    @IsString()
    pname: string

    @IsNumber()
    unit_price: number

    @IsNumber()
    stock_unit: number

    @IsNumber()
    sold_unit: number

    @IsString()
    region: string

    @IsString()
    state:string

    image: string

    @IsBoolean()
    availability: boolean

    @IsString()
    last_update: string

    @IsInt()
    ca_id: number

    @IsBoolean()
    offer: boolean

    @IsInt()
    suid: number

    @IsInt()
    approved_by: number

    @IsString()
    account_status: string
}