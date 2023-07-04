import { Injectable } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';

let products = [
    {
    p_id: 21321,
    pname: "Cow Milk",
    unit_price: 88,
    stock_unit: 2000,
    sold_unit: 500,
    region: "Meherpur",
    state: "Khulna",
    image: "null",
    availability: true,
    last_update: "2023-06-26 18:31",
    caid: 12321,
    offer: false,
    suid: 32432,
    approved_by: 45622,
    account_status: "approved"
    },
    {
        p_id: 93822,
        pname: "Beef Meat",
        unit_price: 800,
        stock_unit: 400,
        sold_unit: 50,
        region: "Gaziput",
        state: "Dhaka",
        image: "null",
        availability: true,
        last_update: "2022-09-21 13:25",
        caid: 53523,
        offer: false,
        suid: 92843,
        approved_by: 82734,
        account_status: "approved"
        }
]

@Injectable()
export class ProductService {
    getAllProduct(){
        return products;
    }

    getSingleProduct(p_id: number){
        return products.find((product) => product.p_id === p_id);
    }

    addProduct(product: ProductDto){
        products.push(product);
        return products;
    }

    updateProduct(product: ProductDto, p_id: number){
        let userIndex = 0;
        products.forEach((product, index)=>{
            if(product.p_id == p_id){
                userIndex = index;
            }
        });

        products[userIndex] = product;
        return products;
    }

    removeProduct(p_id: number){
        products = products.filter((product) => product.p_id != p_id);
        return products;
    }
}
