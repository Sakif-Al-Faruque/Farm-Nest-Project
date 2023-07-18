import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entity/product.entity';
import { OrderEntity } from 'src/order/entity/order.entity';

@Module({
    controllers: [ProductController],
    providers: [ProductService],
    imports: [TypeOrmModule.forFeature([ProductEntity,OrderEntity])],
    exports: [ProductService],
})
export class ProductModule {}
