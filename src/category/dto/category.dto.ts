import { IsNotEmpty, IsNumber, IsInt, IsString} from "class-validator";

export class CategoryDto{
    @IsString()
    caname:string
    
    @IsNumber()
    unit:number
}