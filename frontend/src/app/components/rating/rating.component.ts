import {Component, OnInit} from "@angular/core";
import {Beer} from "../../models/beer.model";
import {BeerService} from "../../services/beer.service";

@Component({
  selector: 'rating',
  templateUrl: 'rating.component.html'
})
export class RatingComponent implements OnInit {

  beers: Beer[];

  beersToDisplay: Beer[];

  fromAlcVol: number;

  toAlcVol: number;

  fromAvgMark: number;

  toAvgMark: number;

  constructor(private beerService: BeerService) {
  }

  ngOnInit(): void {
    this.beerService.getRating().subscribe(beer => {
      this.beers = beer;
      this.beersToDisplay = beer;
    });
  }

  sortByBeer() {
    this.beersToDisplay.sort((a, b) => (a.beerName > b.beerName ? 1 : -1));
  }

  sortByBrewery() {
    this.beersToDisplay.sort((a, b) => (a.breweryByIdBrewery.breweryName > b.breweryByIdBrewery.breweryName ? 1 : -1));
  }

  sortByBeerStyle() {
    this.beersToDisplay.sort((a, b) => (a.beerStyleByIdBeerStyle.beerStyleName > b.beerStyleByIdBeerStyle.beerStyleName ? 1 : -1));
  }

  onSubmitFilterAlcVol() {
    this.beersToDisplay = this.beers.filter(beer => (beer.alcVol >= this.fromAlcVol && beer.alcVol <= this.toAlcVol));
  }

  onSubmitFilterAvgMark() {
    this.beersToDisplay = this.beers.filter(beer => beer.avgMark >= this.fromAvgMark && beer.avgMark <= this.toAvgMark);
  }
}
