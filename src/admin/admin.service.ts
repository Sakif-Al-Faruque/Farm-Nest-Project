import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository } from 'typeorm';
import { Admin } from './admin.entity';
import { adminDto } from './dto/admin.dto';
import { adminLoginDto } from './dto/adminLogin.dto';

@Injectable()
export class AdminService {
    constructor(@InjectRepository(Admin)
    private adminRepo: Repository<Admin>,
    ){}

    async validate(obj:adminLoginDto)
    {
        let email = obj.email;
        let password = obj.password;
        let user = await this.adminRepo.findOne({where:{email}})

        if(user && user.password == password)
        {
            return user;
        }

        else
        {
            return "login failed!"
        }
    }


    async addAdmin(admin:adminDto): Promise<string>
    {
       const Admin = this.adminRepo.save(admin);
       if(!Admin)
       {
        return "Operation Failed!"
       }
       else
       {
        return "User Added!";
       } 
    }

    async getAllAdmin(): Promise<Admin[]>
    {
        return this.adminRepo.find();
    }

    async getAdminById(aid:number):Promise<any>
    {
        return this.adminRepo.findOneBy({aid});
    }

    async updateAdmin(admin:adminDto,aid:number):Promise<any>
    {
        const update = this.adminRepo.update({aid},{...admin});
        if(!update)
        {
            return "Update Failed!";
        }

        else
        {
            return "Update Complete";
        }
    }

    async removeAdmin(aid:number):Promise<any>
    {
        const remove = await this.adminRepo.delete(aid);

        if(!remove)
        {
            return "Remove Failed!";
        }

        else
        {
            return "Admin deleted!";
        }
    }

    async getAdminByEmail(email:string):Promise<any>
    {
        let get = await this.adminRepo.findOneBy({email})

        if(!get)
        {
            return "No email found!"
        }

        else
        {
            return get;
        }
    }
    
}
