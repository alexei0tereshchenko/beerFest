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

  getBeer(idBrewery: number): Observable<Beer[]>{
    return this.httpService.get<Beer[]>('http://localhost:8080/beer/' + idBrewery);
  }

    getBeerByBeerStyle(idBeerStyle: number): Observable<Beer[]>{
    return this.httpService.get<Beer[]>('http://localhost:8080/beerByBeerStyle/' + idBeerStyle);
  }

}
