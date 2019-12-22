import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Group} from "../models/group.model";

@Injectable({
  providedIn: "root"
})
export class GroupsService {

  constructor(private httpService: HttpClient) {
  }

  getGroups(): Observable<Group[]> {
    return this.httpService.get<Group[]>('http://localhost:8080/getGroups');
  }

  getGroup(idGroup: number): Observable<Group>{
    return this.httpService.get<Group>('http://localhost:8080/group/' + idGroup)
  }
}
