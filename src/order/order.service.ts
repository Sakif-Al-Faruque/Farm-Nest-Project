import { Injectable } from '@nestjs/common';
import { OrderDto } from './dto/order.dto';

let Order = [
    {
        o_id: 1109388,
        order_date: "2023-06-26 18:31",
        confirmed: "true",
        payable: 120,
        delivery_type: "cod",
        amount_of_unit: 4,
        p_id: 8383,
        c_id: 180
    },
    {
        o_id: 1109390,
        order_date: "2023-06-26 18:31",
        confirmed: "true",
        payable: 120,
        delivery_type: "online",
        amount_of_unit: 5,
        p_id: 8384,
        c_id: 190
    }
];
@Injectable()
export class OrderService {
    getAllOrders(){
        return Order;
    }

    getOrderById(o_id: number){
        return Order.find((ord) => ord.o_id === o_id);
    }

    addOrder(ord: OrderDto){
        Order.push(ord);
        return 'Order Added';
    }

    removeOrder(o_id: number){
        Order = Order.filter((ord) => ord.o_id != o_id);
        return Order;
    }

    updateOrder(ordu: OrderDto, o_id: number ){
        let userIndex = 0;
        Order.forEach((ord, index)=>{
            if(ord.o_id == o_id){
                userIndex = index;
            }
        });

        Order[userIndex] = ordu;
        return Order;
    }
}
