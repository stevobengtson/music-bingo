import { BaseEntity } from './base_entity';

export interface Room extends BaseEntity {
    name?: string;
    key?: string;
}
