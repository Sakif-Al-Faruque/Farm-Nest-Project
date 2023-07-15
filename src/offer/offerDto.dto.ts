import { IsEmail, IsNotEmpty, IsString, IsDate, IsNumberString  } from 'class-validator';

export class offerDto {

    @IsNotEmpty()
    ofname: string;

    @IsNotEmpty()
    discount: string;

    @IsNotEmpty()
    valid_date: string;

    @IsNotEmpty()
    assign_date: string;

}