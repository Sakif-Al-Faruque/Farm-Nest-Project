import { Body,Controller,Get,Post,Put, Param, Delete } from "@nestjs/common";
import { OfferService } from "./offer.service";
import { OfferEntity } from "./entity/offer.entity";

@Controller('offers')
export class OfferController {
    constructor(private readonly offerService: OfferService) {}


    //create
    @Post()
    async create(@Body() offer: OfferEntity): Promise<OfferEntity> {
        return this.offerService.create(offer);
    }


    //search
    @Get()
    async findAll(): Promise<OfferEntity[]>{
        return this.offerService.findAll();
    }

    @Get(':ofid')
    async findOne(@Param('ofid') ofid: number): Promise<OfferEntity>{
        const offer = await this.offerService.findOne(ofid);
        return offer;
    }


    //update
    @Put(':ofid')
    async update(@Param('ofid') ofid: number, @Body() offer: OfferEntity): Promise<any> {
        return this.offerService.update(ofid, offer);
    }


    //delete
    @Delete(':ofid')
    async delete(@Param('ofid') ofid: number) : Promise<any> {
        const offer = await this.offerService.findOne(ofid);
        return this.offerService.delete(ofid);
    }
}