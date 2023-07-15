import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerEntity } from "./entity/customer.entity";
import { CustomerController } from "./customer.controller";
import { CustomerService } from "./customer.service";
import { Module } from "@nestjs/common";


@Module({
    imports: [TypeOrmModule.forFeature([CustomerEntity])],
    controllers: [CustomerController],
    providers: [CustomerService]
})
export class CustomerModule {}
