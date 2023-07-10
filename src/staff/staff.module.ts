import { Module } from '@nestjs/common';
import { StaffController } from './staff.controller';
import { StaffService } from './staff.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Staff } from './database/staff.entity';

@Module({
    controllers: [StaffController],
    providers: [StaffService],
    imports: [TypeOrmModule.forFeature([Staff])],
    exports: [StaffService],
})
export class StaffModule {}
