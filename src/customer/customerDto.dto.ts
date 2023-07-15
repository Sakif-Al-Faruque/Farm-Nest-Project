import { IsEmail, IsNotEmpty, IsString, IsDate, IsNumberString } from 'class-validator';

export class CustomerDto {

  @IsEmail()
  email: string;

  @IsNotEmpty()
  first_name: string;

  @IsNotEmpty()
  last_name: string;

  @IsNotEmpty()
  gender: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  dob: string;

  @IsNotEmpty()
  house_no: string;

  @IsNotEmpty()
  road: string;

  @IsNotEmpty()
  area: string;

  @IsNotEmpty()
  police_station: string;

  @IsNotEmpty()
  district: string;

  @IsNotEmpty()
  division: string;

  @IsNotEmpty()
  nationality: string;

  @IsNotEmpty()
  phone_no: string;

  @IsNotEmpty()
  image: string;

  @IsNotEmpty()
  total_points: string;

  @IsNotEmpty()
  total_bonus: string;

  @IsNotEmpty()
  total_order: string;

  @IsNotEmpty()
  status: string;




}
