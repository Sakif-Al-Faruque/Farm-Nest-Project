import { Injectable } from '@nestjs/common';
import { CategoryDto } from './dto/category.dto';

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
    getAllCategories(){
        return categories;
    }

    getSingleCategory(caid: number){
        return categories.find((category)=> category.ca_id === caid);
    }

    addCategory(category: CategoryDto){
        categories.push(category);
        return 'Category Added';
    }
}
