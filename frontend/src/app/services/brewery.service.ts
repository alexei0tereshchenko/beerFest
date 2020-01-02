import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Brewery} from "../models/brewery.model";

@Injectable({
  providedIn: "root"
})
export class BreweryService {
  constructor(private httpService: HttpClient) {
  }

  getAllBreweries(): Observable<Brewery[]> {
    return this.httpService.get<Brewery[]>('http://localhost:8080/getBreweries');
  }

  getBreweriesByCity(idCity: number): Observable<Brewery[]> {
    return this.httpService.get<Brewery[]>('http://localhost:8080/breweries/' + idCity)
  }

  getBrewery(idBrewery: number): Observable<Brewery> {
    return this.httpService.get<Brewery>('http://localhost:8080/brewery/' + idBrewery);
  }

  addBrewery(brewery: Brewery): Observable<Brewery> {
    return this.httpService.post<Brewery>('http://localhost:8080/addBrewery', brewery);
  }


  editBrewery(brewery: Brewery): Observable<Brewery> {
    return this.httpService.post<Brewery>('http://localhost:8080/editBrewery', brewery);
  }
}
  
