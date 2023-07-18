import { Injectable } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entity/product.entity';
import { OrderEntity } from 'src/order/entity/order.entity';

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(ProductEntity)
        private productRepo: Repository<ProductEntity>
    ){}

    async getAllProduct(): Promise<ProductEntity[]>{
        return await this.productRepo.find({relations:['reviews']});
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

    //contact mahin
    async approveProduct(id: number, newValue: string): Promise<string>{
        await this.productRepo.update(id, {account_status: newValue})
        return 'Product approved'
    }

    //supplier features
    async showProductsBySupplierId(su_id: number): Promise<ProductEntity[]>{
        return await this.productRepo.findBy({su_id});
    }

    //customer features
    async searchByName(pname: string): Promise<ProductEntity[]>{
        return await this.productRepo.findBy({pname});
    }
        
}
