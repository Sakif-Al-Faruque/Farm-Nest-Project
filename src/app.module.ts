import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupplierModule } from './supplier/supplier.module';
import { DeliveryManModule } from './delivery_man/delivery_man.module';
import { LogModule } from './log/log.module';
import { OrderModule } from './order/order.module';
import { SupplierAuthModule } from './supplier/supplier-auth/supplier-auth.module';
import { DeliveryManAuthModule } from './delivery_man/delivery_man-auth/delivery_man-auth.module';
import { StaffModule } from './staff/staff.module';
import { CategoryModule } from './category/category.module';
import { SalesReportModule } from './sales_report/sales_report.module';
import { ProductModule } from './product/product.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HashingModule } from './hashing/hashing.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { StaffAuthModule } from './staff/staff-auth/staff-auth.module';
import { Staff } from './staff/database/staff.entity';
import { SupplierEntity } from './supplier/enitity/supplier.entity';
import { DeliveryManEntity } from './delivery_man/enitity/delivery_man.entity';
import { LogEntity } from './log/entity/log.entity';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}), 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      entities: [Staff, SupplierEntity, DeliveryManEntity, LogEntity],
      synchronize: true
    }),
    MailerModule.forRoot({
      transport: {
        host: 'smtp-relay.brevo.com',
        auth: {
          user: 'rs.expoit123@gmail.com',
          pass: 'xsmtpsib-b53e719b92b33fb4f3064487e4c6f93725e54e68efefad79ef2fd7237ef18599-AKpqUn2s591c4ZO0'
        }
      }
    }),
    SupplierModule, 
    DeliveryManModule, 
    LogModule, 
    OrderModule, 
    SupplierAuthModule, 
    DeliveryManAuthModule, 
    StaffModule, 
    CategoryModule, 
    SalesReportModule, 
    ProductModule, 
    HashingModule, 
    StaffAuthModule, 
    LogModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
