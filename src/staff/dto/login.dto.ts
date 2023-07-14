import { IsEmail, IsString, MinLength } from "class-validator";


export class StaffLoginDto{
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(8)
    password: string;
}