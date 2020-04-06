import { Controller, Get, Query } from '@nestjs/common';
import { FindPagedCriteria } from 'src/general/find-paged-criteria';
import { Category } from './category.entity';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoryService: CategoriesService) {}

    @Get()
    findAll(@Query() query: FindPagedCriteria): Promise<Category[]> {
        return this.categoryService.findCategories(query);
    }
}
