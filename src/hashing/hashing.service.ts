import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { promises } from 'dns';

const SALT = 10;

@Injectable()
export class HashingService {
    async encodText(text: string): Promise<string>{
        return await bcrypt.hash(text, SALT);
    }

    async checkText(text: string, hash: string): Promise<boolean>{
        return await bcrypt.compare(text, hash); 
    }
}
