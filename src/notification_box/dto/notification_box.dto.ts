import{ IsNotEmpty } from "class-validator"

export class NotificationBoxDto{

    @IsNotEmpty({message:"Please enter notification id"})
    noid:number
    
    @IsNotEmpty({message:"Please enter task name"})
    task_name:string

    @IsNotEmpty({message:"Please enter performed by"})
    performed_by:string

    @IsNotEmpty({message:"Please enter performed to"})
    performed_to:string

    @IsNotEmpty({message:"Please enter status"})
    status:string
}