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

    getSingleCategory(ca_id: number){
        return categories.find((category)=> category.ca_id === ca_id);
    }

    addCategory(category: CategoryDto){
        categories.push(category);
        return 'Category Added';
    }

    updateCategory(category: CategoryDto, ca_id: number){
        let userIndex = 0;
        categories.forEach((category, index)=>{
            if(category.ca_id === ca_id){
                userIndex = index;
            }
        });

        categories[userIndex] = category;
        return categories;
    }

    removeCategory(ca_id: number){
        categories = categories.filter((category)=> category.ca_id != ca_id);
        return categories;
    }
}
