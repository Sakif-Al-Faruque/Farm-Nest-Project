import { IsEmail, IsInt, IsNotEmpty, IsNumber, IsString, Length, MinLength } from "class-validator";


export class DeliveryManLoginDto{
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(8)
    password: string;
}