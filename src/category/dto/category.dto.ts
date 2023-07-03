import { IsNotEmpty, IsNumber, IsInt, IsString} from "class-validator";

export class CategoryDto{
    @IsNotEmpty()
    @IsInt()
    ca_id:number

    @IsNotEmpty()
    @IsString()
    caname:string
    
    @IsNotEmpty()
    @IsNumber()
    unit:number
}