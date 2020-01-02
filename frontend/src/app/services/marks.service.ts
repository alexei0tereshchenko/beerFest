import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Mark} from "../models/mark.model";

@Injectable({
  providedIn: "root"
})
export class MarksService {
  constructor(private httpService: HttpClient) {
  }

  getMarksByTaster(idTaster: number): Observable<Mark[]> {
    return this.httpService.get<Mark[]>('http://localhost:8080/marksByTaster/' + idTaster);
  }

  getMarksByBeer(idBeer: number): Observable<Mark[]> {
    return this.httpService.get<Mark[]>('http://localhost:8080/marksByBeer/' + idBeer);
  }

  addMark(mark: Mark): Observable<Mark> {
    return this.httpService.post<Mark>('http://localhost:8080/addMark', mark);
  }

  editMark(mark: Mark): Observable<Mark> {
    return this.httpService.post<Mark>('http://localhost:8080/editMark', mark);
  }
}
