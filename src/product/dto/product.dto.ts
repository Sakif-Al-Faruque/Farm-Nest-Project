import { IsNotEmpty, IsNumber, IsInt, IsString, IsBoolean} from "class-validator";

export class ProductDto{
    @IsNotEmpty()
    @IsInt()
    p_id: number

    @IsNotEmpty()
    @IsString()
    pname: string

    @IsNotEmpty()
    @IsNumber()
    unit_price: number

    @IsNotEmpty()
    @IsNumber()
    stock_unit: number

    @IsNotEmpty()
    @IsNumber()
    sold_unit: number

    @IsNotEmpty()
    @IsString()
    region: string

    @IsNotEmpty()
    @IsString()
    state:string

    image: string

    @IsNotEmpty()
    @IsBoolean()
    availability: boolean

    @IsNotEmpty()
    @IsString()
    last_update: string

    @IsNotEmpty()
    @IsInt()
    caid: number

    @IsNotEmpty()
    @IsBoolean()
    offer: boolean

    @IsNotEmpty()
    @IsInt()
    suid: number

    @IsNotEmpty()
    @IsInt()
    approved_by: number

    @IsNotEmpty()
    @IsString()
    account_status: string
}