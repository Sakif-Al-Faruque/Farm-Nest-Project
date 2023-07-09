import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminAuthModule } from './admin-auth/admin-auth.module';

@Module({
  controllers: [AdminController],
  imports: [AdminAuthModule]
})
export class AdminModule {}
