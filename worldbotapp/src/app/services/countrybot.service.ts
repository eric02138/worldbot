import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { CountryBot } from '../models/countrybot.model';

@Injectable()
export class CountryBotService {
  constructor(private http: HttpClient) {}

  getCountryBots(): Observable<CountryBot[]> {
    return this.http.get<CountryBot[]>('https://restcountries.eu/rest/v2/');
  }

  getCountryBot(payload): Observable<any> {
    return this.http.get('https://restcountries.eu/rest/v2/alpha/' + payload);
  }

  getCountry(payload): Observable<any>{
    return this.http.get('https://restcountries.eu/rest/v2/alpha/' + payload);
  }
}