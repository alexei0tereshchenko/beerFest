import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {BeerStyle} from "../../models/beerStyle.model";
import {Beer} from "../../models/beer.model";
import {BeerStylesService} from "../../services/beerStyles.service";
import {BeerService} from "../../services/beer.service";
import {Brewery} from "../../models/brewery.model";
import {BreweryService} from "../../services/brewery.service";

@Component({
  selector: 'beer-by-beer-style',
  templateUrl: 'beerByBeerStyle.component.html'
})
export class BeerByBeerStyleComponent implements OnInit {

  beerStyle: BeerStyle;

  beers: Beer[];


  newBeerName: string;

  newBreweryId: number;

  newAlcVol: number;

  breweries: Brewery[];

  constructor(
    private route: ActivatedRoute,
    private beerService: BeerService,
    private beerStyleService: BeerStylesService,
    private breweryService: BreweryService
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
        this.breweryService.getAllBreweries().subscribe(breweries => this.breweries = breweries);
      });
    });
  }

  onSubmitAddBeer(): void {
    this.breweryService.getBrewery(this.newBreweryId).subscribe(brewery => {
      this.beerService.addBeer(new Beer(this.newBeerName, this.newAlcVol, brewery, this.beerStyle)).subscribe(() =>
        window.location.reload())
    });
  }
}
