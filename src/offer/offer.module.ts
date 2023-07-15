import { TypeOrmModule } from "@nestjs/typeorm";
import { OfferEntity } from "./entity/offer.entity";
import { OfferController } from "./offer.controller";
import { OfferService } from "./offer.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([OfferEntity])],
    controllers: [OfferController],
    providers: [OfferService],
})

export class OfferModule {}