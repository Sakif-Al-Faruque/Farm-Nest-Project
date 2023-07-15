import { Body, Controller,Get,Post,Put, Param, Delete } from "@nestjs/common/decorators";
import { ReviewService } from "./review.service";
import { ReviewEntity } from "./entity/review.entity";
import { reviewDto } from "./reviewDto.dto";


 @Controller('reviews')
export class ReviewController {
    constructor(private readonly reviewService: ReviewService) {}
    

    //create
    @Post()
    async create(@Body() review: ReviewEntity): Promise<ReviewEntity> {
      return this.reviewService.create(review);
    }


    //search
    @Get()
    async findAll(): Promise<ReviewEntity[]> {
      return this.reviewService.findAll();
    }

    @Get(':rid')
    async findOne(@Param('rid') rid: number): Promise<ReviewEntity> {
      const review = await this.reviewService.findOne(rid);
      // if (!review) {
      //   throw new ('ReviewEntity does not exist!');
      // } else {
         return review;
       }


    


    //update
    @Put(':rid')
    async update (@Param('rid') rid: number, @Body() review: ReviewEntity): Promise<any> {
      return this.reviewService.update(rid, review);
    }


    //delete
    @Delete(':rid')
    async delete(@Param('rid') rid: number): Promise<any> {
      //handle error if user does not exist
      const review = await this.reviewService.findOne(rid);
      // if (!review) {
      //   throw new ('Review does not exist!');
      // }
      return this.reviewService.delete(rid);
    }

}