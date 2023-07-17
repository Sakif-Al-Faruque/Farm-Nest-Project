import { Injectable } from '@nestjs/common';
import { DeliveryManDto } from './dto/delivery_man.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeliveryManEntity } from './enitity/delivery_man.entity';
import { HashingService } from 'src/hashing/hashing.service';


/* let Delivery_man = [
    {
        d_id: 110,
        email: "john@g.co",
        first_name: "john",
        last_name: "shoe",
        gender: "male",
        password: "12345678",
        dob: "1995-09-20",
        house_no: 121,
        road: "kazi nazrul islam avenue",
        area: "karwanbazar",
        police_station: "vatara",
        district: "dhaka",
        division: "dhaka",
        phone_no: "01999777777",
        image: "img1.jpg",
        approved_by: 1140,
        account_status: "pending"
    },
    {
        d_id: 120,
        email: "bob@g.co",
        first_name: "bob",
        last_name: "bro",
        gender: "male",
        password: "87654321",
        dob: "1992-03-29",
        house_no: 122,
        road: "kazi nazrul islam avenue",
        area: "mirpur",
        police_station: "kafrul",
        district: "dhaka",
        division: "dhaka",
        phone_no: "01388999999",
        image: "img2.jpg",
        approved_by: 1150,
        account_status: "approved"
    },
]; */
@Injectable()
export class DeliveryManService {


    constructor(@InjectRepository(DeliveryManEntity)
    private deliveryManRepo: Repository<DeliveryManEntity>,
    private readonly hashingService: HashingService
    ){}


    async getAllDeliveryMan(): Promise<DeliveryManEntity[]>{
        return await this.deliveryManRepo.find();
    }

    async getDeliveryManById(d_id: number): Promise<DeliveryManEntity>{
        return await this.deliveryManRepo.findOneBy({d_id});
    }

    async getDeliveryManByEmail(email: string): Promise<DeliveryManEntity>{
        return await this.deliveryManRepo.findOneBy({email});
    }

    async addDeliveryMan(deliveryMan: DeliveryManDto): Promise<string>{
        let password = await this.hashingService.encodText(deliveryMan.password);
        const userRepo = await this.deliveryManRepo.create({...deliveryMan, password});
        await this.deliveryManRepo.save(userRepo);
        return 'User Added';
    }

    async removeDeliveryMan(d_id: number): Promise<string>{
        await this.deliveryManRepo.delete(d_id)
        return "User deleted";
    }

    async updateDeliveryMan(deliveryMan: DeliveryManDto, d_id: number ): Promise<string>{
        await this.deliveryManRepo.update({d_id}, {...deliveryMan});
        return "User data updated";
    }
   
    //contact mahin
    async approveDeliveryMan(id: number, newValue: string): Promise<string>{
        await this.deliveryManRepo.update(id, {account_status: newValue})
        return 'DeliveryMan approved'
    }













}
