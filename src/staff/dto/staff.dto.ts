import { IsNotEmpty, Length, IsEmail, IsNumber, IsString, IsBoolean, IsInt } from "class-validator";

export class StaffDto{
    // @IsInt()
    // sid:number

    @IsEmail()
    email:string

    @IsString()
    first_name:string

    @IsString()
    last_name:string

    @IsString()
    gender:string

    @Length(8)
    password:string

    @IsString()
    dob:string

    @IsNumber()
    house_no:number

    @IsString()
    road:string

    @IsString()
    area:string

    @IsString()
    police_station:string

    @IsString()
    district:string

    @IsString()
    division:string

    @IsString()
    nationality:string

    @IsString()
    phone_no:string

    image:string 
    
    @IsBoolean()
    approved_status:boolean

    @IsInt()
    approved_by:number

    @IsString()
    account_status:string
}