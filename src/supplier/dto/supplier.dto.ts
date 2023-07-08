import { IsEmail, IsInt, IsNotEmpty, IsNumber, IsString, Length, MinLength } from "class-validator";

export class SupplierDto{
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @Length(1, 50)
    first_name: string;

    @IsString()
    @Length(1, 50)
    last_name: string;

    @IsString()
    @Length(4, 6)
    gender: string;

    @IsString()
    @MinLength(8)
    password: string;

    @IsString()
    dob: string;

    @IsInt()
    house_no: number;

    @IsString()
    road: string;

    @IsString()
    area: string;

    @IsString()
    police_station: string;

    @IsString()
    district: string;

    @IsString()
    division: string;

    @Length(11, 11)
    phone_no: string;

    @IsString()
    image: string;

    @IsInt()
    approved_by: number;

    @IsString()
    account_status: string;
}