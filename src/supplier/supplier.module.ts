import { Module } from '@nestjs/common';
import { SupplierController } from './supplier.controller';
import { SupplierService } from './supplier.service';
import { SupplierAuthModule } from './supplier-auth/supplier-auth.module';

@Module({
  controllers: [SupplierController],
  providers: [SupplierService],
  imports: [],
  exports: [SupplierService]
})
export class SupplierModule {}
