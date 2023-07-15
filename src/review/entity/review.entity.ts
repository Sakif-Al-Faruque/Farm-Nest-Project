import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

}