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
    showSuppliers(){
        return this.staffService.getAllStaff();
    }

    @Get(':sid')
    showSupplierById(@Param('sid', ParseIntPipe) id: number){
        return this.staffService.getStaffById(id);
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
    discardSupplier(@Param('sid', ParseIntPipe) id: number){
        return this.staffService.removeStaff(id);
    }

    @Patch(':sid')
    changeSupplier(@Body() staff: StaffDto, @Param('sid', ParseIntPipe) id: number){
        return this.staffService.updateStaff(staff, id);
    }


    // functionalites for Sales_Report

    @Get('report/all')
    previewAllSalesReport(){
        return this.salesReportService.getAllReports()
    }

    @Get('report/:sale_id')
    previewOneSalesReport(@Param('sale_id', ParseIntPipe) id: number){
        return this.salesReportService.getSingleReport(id)
    }

    @Post('report')
    createSalesReport(@Body() salesReport: SalesReportDto){
        return this.salesReportService.addReport(salesReport)
    }

    @Patch('report/:sale_id')
    updateSalesReport(@Body() salesReport: SalesReportDto, @Param('sale_id', ParseIntPipe) id: number){
        return this.salesReportService.updateReport(salesReport, id)
    }

    // functionalites for Suppliers

    @Get('supplier/all')
    previewAllSuppliers(){
        return this.supplierService.getAllSuppliers()
    }

    @Patch('supplier/:su_id')
    approveSupplier(@Param('su_id', ParseIntPipe) id:number){
        return this.supplierService.approveSupplier(id, 'approved')
    }

    @Get('supplier/:su_id')
    searchSupplier(@Param('su_id', ParseIntPipe) id:number){
        return this.supplierService.getSupplierById(id)
    }

    // functionalites for delivery_man

    @Get('delivery_man/all')
    getAllDeliveryMan(){
        return this.deliveryManSerivce.getAllDeliveryMan()
    }

    @Get('delivery_man/:d_id')
    searchDeliveryMan(@Param('d_id', ParseIntPipe) id:number){
        return this.salesReportService.getSingleReport(id)
    }

    @Patch('delivery_man/:d_id')
    approveDeliveryMan(@Param('d_id', ParseIntPipe) id:number){
        return this.deliveryManSerivce.approveDeliveryMan(id, 'approved')
    }

    // functionalites for product

    @Get('product/all')
    getAllproduct(){
        return this.productService.getAllProduct()
    }

    @Get('product/:pid')
    searchProduct(@Param('pid', ParseIntPipe) id:number){
        return this.productService.getSingleProduct(id)
    }

    @Patch('product/:pid')
    approveProdut(@Param('pid', ParseIntPipe) id:number){
        return this.productService.approveProduct(id, 'approved')
    }

    // functionalites for review

    @Get('review')
    getAllReviews(){
        return this.reviewService.findAll()
    }

    @Patch('review/:rid')
    approveReview(@Param('rid', ParseIntPipe) id:number){
        return this.reviewService.approveReview(id, 'approved')
    }

    // functionalites for order tracking

    @Get('order_tracking')
    getAllOrderTracking(){
        return this.orderTrackingService.getAllOrderTracking()
    }

    @Patch('order_tracking/:otid')
    updateOrderTracking(@Body() oder_tracking: OrderTrackingDto, @Param('otid', ParseIntPipe) id:number){
        return this.orderTrackingService.updateOrderTrack(id, oder_tracking)
    }

    //assign order tracking

    @Get('auth/test')
    testing(@Session() ss:Record<string, any>){
        return ss.email;
    }
}
