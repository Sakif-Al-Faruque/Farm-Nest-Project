import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('offer')
export class OfferEntity{

    @PrimaryGeneratedColumn()
    ofid: number;

    @Column()
    ofname: string;

    @Column()
    discount: string;

    @Column()
    valid_date: string;

    @Column()
    assign_date: string;
}