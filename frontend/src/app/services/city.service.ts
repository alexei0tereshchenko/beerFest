import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {City} from "../models/city.model";
import {Observable} from "rxjs";
import {Beer} from "../models/beer.model";

@Injectable({
  providedIn: "root"
})
export class CityService {
  constructor(private httpService: HttpClient) {
  }

  getCities(idCountry: number): Observable<City[]>{
    return this.httpService.get<City[]>('http://localhost:8080/cities/' + idCountry);
  }

  addNewCity(city: City): Observable<City>{
    return this.httpService.post<City>('http://localhost:8080/addCity', city);
  }

  getCity(idCity: number): Observable<City>{
    return this.httpService.get<City>('http://localhost:8080/city/'+ idCity);
  }


  editCity(city: City): Observable<City> {
    return this.httpService.post<City>('http://localhost:8080/editCity', city);
  }

  deleteCity(city: City): Observable<City> {
    return this.httpService.post<City>('http://localhost:8080/deleteCity', city);
  }
}
