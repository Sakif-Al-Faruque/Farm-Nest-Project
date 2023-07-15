import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
import { CustomerModule } from './customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from './customer/entity/customer.entity';
import { OfferEntity } from './offer/entity/offer.entity';
import { ReviewEntity } from './review/entity/review.entity';
import { ReviewModule } from './review/review.module';
import { OfferModule } from './offer/offer.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: '555099',
    synchronize: true,
    entities: [CustomerEntity, OfferEntity, ReviewEntity]

  }), CustomerModule,ReviewModule,OfferModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
