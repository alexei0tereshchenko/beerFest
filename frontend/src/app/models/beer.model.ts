import {Brewery} from "./brewery.model";
import {BeerStyle} from "./beerStyle.model";

export class Beer{
  idBeer: number;
  beerName: string;
  alcVol: number;
  breweryByIdBrewery: Brewery;
  beerStyleByIdBeerStyle: BeerStyle;
}
