import { DeliveryManEntity } from "src/delivery_man/enitity/delivery_man.entity";
import { Column, Entity,JoinColumn,ManyToOne,PrimaryGeneratedColumn } from "typeorm";


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

    @Column()
    o_id:number;

    @Column()
    c_id:number;


    //relations
    @ManyToOne(() => DeliveryManEntity, deliveryMan => deliveryMan.orderTrackings, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    @JoinColumn({name: 'assigned_to', referencedColumnName: 'd_id'})
    deliveryMan: DeliveryManEntity;

} 