import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Country} from '../models/country.model';

@Injectable({
  providedIn: "root"
})
export class CountryService {
  constructor(private httpService: HttpClient) {
  }

  getAllCountries(): Observable<Country[]> {
    return this.httpService.get<Country[]>('http://localhost:8080/getCountries');
  }

}
