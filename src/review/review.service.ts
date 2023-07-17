import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ReviewEntity } from "./entity/review.entity";
import { ReviewDto } from "./reviewDto.dto";



// "description": "string",
// "rating": "string",
// "review_date": "string"

 @Injectable()
export class ReviewService {

    constructor(
        @InjectRepository(ReviewEntity)
         private  reviewRepository: Repository<ReviewEntity>,
    ){}

    //create
    async create(review: ReviewDto): Promise<ReviewEntity>{
        const newreview = this.reviewRepository.create(review);
        return this.reviewRepository.save(newreview);
    }


    //search
    async findAll(): Promise<ReviewEntity[]>{
        return this.reviewRepository.find();
    }

    async findOne(rid: number): Promise<ReviewEntity>{
        return this.reviewRepository.findOne({where: {rid} });
    }


    //update
    async update(rid: number, review: ReviewDto): Promise<ReviewEntity>{
        await this.reviewRepository.update(rid, review);
        return this.reviewRepository.findOne({ where: {rid} });
    }


    //delete
    async delete(rid: number): Promise<any>{
         await this.reviewRepository.delete(rid);
    }

    async approveReview(id: number, newValue: string): Promise<string>{
        await this.reviewRepository.update(id, {approval: newValue})
        return 'Review approval changed'
    }
}