import { Module } from '@nestjs/common';
import { SupplierController } from './supplier.controller';
import { SupplierService } from './supplier.service';
import { SupplierAuthModule } from './supplier-auth/supplier-auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierEntity } from './enitity/supplier.entity';
import { HashingModule } from 'src/hashing/hashing.module';
import { ProductModule } from 'src/product/product.module';
import { ReviewModule } from 'src/review/review.module';

@Module({
  controllers: [SupplierController],
  providers: [SupplierService],
  imports: [
    TypeOrmModule.forFeature([SupplierEntity]), 
    HashingModule, 
    ProductModule,
    ReviewModule
  ],
  exports: [SupplierService]
})
export class SupplierModule {}
