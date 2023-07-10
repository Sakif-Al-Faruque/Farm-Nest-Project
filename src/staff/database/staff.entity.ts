import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Staff{
    @PrimaryGeneratedColumn()
    sid:number
    @Column()
    email:string

    @Column()
    first_name:string

    @Column()
    last_name:string

    @Column()
    gender:string

    @Column()
    password:string

    @Column()
    dob:string

    @Column()
    house_no:number

    @Column()
    road:string

    @Column()
    area:string

    @Column()
    police_station:string

    @Column()
    district:string

    @Column()
    division:string

    @Column()
    nationality:string

    @Column()
    phone_no:string

    image:string 
    
    @Column()
    approved_status:boolean

    @Column()
    approved_by:number

    @Column()
    account_status:string
}