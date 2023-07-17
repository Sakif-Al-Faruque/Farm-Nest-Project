import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Staff } from "src/staff/database/staff.entity";
import { Admin } from "src/admin/admin.entity";

@Entity('sales_report')
export class SalesReportEntity{
    @PrimaryGeneratedColumn()
    sale_id: number

    @Column()
    sale_name:string

    @Column()
    total_annual_income:number

    @Column()
    avg_monthly_income:number

    @Column()
    year:number

    @Column()
    issue_date:string

    @Column()
    approved_status:boolean

    @Column()
    approved_by: number //fk

    @Column()
    generated_by: number //fk

    @ManyToOne(() => Admin)
    @JoinColumn({ name: 'approved_by' })
    approvedby: Admin;

    @ManyToOne(() => Staff)
    @JoinColumn({ name: 'generated_by' })
    generatedBy: Staff;
}