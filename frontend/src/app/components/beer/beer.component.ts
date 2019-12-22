import {Component, OnInit} from "@angular/core";
import {Brewery} from "../../models/brewery.model";
import {Beer} from "../../models/beer.model";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {BreweryService} from "../../services/brewery.service";
import {BeerService} from "../../services/beer.service";
import {switchMap} from "rxjs/operators";
import {BeerStyle} from "../../models/beerStyle.model";
import {BeerStylesService} from "../../services/beerStyles.service";

@Component({
  selector: 'beer',
  templateUrl: 'beer.component.html'
})
export class BeerComponent implements OnInit {
  brewery: Brewery;

  newBeerName: string;

  newBeer: Beer;

  newBeerStyleId: number;

  newAlcVol: number;

  beers: Beer[];

  beerStyles: BeerStyle[];

  constructor(
    private route: ActivatedRoute,
    private breweryService: BreweryService,
    private beerService: BeerService,
    private beerStyleService: BeerStylesService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.breweryService.getBrewery(+params.get('id'))
      )).subscribe(brewery => {
      this.brewery = brewery;
      this.beerService.getBeerByBrewery(brewery.idBrewery).subscribe((beer) => {
        this.beers = beer;
        this.beerStyleService.getBeerStyles().subscribe(beerStyles => this.beerStyles = beerStyles);
      });
    });
  }

  onSubmitAddBeer(): void {
    this.beerStyleService.getBeerStyle(this.newBeerStyleId).subscribe(beerStyle => {
      this.newBeer = new Beer(this.newBeerName, this.newAlcVol, this.brewery, beerStyle);
      this.beerService.addBeer(this.newBeer).subscribe(() => {
          this.newBeer = null;
          window.location.reload();
        }
      );
    })
  }

  /*  onClick(event): void{
      this.newBeerStyle = event.target.value;
    }*/
}
