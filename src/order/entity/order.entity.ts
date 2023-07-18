import { CustomerEntity } from "src/customer/entity/customer.entity";
import { ProductEntity } from "src/product/entity/product.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

    //many-to-many relationships
    @Column()
    p_id: number;

    @Column()
    c_id: number;

    @ManyToMany(()=>ProductEntity,products=>products.orders,{onDelete: 'SET NULL', onUpdate: 'CASCADE'})
    @JoinTable()
    products: ProductEntity[];


    @ManyToOne(()=>CustomerEntity,customer=>customer.orders,{onDelete: 'SET NULL', onUpdate: 'CASCADE'})
    @JoinColumn({name:'c_id', referencedColumnName:'cid'})
    customer: CustomerEntity
}