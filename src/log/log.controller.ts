import { Controller, Get, Post, Delete, Patch, Param, Body, ParseIntPipe } from '@nestjs/common';
import { LogService } from './log.service';
import { LogDto } from './dto/log.dto';


@Controller('log')
export class LogController {
    constructor(private logService: LogService){}

    @Get()
    showSuppliers(){
        return this.logService.getAllLogs();
    }

    @Get(':lo_id')
    showSupplierById(@Param('lo_id', ParseIntPipe) id: number){
        return this.logService.getLogById(id);
    }

    @Post()
    createSupplier(@Body() lo: LogDto){
        return this.logService.addLog(lo);
    }

    @Delete(':lo_id')
    discardSupplier(@Param('lo_id', ParseIntPipe) id: number){
        return this.logService.removeLog(id);
    }

    @Patch(':lo_id')
    changeSupplier(@Body() lo: LogDto, @Param('lo_id', ParseIntPipe) id: number){
        return this.logService.updateLog(lo, id);
    }
}
