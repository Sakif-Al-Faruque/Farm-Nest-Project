import { Module } from '@nestjs/common';
import { StaffController } from './staff.controller';
import { StaffService } from './staff.service';

@Module({
    controllers: [StaffController],
    providers: [StaffService],
    imports: [],
    exports: [StaffService],
})
export class StaffModule {}
