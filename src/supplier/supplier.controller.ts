import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Session } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { SupplierDto } from './dto/supplier.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { ProductDto } from 'src/product/dto/product.dto';
import { ProductService } from 'src/product/product.service';
import { ProductEntity } from 'src/product/entity/product.entity';
import { ReviewService } from 'src/review/review.service';

@Controller('supplier')
export class SupplierController {
    constructor(
        private supplierService: SupplierService,
        private productService: ProductService,
        private reviewService: ReviewService,
        private mailService: MailerService
        ){}

    @Get()
    async showSuppliers(){
        return this.supplierService.getAllSuppliers();
    }

    @Get(':su_id')
    async showSupplierById(@Param('su_id', ParseIntPipe) id: number){
        return this.supplierService.getSupplierById(id);
    }

    @Post()
    async createSupplier(@Body() su: SupplierDto){
        this.mailService.sendMail({
            to: 'sakif.saf915@gmail.com',
            from: 'rs.expoit123@gmail.com',
            subject: 'Account Creation Mail',
            text: `Welcome ${su.first_name}. Your account has been created successfully!`
        });
        return this.supplierService.addSupplier(su);
    }

    @Delete(':su_id')
    async discardSupplier(@Param('su_id', ParseIntPipe) id: number){
        return this.supplierService.removeSupplier(id);
    }

    @Patch(':su_id')
    async changeSupplier(@Body() su: SupplierDto, @Param('su_id', ParseIntPipe) id: number){
        return this.supplierService.updateSupplier(su, id);
    }

    @Get('auth/test')
    testing(@Session() ss:Record<string, any>){
        return ss.email;
        //return 'he'
    }

    //dependancies
    @Post('product/add')
    async postProduct(@Body() pro: ProductDto, @Session() ss: Record<string, any>): Promise<any>{
        if(ss.supplierEmail){
            await this.productService.addProduct(pro);
            return `Product is added by ${ss.supplierEmail}`;
        }
        return 'Please... Log in as supplier first';
    }

    @Get('product/show')
    async showProducts(@Session() ss: Record<string, any>): Promise<any>{
        if(ss.supplierEmail){
            return await this.productService.getAllProduct();
        }
        return 'Please... Log in as supplier first';
    }

    @Get('product/review/show')
    async showProductReview(@Session() ss: Record<string, any>): Promise<any>{
        if(ss.supplierEmail){
            return await this.reviewService.findAll();
        }
        return 'Please... Log in as supplier first';
    }

    @Patch('product/update/:p_id')
    async modifyProduct(@Body() pro: ProductDto, @Param('p_id', ParseIntPipe) p_id: number, @Session() ss: Record<string, any>): Promise<any>{
        if(ss.supplierEmail){
            await this.productService.updateProduct(pro, p_id);
            return `Product is update by ${ss.supplierEmail}`;
        }
        return 'Please... Log in as supplier first';
    }
}
