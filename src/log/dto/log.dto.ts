import { IsEmail, IsInt, IsNotEmpty, IsNumber, IsString, Length, MinLength } from "class-validator";

export class LogDto{
    @IsNotEmpty()
    @IsInt()
    log_id: number;

    @IsString()
    log_time: string;

    @IsString()
    logout_time: string;

    @IsInt()
    uid: number;
}