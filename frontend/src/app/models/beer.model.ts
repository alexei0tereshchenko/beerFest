import {Brewery} from "./brewery.model";
import {BeerStyle} from "./beerStyle.model";

export class Beer {
  idBeer: number;
  beerName: string;
  alcVol: number;
  breweryByIdBrewery: Brewery;
  beerStyleByIdBeerStyle: BeerStyle;
  avgMark: number;

  constructor(beerName: string, alcVol: number, breweryByIdBrewery: Brewery, beerStyleByIdBeerStyle: BeerStyle) {
    this.beerName = beerName;
    this.alcVol = alcVol;
    this.breweryByIdBrewery = breweryByIdBrewery;
    this.beerStyleByIdBeerStyle = beerStyleByIdBeerStyle;
  }
}
