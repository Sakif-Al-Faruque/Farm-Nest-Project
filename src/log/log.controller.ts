import { Controller, Get, Post, Delete, Patch, Param, Body, ParseIntPipe } from '@nestjs/common';
import { LogService } from './log.service';
import { LogDto } from './dto/log.dto';
import { LogEntity } from './entity/log.entity';


@Controller('log')
export class LogController {
    constructor(private logService: LogService){}

    @Get()
    async showSuppliers(): Promise<LogEntity[]>{
        return await this.logService.getAllLogs();
    }

    @Get(':lo_id')
    async showSupplierById(@Param('lo_id', ParseIntPipe) id: number): Promise<LogEntity>{
        return await this.logService.getLogById(id);
    }

    @Post()
    async createSupplier(@Body() lo: LogDto): Promise<LogEntity>{
        return await this.logService.addLog(lo);
    }

    @Delete(':lo_id')
    async discardSupplier(@Param('lo_id', ParseIntPipe) id: number): Promise<string>{
        return await this.logService.removeLog(id);
    }

    @Patch(':lo_id')
    async changeSupplier(@Body() lo: LogDto, @Param('lo_id', ParseIntPipe) id: number): Promise<string>{
        return await this.logService.updateLog(lo, id);
    }
}
