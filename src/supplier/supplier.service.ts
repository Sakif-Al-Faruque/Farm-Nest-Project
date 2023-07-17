import { Injectable } from '@nestjs/common';
import { SupplierDto } from './dto/supplier.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { SupplierEntity } from './enitity/supplier.entity';
import { Repository } from 'typeorm';
import { HashingService } from 'src/hashing/hashing.service';


@Injectable()
export class SupplierService {

    constructor(
        @InjectRepository(SupplierEntity)
        private readonly supplierEntityRepo: Repository<SupplierEntity>,
        private readonly hashingService: HashingService
    ){}

    async getAllSuppliers(): Promise<SupplierEntity[]>{
        return await this.supplierEntityRepo.find();
    }

    async getSupplierById(su_id: number): Promise<SupplierEntity>{
        return await this.supplierEntityRepo.findOneBy({su_id});
    }

    async getSupplierByEmail(email: string): Promise<SupplierEntity>{
        return await this.supplierEntityRepo.findOneBy({email});
    }

    async addSupplier(su: SupplierDto): Promise<string>{
        let password = await this.hashingService.encodText(su.password);
        const userRepo = await this.supplierEntityRepo.create({...su, password});
        await this.supplierEntityRepo.save(userRepo);
        return 'User Added';
    }

    async removeSupplier(su_id: number): Promise<string>{
        await this.supplierEntityRepo.delete({su_id});
        return 'User Removed';
    }

    async updateSupplier(su: SupplierDto, su_id: number ): Promise<string>{
        await this.supplierEntityRepo.update({su_id}, {...su});
        return 'User Updated';
    }

    //contact mahin
    async approveSupplier(id: number, newValue: string): Promise<string>{
        await this.supplierEntityRepo.update(id, {account_status: newValue})
        return 'supplier approved'
    }
}
