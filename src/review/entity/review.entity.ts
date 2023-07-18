import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Staff } from "src/staff/database/staff.entity";
import { ProductEntity } from "src/product/entity/product.entity";
import { CategoryEntity } from "src/category/entity/category.entity";

@Entity('review')
export class ReviewEntity{

    @PrimaryGeneratedColumn()
    rid: number;

    @Column()
    description: string;

    @Column()
    rating: string;

    @Column()
    review_date: string;

    @Column()
    cid: number

    @Column()
    pid: number

    @Column()
    approval: string

    @Column()
    approved_by: number

    /* @ManyToOne(() => Staff)
    @JoinColumn({ name: 'approved_by' })
    approvedby: Staff; */

    /* @ManyToOne(() => ProductEntity)
    @JoinColumn({ name: 'pid' })
    product: ProductEntity; */

    /* @ManyToOne(() => CategoryEntity)
    @JoinColumn({ name: 'cid' })
    category: CategoryEntity; */

    @ManyToOne(() => ProductEntity, product => product.reviews, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    @JoinColumn({name: 'pid', referencedColumnName: 'p_id'})
    product: ProductEntity;
}