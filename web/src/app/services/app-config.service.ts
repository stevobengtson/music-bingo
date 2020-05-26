import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AppSettings {
  baseApiUrl: string;
}

@Injectable()
export class AppConfigService {
    private envUrl = '/assets/settings.json';
    private configSettings: AppSettings;

    constructor(private http: HttpClient) {}

    get settings() {
        return this.configSettings;
    }

    public load(): Promise<any> {
        return new Promise((resolve, reject) => {
          this.http.get<AppSettings>(this.envUrl).subscribe(
            (response: any) => {
              this.configSettings = response;
              resolve(true);
            },
            (error: any) => {
              console.log(error);
              reject(error);
            }
          );
      });
    }
}