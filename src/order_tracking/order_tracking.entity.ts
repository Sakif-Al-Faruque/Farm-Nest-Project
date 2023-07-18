import { join } from "path";
import { CustomerEntity } from "src/customer/entity/customer.entity";
import { DeliveryManEntity } from "src/delivery_man/enitity/delivery_man.entity";
import { OrderEntity } from "src/order/entity/order.entity";
import { Column, Entity,JoinColumn,ManyToOne,OneToOne,PrimaryGeneratedColumn } from "typeorm";


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

    @Column()
    c_id:number;

    //ei column e change ashbe.
    @Column()
    delivered: boolean;

    @Column()
    receiving_time:string;

    @Column()
    o_id:number

    @OneToOne(() => OrderEntity,obj=>obj.o_id)
    @JoinColumn({name:"o_id",referencedColumnName:"o_id"})
    order:OrderEntity;

    @ManyToOne(() => CustomerEntity, customer => customer.cid, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    @JoinColumn({name:"cid",referencedColumnName:"cid"})
    customer:CustomerEntity

    //relations
    @ManyToOne(() => DeliveryManEntity, deliveryMan => deliveryMan.orderTrackings, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    @JoinColumn({name: 'assigned_to', referencedColumnName: 'd_id'})
    deliveryMan: DeliveryManEntity;

} 