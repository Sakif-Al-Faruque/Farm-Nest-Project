import { IsEmail, IsNotEmpty, IsString, IsDate, IsNumberString  } from 'class-validator';

export class reviewDto {

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    rating: string;

    @IsNotEmpty()
    review_date: string;


}