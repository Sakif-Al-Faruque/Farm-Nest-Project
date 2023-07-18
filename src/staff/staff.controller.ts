import { Controller, Get, Post, Delete, Patch, Param, Body, ParseIntPipe, Session } from '@nestjs/common';
import { StaffService } from './staff.service';
import { StaffDto } from './dto/staff.dto';
import { SalesReportService } from 'src/sales_report/sales_report.service';
import { SalesReportDto } from 'src/sales_report/dto/sales_report.dto';
import { SupplierService } from 'src/supplier/supplier.service';
import { SupplierDto } from 'src/supplier/dto/supplier.dto';
import { DeliveryManService } from 'src/delivery_man/delivery_man.service';
import { DeliveryManDto } from 'src/delivery_man/dto/delivery_man.dto';
import { ProductService } from 'src/product/product.service';
import { ProductDto } from 'src/product/dto/product.dto';
import { ReviewService } from 'src/review/review.service';
import { ReviewDto } from 'src/review/reviewDto.dto';
import { OrderTrackingService } from 'src/order_tracking/order_tracking.service';
import { OrderTrackingDto } from 'src/order_tracking/dto/order_tracking.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Controller('staff')
export class StaffController {
    constructor(
        private staffService: StaffService, 
        private mailService: MailerService,
        private salesReportService: SalesReportService,
        private supplierService: SupplierService,
        private deliveryManSerivce: DeliveryManService,
        private productService: ProductService,
        private reviewService: ReviewService,
        private orderTrackingService: OrderTrackingService
        ){}

    @Get()
    showStaff(@Session() ss: Record<string, any>){
        if(ss.staffEmail){
            return this.staffService.getAllStaff();
        }else{
            return 'login first'
        }
    }

    @Get(':sid')
    showStaffById(@Session() ss: Record<string, any>, @Param('sid', ParseIntPipe) id: number){
        if(ss.staffEmail){
            return this.staffService.getStaffById(id);
        }else{
            return 'login first'
        }
    }

    @Post()
    async createStaff(@Body() staff: StaffDto){
        this.mailService.sendMail({
            to: staff.email,
            from: 'rs.expoit123@gmail.com',
            subject: 'Account Creation Mail',
            text: `Welcome ${staff.first_name}. Your account has been created successfully!`
        });
        return this.staffService.addStaff(staff);
    }

    @Delete(':sid')
    discardStaff(@Session() ss: Record<string, any>, @Param('sid', ParseIntPipe) id: number){
        if(ss.staffEmail){
            return this.staffService.removeStaff(id);
        }else{
            return 'login first'
        }
    }

    @Patch(':sid')
    changeStaff(@Session() ss: Record<string, any>, @Body() staff: StaffDto, @Param('sid', ParseIntPipe) id: number){
        if(ss.staffEmail){
            return this.staffService.updateStaff(staff, id);
        }else{
            return 'login first'
        }
    }


    // functionalites for Sales_Report

    @Get('report/all')
    previewAllSalesReport(@Session() ss: Record<string, any>){
        if(ss.staffEmail){
            return this.salesReportService.getAllReports()
        }else{
            return 'login first'
        }
    }

    @Get('report/:sale_id')
    previewOneSalesReport(@Session() ss: Record<string, any>, @Param('sale_id', ParseIntPipe) id: number){
        if(ss.staffEmail){
            return this.salesReportService.getSingleReport(id)
        }else{
            return 'login first'
        }
    }

    @Post('report')
    createSalesReport(@Session() ss: Record<string, any>, @Body() salesReport: SalesReportDto){
        if(ss.staffEmail){
            return this.salesReportService.addReport(salesReport)
        }else{
            return 'login first'
        }
    }

    @Patch('report/:sale_id')
    updateSalesReport(@Session() ss: Record<string, any>, @Body() salesReport: SalesReportDto, @Param('sale_id', ParseIntPipe) id: number){
        if(ss.staffEmail){
            return this.salesReportService.updateReport(salesReport, id)
        }else{
            return 'login first'
        }
    }

    // functionalites for Suppliers

    @Get('supplier/all')
    previewAllSuppliers(@Session() ss: Record<string, any>){
        if(ss.staffEmail){
            return this.supplierService.getAllSuppliers()
        }else{
            return 'login first'
        }
    }

    @Patch('supplier/:su_id')
    approveSupplier(@Session() ss: Record<string, any>, @Param('su_id', ParseIntPipe) id:number){
        if(ss.staffEmail){
            return this.supplierService.approveSupplier(id, 'approved')
        }else{
            return 'login first'
        }
    }

    @Get('supplier/:su_id')
    searchSupplier(@Session() ss: Record<string, any>, @Param('su_id', ParseIntPipe) id:number){
        if(ss.staffEmail){
            return this.supplierService.getSupplierById(id)
        }else{
            return 'login first'
        }
    }

    // functionalites for delivery_man

    @Get('delivery_man/all')
    getAllDeliveryMan(@Session() ss: Record<string, any>){
        if(ss.staffEmail){
            return this.deliveryManSerivce.getAllDeliveryMan()
        }else{
            return 'login first'
        }
    }

    @Get('delivery_man/:d_id')
    searchDeliveryMan(@Session() ss: Record<string, any>, @Param('d_id', ParseIntPipe) id:number){
        if(ss.staffEmail){
            return this.salesReportService.getSingleReport(id)
        }else{
            return 'login first'
        }
    }

    @Patch('delivery_man/:d_id')
    approveDeliveryMan(@Session() ss: Record<string, any>, @Param('d_id', ParseIntPipe) id:number){
        if(ss.staffEmail){
            return this.deliveryManSerivce.approveDeliveryMan(id, 'approved')
        }else{
            return 'login first'
        }
    }

    // functionalites for product

    @Get('product/all')
    getAllproduct(@Session() ss: Record<string, any>){
        if(ss.staffEmail){
            return this.productService.getAllProduct()
        }else{
            return 'login first'
        }
    }

    @Get('product/:pid')
    searchProduct(@Session() ss: Record<string, any>, @Param('pid', ParseIntPipe) id:number){
        if(ss.staffEmail){
            return this.productService.getSingleProduct(id)
        }else{
            return 'login first'
        }
    }

    @Patch('product/:pid')
    approveProdut(@Session() ss: Record<string, any>, @Param('pid', ParseIntPipe) id:number){
        if(ss.staffEmail){
            return this.productService.approveProduct(id, 'approved')
        }else{
            return 'login first'
        }
    }

    // functionalites for review

    @Get('review')
    getAllReviews(@Session() ss: Record<string, any>){
        if(ss.staffEmail){
            return this.reviewService.findAll()
        }else{
            return 'login first'
        }
    }

    @Patch('review/:rid')
    approveReview(@Session() ss: Record<string, any>, @Param('rid', ParseIntPipe) id:number){
        if(ss.staffEmail){
            return this.reviewService.approveReview(id, 'approved')
        }else{
            return 'login first'
        }
    }

    // functionalites for order tracking

    @Get('order_tracking')
    getAllOrderTracking(@Session() ss: Record<string, any>){
        if(ss.staffEmail){
            return this.orderTrackingService.getAllOrderTracking()
        }else{
            return 'login first'
        }
    }

    @Patch('order_tracking/:otid')
    updateOrderTracking(@Session() ss: Record<string, any>, @Body() oder_tracking: OrderTrackingDto, @Param('otid', ParseIntPipe) id:number){
        if(ss.staffEmail){
            return this.orderTrackingService.updateOrderTrack(id, oder_tracking)
        }else{
            return 'login first'
        }
    }

    @Get('auth/test')
    testing(@Session() ss:Record<string, any>){
        return ss.email;
    }
}
