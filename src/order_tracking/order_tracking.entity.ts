import { Column, Entity,PrimaryGeneratedColumn } from "typeorm";


@Entity({name:"Order-Trackings"})
export class OrderTracking
{
    @PrimaryGeneratedColumn({name: "Order-Tracking Id"})
    otid:number

    @Column({name:"Packaging"})
    packaging:string

    @Column({name:"Assigned To"})
    assigned:string

    @Column({name:"Collected"})
    collected:string

    @Column({name:"Running"})
    running: string


    //ei column e change ashbe.
    @Column({name:"Delivered"})
    delivered: string;

    @Column({name:"Receiving Time"})
    receiving_time:string;



} 