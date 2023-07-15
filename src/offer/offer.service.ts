import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { OfferEntity } from "./entity/offer.entity";
import { Repository } from "typeorm";
import { offerDto } from "./offerDto.dto";
import { ReviewEntity } from "src/review/entity/review.entity";

@Injectable()
export class OfferService {

    constructor(
        @InjectRepository(OfferEntity)
        private offerRepository: Repository<OfferEntity>,
    ){}

    //create
    async create(offer: offerDto): Promise<OfferEntity>{
        const newoffer = this.offerRepository.create(offer);
        return this.offerRepository.save(newoffer);
    }


    //search
    async findAll(): Promise<OfferEntity[]>{
        return this.offerRepository.find();
    }

    async findOne(ofid: number): Promise<OfferEntity>{
        return this.offerRepository.findOne({where: {ofid} });
    }


    //update
    async update(ofid: number, offer: offerDto): Promise<OfferEntity>{
        await this.offerRepository.update(ofid, offer);
        return this.offerRepository.findOne({ where: {ofid} });
    }


    //delete
    async delete(ofid: number): Promise<any>{
        await this.offerRepository.delete(ofid);
    }
}