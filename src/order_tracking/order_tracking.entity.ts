import { Column, Entity,PrimaryGeneratedColumn } from "typeorm";


@Entity({name:"Order_Trackings"})
export class OrderTracking
{
    @PrimaryGeneratedColumn()
    ot_id:number

    @Column()
    packaging:boolean;

    @Column()
    assigned_to:number;

    @Column()
    collected:boolean;

    @Column()
    running: boolean;


    //ei column e change ashbe.
    @Column()
    delivered: boolean;

    @Column()
    receiving_time:string;



} 