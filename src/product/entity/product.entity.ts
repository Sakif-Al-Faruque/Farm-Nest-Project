import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn,JoinTable, ManyToMany, OneToMany } from "typeorm";
import { CategoryEntity } from "src/category/entity/category.entity";
import { SupplierEntity } from "src/supplier/enitity/supplier.entity";
import { Staff } from "src/staff/database/staff.entity";
import { ReviewEntity } from "src/review/entity/review.entity";
import { OrderEntity } from "src/order/entity/order.entity";

@Entity('product')
export class ProductEntity{
    @PrimaryGeneratedColumn()
    p_id:number

    @Column()
    pname:string

    @Column()
    unit_price:number

    @Column()
    stock_unit:number

    @Column()
    sold_unit:number

    @Column()
    region:string

    @Column()
    state:string

    @Column()
    image:string

    @Column()
    availability:boolean

    @Column()
    last_update:string

    @Column()
    ca_id:number //fk

    @Column()
    offer:boolean

    @Column()
    su_id:number //fk

    @Column()
    approved_by:number //fk

    @Column()
    account_status:string

    @Column()
    o_id:number

    /* @ManyToOne(() => Staff)
    @JoinColumn({ name: 'approved_by' })
    approvedby: Staff;

    @ManyToOne(() => CategoryEntity)
    @JoinColumn({ name: 'ca_id' })
    category: CategoryEntity;

    @ManyToOne(() => SupplierEntity)
    @JoinColumn({ name: 'su_id' })
    supplier: SupplierEntity; */

    @OneToMany(()=>ReviewEntity, reviews => reviews.product,{onDelete: 'SET NULL', onUpdate: 'CASCADE'})
    reviews: ReviewEntity[];

    @ManyToMany(()=>OrderEntity,orders=>orders.products,{onDelete: 'SET NULL', onUpdate: 'CASCADE'})
    orders: OrderEntity[];
}