import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IUser } from '../models/user';
import { IUserHttp } from '../models/user-http.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersUrl = `${environment.apiUrl}users.json`;
  constructor(private http: HttpClient) {}

  getUsers(): Observable<IUserHttp> {
    return this.http.get<IUserHttp>(this.usersUrl);
  }
}
