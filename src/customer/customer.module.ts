import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerEntity } from "./entity/customer.entity";
import { CustomerController } from "./customer.controller";
import { CustomerService } from "./customer.service";
import { Module } from "@nestjs/common";
import { ProductModule } from "src/product/product.module";
import { OrderEntity } from "src/order/entity/order.entity";
import { ProductEntity } from "src/product/entity/product.entity";
import { OrderService } from "src/order/order.service";
import { OrderModule } from "src/order/order.module";
import { OrderTrackingModule } from "src/order_tracking/order_tracking.module";


@Module({
    imports: [TypeOrmModule.forFeature([CustomerEntity,OrderEntity,ProductEntity]),ProductModule,OrderModule,OrderTrackingModule],
    controllers: [CustomerController],
    providers: [CustomerService]
})
export class CustomerModule {}
