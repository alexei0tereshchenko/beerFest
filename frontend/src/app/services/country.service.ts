import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Country} from '../models/country.model';
import {Beer} from "../models/beer.model";

@Injectable({
  providedIn: "root"
})
export class CountryService {
  constructor(private httpService: HttpClient) {
  }

  getAllCountries(): Observable<Country[]> {
    return this.httpService.get<Country[]>('http://localhost:8080/getCountries');
  }

  addNewCountry(country: Country): Observable<Country> {
    return this.httpService.post<Country>('http://localhost:8080/addNewCountry', country)
  }

  getCountry(idCountry: number): Observable<Country> {
    return this.httpService.get<Country>('http://localhost:8080/country/' + idCountry);
  }

  editCountry(country: Country): Observable<Country> {
    return this.httpService.post<Country>('http://localhost:8080/editCountry', country);
  }

  deleteCountry(country: Country): Observable<Country> {
    return this.httpService.post<Country>('http://localhost:8080/deleteCountry', country);
  }
}
