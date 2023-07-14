import { Injectable } from '@nestjs/common';
import { CategoryDto } from './dto/category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './entity/category.entity';
import { Repository } from 'typeorm';

let categories = [
    {
        ca_id: 324521,
        caname: "Agro Food",
        unit: 8
    },
    {
        ca_id: 923734,
        caname: "Medicine",
        unit: 5
    }
]

@Injectable()
export class CategoryService {

    constructor(
        @InjectRepository(CategoryEntity)
        private categoryRepo: Repository<CategoryEntity>
    ){}

    async getAllCategories():Promise<CategoryEntity[]>{
        return await this.categoryRepo.find();
    }

    async getSingleCategory(ca_id: number):Promise<CategoryEntity>{
        return await this.categoryRepo.findOneBy({ca_id});
    }

    async addCategory(category: CategoryDto): Promise<string>{
        await this.categoryRepo.save(category)
        return 'Category Added';
    }

    async updateCategory(category: CategoryDto, ca_id: number):Promise<string>{
        await this.categoryRepo.update({ca_id}, {...category})
        return "category updated";
    }

    async removeCategory(ca_id: number):Promise<string>{
        await this.categoryRepo.delete({ca_id})
        return "category deleted";
    }
}
