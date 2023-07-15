import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('customer')
export class CustomerEntity{

  @PrimaryGeneratedColumn()
  cid: number;

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
  house_no: string;

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
  nationality: string;

  @Column()
  phone_no: string;

  @Column()
  image: string;

  @Column()
  total_points: string;

  @Column()
  total_bonus: string;

  @Column()
  status: string;




}