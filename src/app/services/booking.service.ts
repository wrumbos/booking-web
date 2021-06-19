import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

const baseUrl = environment.APIUrl;
const service = '/user/contacto%40tuten.cl/bookings?current=true';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  constructor(private http: HttpClient) { }

  get(email: string, token: string): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('adminemail', email)
        .set('token', token)
        .set('app', 'APP_BCK')
    };

    return this.http.get(baseUrl + service, httpOptions);
  }
}
