import {Taster} from "./taster.model";
import {Beer} from "./beer.model";

export class Mark {
  date: Date;
  mark: number;
  comment: string;
  tastersByIdTaster: Taster;
  beerByIdBeer: Beer;
  constructor(date: Date, mark: number, comment: string, tasterByIdTaster: Taster, beerByIdBeer: Beer){
    this.date = date;
    this.mark = mark;
    this.comment = comment;
    this.tastersByIdTaster = tasterByIdTaster;
    this.beerByIdBeer = beerByIdBeer;
  }
}
