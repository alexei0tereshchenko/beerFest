import {Component, OnInit} from "@angular/core";
import {Brewery} from "../../models/brewery.model";
import {Beer} from "../../models/beer.model";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {BreweryService} from "../../services/brewery.service";
import {BeerService} from "../../services/beer.service";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'beer',
  templateUrl: 'beer.component.html'
})
export class BeerComponent implements OnInit{

  brewery: Brewery;

  beers: Beer[];

  constructor(
    private route: ActivatedRoute,
    private breweryService: BreweryService,
    private beerService: BeerService
  ){}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.breweryService.getBrewery(+params.get('id'))
      )).subscribe(brewery => {
      this.brewery = brewery;
      this.beerService.getBeer(brewery.idBrewery).subscribe((beer) => {
        this.beers = beer;
      });
    });
  }

}
