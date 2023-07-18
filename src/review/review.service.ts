import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ReviewEntity } from "./entity/review.entity";
import { ReviewDto } from "./reviewDto.dto";
import { ProductEntity } from "src/product/entity/product.entity";



// "description": "string",
// "rating": "string",
// "review_date": "string"

 @Injectable()
export class ReviewService {

    constructor(
        @InjectRepository(ReviewEntity)
         private  reviewRepository: Repository<ReviewEntity>,

         @InjectRepository(ProductEntity)
         private  productRepository: Repository<ProductEntity>,
    ){}

    //create
    async create(review: ReviewDto): Promise<ReviewEntity>{
        let p_id = 1;
        const p = await this.productRepository.findOneBy({p_id});
        const newreview = await this.reviewRepository.create(review);
        newreview.product = p;
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

    //supplier features
    async showReviewByProductId(pid: number): Promise<ReviewEntity[]>{
        return await this.reviewRepository.findBy({pid})
    }
}