import {Taster} from "./taster.model";
import {Beer} from "./beer.model";

export class Mark {
  date: Date;
  mark: number;
  comment: string;
  tastersByIdTaster: Taster;
  beerByIdBeer: Beer;
}
