import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StaffController } from './staff/staff.controller';
import { StaffService } from './staff/staff.service';
import { StaffModule } from './staff/staff.module';

@Module({
  imports: [StaffModule],
  controllers: [AppController, StaffController],
  providers: [AppService, StaffService],
})
export class AppModule {}
