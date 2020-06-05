import { BaseEntity } from './base_entity';
import { Clip } from './clip';

export interface Category extends BaseEntity {
    name?: string;
    clips?: Clip[];
}
