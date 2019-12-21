import {Country} from "./country.model";

export class City {
  idCity: number;
  cityName: string;
  countryByIdCountry: Country;

  constructor(cityName: string, countryByIdCountry: Country){
    this.cityName = cityName;
    this.countryByIdCountry = countryByIdCountry;
  }
}
