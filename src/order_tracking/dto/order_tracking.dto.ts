import{ IsNotEmpty } from "class-validator";

export class OrderTrackingDto
{
    
    @IsNotEmpty({message:"Order-tracking id is needed"})
    otid:number

    @IsNotEmpty({message:"packaging is required"})
    packaging:string

    @IsNotEmpty({message:"Delivery Man Needed"})
    assigned:string;

    @IsNotEmpty({message:"Collection Needed"})
    collected:string

    @IsNotEmpty({message:"Running details needed"})
    running: string


    @IsNotEmpty({message:"Delivered Data Needed"})
    delivered: string;

    @IsNotEmpty({message:"Time of receive needed"})
    receiving_time:string;
}