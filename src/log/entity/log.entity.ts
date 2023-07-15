import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user_logs')
export class LogEntity{
    @PrimaryGeneratedColumn()
    log_id: number;

    @Column()
    log_time: string;

    @Column()
    logout_time: string;

    @Column()
    u_email: string;
}