import { OrderTracking } from "src/order_tracking/order_tracking.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('delivery_man')
export class DeliveryManEntity{
    @PrimaryGeneratedColumn()
    d_id: number;

    @Column()
    email: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    gender: string;

    @Column()
    password: string;

    @Column()
    dob: string;

    @Column()
    house_no: number;

    @Column()
    road: string;

    @Column()
    area: string;

    @Column()
    police_station: string;

    @Column()
    district: string;

    @Column()
    division: string;

    @Column()
    phone_no: string;

    @Column()
    image: string;

    @Column()
    approved_by: number;

    @Column()
    account_status: string;

    //relations
    @OneToMany(() => OrderTracking, orderTrackings => orderTrackings.deliveryMan)
    orderTrackings: OrderTracking[];
}