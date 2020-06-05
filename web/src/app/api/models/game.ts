import { BaseEntity } from './base_entity';
import { Category } from './category';

export interface Game extends BaseEntity {
    key?: string;
    name?: string;
    category?: Category;
    category_id?: number;
}