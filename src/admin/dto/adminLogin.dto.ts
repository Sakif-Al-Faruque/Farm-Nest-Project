import { IsNotEmpty } from "class-validator";

export class adminLoginDto{

    @IsNotEmpty()
    email:string;

    @IsNotEmpty()
    password:string
}