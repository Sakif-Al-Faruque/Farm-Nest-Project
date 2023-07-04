import { IsNotEmpty, Length, IsEmail, IsNumber, IsDate, IsPhoneNumber } from "class-validator";

export class StaffDto{
    @IsNumber()
    sid:number

    @IsEmail()
    email:string

    @IsNotEmpty({message:'Filed Empty'})
    first_name:string

    @IsNotEmpty({message:'Filed Empty'})
    last_name:string

    @IsNotEmpty({message:'Filed Empty'})
    gender:string

    @Length(8)
    password:string

    @IsDate()
    dob:string

    @IsNumber()
    house_no:number

    @IsNotEmpty({message:'Filed Empty'})
    road:string

    @IsNotEmpty({message:'Filed Empty'})
    area:string

    @IsNotEmpty({message:'Filed Empty'})
    police_station:string

    @IsNotEmpty({message:'Filed Empty'})
    district:string

    @IsNotEmpty({message:'Filed Empty'})
    division:string

    @IsNotEmpty({message:'Filed Empty'})
    nationality:string

    @IsPhoneNumber()
    phone_no:string

    image:string    
}