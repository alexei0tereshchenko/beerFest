import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Taster} from "../models/taster.model";
import {Beer} from "../models/beer.model";

@Injectable({
  providedIn: "root"
})
export class TastersService {
  constructor(private httpService: HttpClient) {
  }

  getTasters(): Observable<Taster[]> {
    return this.httpService.get<Taster[]>('http://localhost:8080/getTasters');
  }

  getTastersByGroup(idGroup: number): Observable<Taster[]> {
    return this.httpService.get<Taster[]>('http://localhost:8080/tasters/' + idGroup);
  }

  getTaster(idTaster: number): Observable<Taster> {
    return this.httpService.get<Taster>('http://localhost:8080/taster/' + idTaster)
  }

  addTaster(taster: Taster): Observable<Taster> {
    return this.httpService.post<Taster>('http://localhost:8080/addTaster', taster);
  }

  editTaster(taster: Taster): Observable<Taster> {
    return this.httpService.post<Taster>('http://localhost:8080/editTaster', taster);
  }

  deleteTaster(taster: Taster): Observable<Taster> {
    return this.httpService.post<Taster>('http://localhost:8080/deleteTaster', taster);
  }
}
