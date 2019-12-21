import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Country} from "../../models/country.model";
import {CountryService} from "../../services/country.service";
import {switchMap} from "rxjs/operators";
import {CityService} from "../../services/city.service";
import {City} from "../../models/city.model";

@Component({
  selector: "cities",
  templateUrl: "cities.component.html"
})
export class CitiesComponent implements OnInit {
  country: Country;

  cities: City[];

  newCityName: string;

  newCity: City;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private cityService: CityService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.countryService.getCountry(+params.get('id'))
      )).subscribe(country => {
      this.country = country;
      this.cityService.getCities(country.idCountry).subscribe((cities) => {
        this.cities = cities;
      });
    });
  }

  onSubmitAddCity(): void {
    this.newCity = new City(this.newCityName, this.country);
    this.cityService.addNewCity(this.newCity).subscribe((city) => {
      this.newCity = null;
      window.location.reload();
    })
  }
}
