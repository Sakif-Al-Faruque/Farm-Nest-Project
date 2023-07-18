import { Injectable } from '@nestjs/common';
import { LogDto } from './dto/log.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LogEntity } from './entity/log.entity';
import { Repository } from 'typeorm';


@Injectable()
export class LogService {
    constructor(
        @InjectRepository(LogEntity)
        private readonly logRepo: Repository<LogEntity>
    ){}

    async getAllLogs(): Promise<LogEntity[]>{
        return await this.logRepo.find();
    }

    async getLogById(log_id: number): Promise<LogEntity>{
        return await this.logRepo.findOneBy({log_id});
    }

    async addLog(lo: LogDto): Promise<LogEntity>{
        let log = await this.logRepo.create({...lo});
        return await this.logRepo.save(log);
    }

    async removeLog(log_id: number): Promise<string>{
        await this.logRepo.delete({log_id});
        return 'Log is removed';
    }

    async updateLog(lo: LogDto, log_id: number ): Promise<string>{
        await this.logRepo.update({log_id}, {...lo});
        return 'Log is updated';
    }

}
