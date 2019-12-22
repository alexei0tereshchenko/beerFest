import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Beer} from "../models/beer.model";

@Injectable({
  providedIn: "root"
})
export class BeerService {

  constructor(private httpService: HttpClient) {
  }

  getBeerByBrewery(idBrewery: number): Observable<Beer[]> {
    return this.httpService.get<Beer[]>('http://localhost:8080/beerByBrewery/' + idBrewery);
  }

  getBeerByBeerStyle(idBeerStyle: number): Observable<Beer[]> {
    return this.httpService.get<Beer[]>('http://localhost:8080/beerByBeerStyle/' + idBeerStyle);
  }

  getBeer(idBeer: number): Observable<Beer> {
    return this.httpService.get<Beer>('http://localhost:8080/beer/'+ idBeer);
  }

  getRating(): Observable<Beer[]> {
    return this.httpService.get<Beer[]>('http://localhost:8080/rating')
  }

  addBeer(beer: Beer): Observable<Beer> {
    return this.httpService.post<Beer>('http://localhost:8080/addBeer', beer);
  }
}
