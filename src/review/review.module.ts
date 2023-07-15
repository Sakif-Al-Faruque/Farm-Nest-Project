import { Module } from "@nestjs/common";
import { ReviewController } from "./review.controller";
import { ReviewService } from "./review.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReviewEntity } from "./entity/review.entity";


@Module({
    imports: [TypeOrmModule.forFeature([ReviewEntity])],
    controllers: [ReviewController],
    providers: [ReviewService],
})

export class ReviewModule {}