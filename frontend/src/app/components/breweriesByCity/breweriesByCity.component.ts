import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {CityService} from "../../services/city.service";
import {BreweryService} from "../../services/brewery.service";
import {switchMap} from "rxjs/operators";
import {City} from "../../models/city.model";
import {Brewery} from "../../models/brewery.model";

@Component({
  selector: 'breweriesByCity',
  templateUrl: 'breweriesByCity.component.html'
})
export class BreweriesByCityComponent implements OnInit{
  city: City;
  breweries: Brewery[];

  constructor(
    private route: ActivatedRoute,
    private breweryService: BreweryService,
    private cityService: CityService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.cityService.getCity(+params.get('id'))
      )).subscribe(city => {
      this.city = city;
      this.breweryService.getBreweriesByCity(city.idCity).subscribe((breweries) => {
        this.breweries = breweries;
      });
    });
  }

}
