import{ IsBoolean, IsNotEmpty, IsNumber } from "class-validator";

export class OrderTrackingDto
{
    @IsBoolean({message:"packaging should be a boolean value"})
    packaging:boolean;

    @IsNumber()
    assigned_to:number;

    @IsBoolean({message:"collected should be a boolean value"})
    collected:boolean;

    @IsBoolean({message:"running should be a boolean value"})
    running: boolean;


    @IsBoolean({message:"delivered should be a boolean value"})
    delivered: boolean;

    receiving_time:string;
}