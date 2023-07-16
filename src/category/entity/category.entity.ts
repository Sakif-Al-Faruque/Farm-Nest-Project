import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('category')
export class CategoryEntity{
    @PrimaryGeneratedColumn()
    ca_id: number

    @Column()
    caname:string

    @Column()
    unit:number
}