import { IsEmail, IsInt, IsNotEmpty, IsNumber, IsString, Length, MinLength } from "class-validator";

export class LogDto{
    @IsString()
    log_time: string;

    @IsString()
    logout_time: string;

    @IsString()
    u_email: string;
}