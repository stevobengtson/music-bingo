import { Injectable } from '@angular/core';
import { AppConfigService } from '@services/app-config.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseEntity } from '@app/api/models/base_entity';

@Injectable()
export class BaseRequestService<T> {
    protected path = '';

    constructor(
        protected readonly http: HttpClient,
        protected readonly config: AppConfigService
    ) { }

    get baseUrl(): string {
        return `${this.config.settings.baseApiUrl}${this.path}`;
    }

    get(id: number): Observable<T> {
        return this.http.get<T>(`${this.baseUrl}/${id}`, )
    }

    getMany(page: number = 1, limit: number = 10): Observable<HttpResponse<T[]>> {
        return this.http.get<T[]>(`${this.baseUrl}?page=${page}&limit=${limit}`, {observe: 'response'});
    }

    post(data: T): Observable<T> {
        return this.http.post<T>(`${this.baseUrl}`, this.getEntity(data));
    }

    put(data: T): Observable<T> {
        return this.http.put<T>(`${this.baseUrl}/${this.getEntityId(data)}`, this.getEntity(data));
    }

    delete(data: T): Observable<T> {
        return this.http.delete<T>(`${this.baseUrl}/${this.getEntityId(data)}`);
    }

    private getEntity(data: T): object {
        const entity: object = {};
        entity[data.constructor.name.toLowerCase()] = data;
        return entity;
    }

    private getEntityId(data: T): number {
        return (<BaseEntity>data).id || 0;
    }
}