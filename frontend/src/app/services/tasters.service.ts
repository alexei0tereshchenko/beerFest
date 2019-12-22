import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Taster} from "../models/taster.model";

@Injectable({
  providedIn: "root"
})
export class TastersService {
  constructor(private httpService: HttpClient) {
  }

  getTasters(): Observable<Taster[]>{
    return this.httpService.get<Taster[]>('http://localhost:8080/getTasters');
  }

  getTastersByGroup(idGroup: number): Observable<Taster[]>{
    return this.httpService.get<Taster[]>('http://localhost:8080/tasters/' + idGroup);
  }
}
