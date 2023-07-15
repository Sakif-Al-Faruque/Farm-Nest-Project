import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"Admins"})
export class Admin
{
    @PrimaryGeneratedColumn({name: "Admin Id"})
    aid:number

    @Column({name: "First Name"})
    first_name:string

    @Column({name: "Last Name"})
    last_name:string

    @Column({name: "Email"})
    email:string

    @Column({name:"Gender"})
    gender:string

    @Column({name:"Password"})
    password:string

    @Column({name:"Date of Birth"})
    dob:string

    @Column({name:"House No"})
    house_no:number

    @Column({name:"Road"})
    road:number

    @Column({name:"Area"})
    area:string

    @Column({name:"Police Station"})
    ploice_station:string

    @Column({name:"District"})
    district:string

    @Column({name:"Division"})
    division:string

    @Column({name:"Phone no"})
    phone_no:number

    @Column({name:"Image"})
    image:string

}

