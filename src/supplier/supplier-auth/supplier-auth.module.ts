import { Module } from '@nestjs/common';
import { SupplierAuthController } from './supplier-auth.controller';
import { SupplierAuthService } from './supplier-auth.service';
import { SupplierModule } from '../supplier.module';
import { HashingModule } from 'src/hashing/hashing.module';

@Module({
  imports: [SupplierModule, HashingModule],
  controllers: [SupplierAuthController],
  providers: [SupplierAuthService]
})
export class SupplierAuthModule {}
