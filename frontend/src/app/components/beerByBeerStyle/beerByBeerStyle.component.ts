import {Component, OnInit} from "@angular/core";
import {City} from "../../models/city.model";
import {Brewery} from "../../models/brewery.model";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {BreweryService} from "../../services/brewery.service";
import {CityService} from "../../services/city.service";
import {switchMap} from "rxjs/operators";
import {BeerStyle} from "../../models/beerStyle.model";
import {Beer} from "../../models/beer.model";
import {BeerStylesService} from "../../services/beerStyles.service";
import {BeerService} from "../../services/beer.service";

@Component({
  selector: 'beer-by-beer-style',
  templateUrl: 'beerByBeerStyle.component.html'
})
export class BeerByBeerStyleComponent implements OnInit {

  beerStyle: BeerStyle;

  beers: Beer[];

  constructor(
    private route: ActivatedRoute,
    private beerService: BeerService,
    private beerStyleService: BeerStylesService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.beerStyleService.getBeerStyle(+params.get('id'))
      )).subscribe(beerStyle => {
      this.beerStyle = beerStyle;
      this.beerService.getBeerByBeerStyle(beerStyle.idBeerStyle).subscribe((beers) => {
        this.beers = beers;
      });
    });
  }
}
