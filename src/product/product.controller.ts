import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService){}

    @Get()
    getAllProducts(){
        return this.productService.getAllProduct();
    }

    @Get(':p_id')
    getSingleProduct(@Param('p_id', ParseIntPipe) id: number){
        return this.productService.getSingleProduct(id);
    }

    @Post()
    addProduct(@Body() product: ProductDto){
        return this.productService.addProduct(product);
    }

    @Patch(':p_id')
    updateProduct(@Body() product: ProductDto, @Param('p_id', ParseIntPipe) id: number){
        return this.productService.updateProduct(product, id);
    }

    @Delete(':p_id')
    removeProduct(@Param('p_id', ParseIntPipe) id: number){
        return this.productService.removeProduct(id);
    }
}
