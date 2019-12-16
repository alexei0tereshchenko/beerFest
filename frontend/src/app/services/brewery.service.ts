import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Brewery} from "../models/brewery.model";

@Injectable({
  providedIn: "root"
})
export class BreweryService {
  constructor(private httpService: HttpClient){
  }
  
  getAllBreweries(): Observable<Brewery[]> {
    return this.httpService.get<Brewery[]>('http://localhost:8080/getBreweries');
  }
  
}
  
