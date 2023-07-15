import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ReviewEntity } from "./entity/review.entity";
import { reviewDto } from "./reviewDto.dto";



 @Injectable()
export class ReviewService {

    constructor(
        @InjectRepository(ReviewEntity)
         private  reviewRepository: Repository<ReviewEntity>,
    ){}

    //create
    async create(review: reviewDto): Promise<ReviewEntity>{
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
    async update(rid: number, review: reviewDto): Promise<ReviewEntity>{
        await this.reviewRepository.update(rid, review);
        return this.reviewRepository.findOne({ where: {rid} });
    }


    //delete
    async delete(rid: number): Promise<any>{
         await this.reviewRepository.delete(rid);
    }


}