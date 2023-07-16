import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"Notification Box"})
export class NotificationBox{
    @PrimaryGeneratedColumn({name:"Notification Id"})
    noid:number

    @Column({name:"Task Name"})
    task_name: string;

    @Column({name:"Performed By"})
    performed_by:string;

    @Column({name:"Performed To"})
    performed_to:string;

    @Column({name:"Status"})
    status:string
    

}