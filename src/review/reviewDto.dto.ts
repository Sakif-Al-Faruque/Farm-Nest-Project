import { IsEmail, IsNotEmpty, IsString, IsDate, IsNumberString, IsNumber, IsInt, IsIn  } from 'class-validator';

export class ReviewDto {

    @IsString()
    description: string;

    @IsNumber()
    rating: string;

    @IsString()
    review_date: string;

    @IsInt()
    cid: number

    @IsInt()
    pid: number

    @IsString()
    approval: string

    @IsInt()
    approved_by: number

}