import { Module } from '@nestjs/common';
import { StaffController } from './staff.controller';
import { StaffService } from './staff.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Staff } from './database/staff.entity';
import { HashingModule } from 'src/hashing/hashing.module';

@Module({
    controllers: [StaffController],
    providers: [StaffService],
    imports: [TypeOrmModule.forFeature([Staff]), HashingModule],
    exports: [StaffService],
})
export class StaffModule {}
