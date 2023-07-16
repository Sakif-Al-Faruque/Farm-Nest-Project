import { Module } from '@nestjs/common';
import { StaffAuthController } from './staff-auth.controller';
import { StaffAuthService } from './staff-auth.service';
import { StaffModule } from '../staff.module';
import { HashingModule } from 'src/hashing/hashing.module';

@Module({
    imports: [StaffModule, HashingModule],
    controllers: [StaffAuthController],
    providers: [StaffAuthService]
})
export class StaffAuthModule {}
