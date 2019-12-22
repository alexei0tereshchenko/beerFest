import {City} from "./city.model";

export class Brewery {
  idBrewery: number;
  breweryName: string;
  city: City;
  address: string;
  constructor(breweryName: string, city: City, address: string){
    this.breweryName = breweryName;
    this.city = city;
    this.address = address;
  }
}
