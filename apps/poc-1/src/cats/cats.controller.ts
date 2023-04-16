import { CatsService } from '@app/cats';
import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {
        
    }

    @Get()
    getCats(): any {
        return this.catsService.getCats();
    }
}
