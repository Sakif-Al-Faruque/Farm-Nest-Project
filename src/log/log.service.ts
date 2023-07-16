import { Injectable } from '@nestjs/common';
import { LogDto } from './dto/log.dto';

let Log = [
    {
        log_id: 1109388,
        log_time: "2023-06-26 18:31",
        logout_time: "2023-06-26 18:31",
        uid: 120
    },
    {
        log_id: 1109389,
        log_time: "2023-06-26 19:31",
        logout_time: "2023-06-26 20:31",
        uid: 120
    },
];
@Injectable()
export class LogService {
    getAllLogs(){
        return Log;
    }

    getLogById(lo_id: number){
        return Log.find((lo) => lo.log_id === lo_id);
    }

    addLog(lo: LogDto){
        Log.push(lo);
        return 'Log Added';
    }

    removeLog(lo_id: number){
        Log = Log.filter((lo) => lo.log_id != lo_id);
        return Log;
    }

    updateLog(lou: LogDto, lo_id: number ){
        let userIndex = 0;
        Log.forEach((lo, index)=>{
            if(lo.log_id == lo_id){
                userIndex = index;
            }
        });

        Log[userIndex] = lou;
        return Log;
    }
}
