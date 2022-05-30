import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IConfig } from '../models/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = `${environment.apiUrl}config.json`;

  constructor(private _http: HttpClient) { }

  getConfig(): Observable<IConfig> {
    return this._http.get<IConfig>(this.configUrl);
  }
}
