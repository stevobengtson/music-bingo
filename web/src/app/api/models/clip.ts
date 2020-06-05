import { BaseEntity } from './base_entity';

export interface Clip extends BaseEntity {
    name?: string;
    artist?: string;
    start?: number;
    end?: number;
    length?: number;
    location?: string;
    isSelected?: boolean;
}
