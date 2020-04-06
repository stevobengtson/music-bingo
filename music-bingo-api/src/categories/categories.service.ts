import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { Repository } from 'typeorm';
import { FindPagedCriteria } from 'src/general/find-paged-criteria';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>
    ) {}

    findCategories(query: FindPagedCriteria): Promise<Category[]> {
        return this.categoryRepository.find({ take: query.limit, skip: query.start });
    }
}
