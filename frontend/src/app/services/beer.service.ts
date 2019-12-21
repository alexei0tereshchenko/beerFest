import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Beer} from "../models/beer.model";

@Injectable({
  providedIn: "root"
})
export class BeerService {

  constructor(private httrService: HttpClient) {
  }

  getBeer(idBrewery: number): Observable<Beer[]>{
    return this.httrService.get<Beer[]>('http://localhost:8080/beer/' + idBrewery);
  }

}
