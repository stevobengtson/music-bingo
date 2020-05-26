import { Injectable } from '@angular/core';
import { AppConfigService } from '@services/app-config.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BaseRequestService {
    protected path = '';

    constructor(
        protected readonly http: HttpClient,
        protected readonly config: AppConfigService
    ) { }

    get baseUrl(): string {
        return `${this.config.settings.baseApiUrl}/${this.path}`;
    }

    protected newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            // tslint:disable-next-line: no-bitwise
            const r = Math.random() * 16 | 0;
            // tslint:disable-next-line: no-bitwise
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }   
}