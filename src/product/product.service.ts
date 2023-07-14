import { Injectable } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entity/product.entity';

let products = [
    {
    p_id: 21321,
    pname: "Cow Milk",
    unit_price: 88,
    stock_unit: 2000,
    sold_unit: 500,
    region: "Meherpur",
    state: "Khulna",
    image: "null",
    availability: true,
    last_update: "2023-06-26 18:31",
    caid: 12321,
    offer: false,
    suid: 32432,
    approved_by: 45622,
    account_status: "approved"
    },
    {
        p_id: 93822,
        pname: "Beef Meat",
        unit_price: 800,
        stock_unit: 400,
        sold_unit: 50,
        region: "Gaziput",
        state: "Dhaka",
        image: "null",
        availability: true,
        last_update: "2022-09-21 13:25",
        caid: 53523,
        offer: false,
        suid: 92843,
        approved_by: 82734,
        account_status: "approved"
        }
]

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(ProductEntity)
        private productRepo: Repository<ProductEntity>
    ){}

    async getAllProduct(): Promise<ProductEntity[]>{
        return await this.productRepo.find();
    }

    async getSingleProduct(p_id: number): Promise<ProductEntity>{
        return await this.productRepo.findOneBy({p_id})
    }

    async addProduct(product: ProductDto): Promise<string>{
        await this.productRepo.save(product)
        return "product added";
    }

    async updateProduct(product: ProductDto, p_id: number): Promise<string>{
        await this.productRepo.update({p_id}, {...product})
        return "product updated";
    }

    async removeProduct(p_id: number): Promise<string>{
        await this.productRepo.delete({p_id})
        return "product deleted";
    }
}
