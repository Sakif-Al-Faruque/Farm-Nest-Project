import { Module } from "@nestjs/common";
import { ReviewController } from "./review.controller";
import { ReviewService } from "./review.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReviewEntity } from "./entity/review.entity";
import { ProductEntity } from "src/product/entity/product.entity";


@Module({
    imports: [TypeOrmModule.forFeature([ReviewEntity, ProductEntity])],
    controllers: [ReviewController],
    providers: [ReviewService],
    exports: [ReviewService]
})

export class ReviewModule {}