import { IsEmail, IsNotEmpty, IsNumber, Length, MinLength} from "class-validator";
export class adminDto
{
    @IsNumber()
    aid:number;

    @IsNotEmpty({message:"Name cannot be empty"})
    first_name: string;

    @IsNotEmpty({message:"Name cannot be empty"})
    last_name: string;

    @IsEmail()
    email:string;

    @IsNotEmpty({message:"Gender cannot be empty"})
    gender:string;

    @IsNotEmpty({message:"Password cannot be empty"})
    @MinLength(8,{message:"Password should be of 8 characters"})
    password:string;

    @IsNotEmpty({message:"Date of birth cannot be empty"})
    dob: string;

    @IsNotEmpty({message:"House cannot be empty"})
    house_no:string;

    @IsNotEmpty({message:"road cannot be empty"})
    road:string;

    @IsNotEmpty({message:"Police station name is required"})
    police_station:string

    @IsNotEmpty({message:"District filed is empty"})
    district: string;

    @IsNotEmpty({message:"Division field is empty"})
    division: string;

    @IsNotEmpty({message:"Phone Number Cannot be empty!"})
    @Length(11)
    phone_no:string;

    image:string;
}