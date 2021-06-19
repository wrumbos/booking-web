import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

const baseUrl = environment.APIUrl;
const service = '/user/testapis%40tuten.cl';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders().set('Content-Type', 'application/json').set('password', password).set('app', 'APP_BCK')
    };

    return this.http.put(baseUrl + service, {
      username
    }, httpOptions);
  }

}
