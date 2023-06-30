import { Module } from '@nestjs/common';
import { SupplierAuthController } from './supplier-auth.controller';
import { SupplierAuthService } from './supplier-auth.service';
import { SupplierModule } from '../supplier.module';

@Module({
  imports: [SupplierModule],
  controllers: [SupplierAuthController],
  providers: [SupplierAuthService]
})
export class SupplierAuthModule {}
