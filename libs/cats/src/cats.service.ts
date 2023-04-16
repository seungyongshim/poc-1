import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
    getCats(): any {
        return {
        message: 'Cats!'
        }
    }
}
