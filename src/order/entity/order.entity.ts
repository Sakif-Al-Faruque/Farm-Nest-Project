import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('order')
export class OrderEntity{
    @PrimaryGeneratedColumn()
    o_id: number;

    @Column()
    order_date: string;

    @Column()
    confirmed: boolean;

    @Column()
    payable: number;

    @Column()
    delivery_type: string;

    @Column()
    amount_of_unit: number;

    @Column()
    p_id: number;

    @Column()
    c_id: number;
}