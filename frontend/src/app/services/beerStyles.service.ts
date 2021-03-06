import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BeerStyle} from "../models/beerStyle.model";

@Injectable({
  providedIn: "root"
})
export class BeerStylesService {

  constructor(private httpService: HttpClient) {
  }

  getBeerStyles(): Observable<BeerStyle[]> {
    return this.httpService.get<BeerStyle[]>('http://localhost:8080/beerStyles');
  }

  getBeerStyle(idBeerStyle: number): Observable<BeerStyle> {
    return this.httpService.get<BeerStyle>('http://localhost:8080/beerStyle/' + idBeerStyle);
  }

  addBeerStyle(beerStyle: BeerStyle): Observable<BeerStyle> {
    return this.httpService.post<BeerStyle>('http://localhost:8080/addBeerStyle', beerStyle);
  }


  editBeerStyle(beerStyle: BeerStyle): Observable<BeerStyle> {
    return this.httpService.post<BeerStyle>('http://localhost:8080/editBeerStyle', beerStyle);
  }

  deleteBeerStyle(beerStyle: BeerStyle): Observable<BeerStyle> {
    return this.httpService.post<BeerStyle>('http://localhost:8080/deleteBeerStyle', beerStyle);
  }
}
