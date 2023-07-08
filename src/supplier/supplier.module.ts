import { Module } from '@nestjs/common';
import { SupplierController } from './supplier.controller';
import { SupplierService } from './supplier.service';
import { SupplierAuthModule } from './supplier-auth/supplier-auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierEntity } from './enitity/supplier.entity';

@Module({
  controllers: [SupplierController],
  providers: [SupplierService],
  imports: [TypeOrmModule.forFeature([SupplierEntity])],
  exports: [SupplierService]
})
export class SupplierModule {}
