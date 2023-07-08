import { Module } from '@nestjs/common';
import { SupplierController } from './supplier.controller';
import { SupplierService } from './supplier.service';
import { SupplierAuthModule } from './supplier-auth/supplier-auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierEntity } from './enitity/supplier.entity';
import { HashingModule } from 'src/hashing/hashing.module';

@Module({
  controllers: [SupplierController],
  providers: [SupplierService],
  imports: [TypeOrmModule.forFeature([SupplierEntity]), HashingModule],
  exports: [SupplierService]
})
export class SupplierModule {}
