import { IsBoolean, IsEmail, IsInt, IsNotEmpty, IsNumber, IsString, Length, MinLength } from "class-validator";

export class OrderDto{

    @IsString()
    order_date: string;

    @IsBoolean()
    confirmed: boolean;

    @IsNumber()
    payable: number;

    @IsString()
    delivery_type: string;

    @IsInt()
    amount_of_unit: number;

    @IsInt()
    p_id: number;

    @IsInt()
    c_id: number;
}