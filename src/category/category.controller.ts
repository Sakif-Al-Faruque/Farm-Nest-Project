import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { CategoryDto } from './dto/category.dto';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService){}

    @Get()
    showAllCategories(){
        return this.categoryService.getAllCategories();
    }

    @Get(':ca_id')
    selectSingleCategory(@Param('ca_id', ParseIntPipe) id: number){
        return this.categoryService.getSingleCategory(id);
    }

    @Post()
    addCategory(@Body() category: CategoryDto){
        return this.categoryService.addCategory(category);
    }

    @Patch(':ca_id')
    updateCategory(@Body() category: CategoryDto, @Param('ca_id', ParseIntPipe) id: number){
        return this.categoryService.updateCategory(category, id);
    }

    @Delete(':ca_id')
    removeCategory(@Param('ca_id', ParseIntPipe) id: number){
        return this.categoryService.removeCategory(id);
    }
}
