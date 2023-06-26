import { IsEmail, IsInt, IsNotEmpty, IsNumber, IsString, Length, MinLength } from "class-validator";

export class OrderDto{
    @IsNotEmpty()
    @IsInt()
    o_id: number;

    @IsString()
    order_date: string;

    @IsString()
    confirmed: string;

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