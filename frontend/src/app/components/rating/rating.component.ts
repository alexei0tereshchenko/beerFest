import {Component, OnInit} from "@angular/core";
import {Beer} from "../../models/beer.model";
import {BeerService} from "../../services/beer.service";

@Component({
  selector: 'rating',
  templateUrl: 'rating.component.html'
})
export class RatingComponent implements OnInit{

  beers: Beer[];

  constructor(private beerService: BeerService) {
  }

  ngOnInit(): void {
    this.beerService.getRating().subscribe(beer =>
      this.beers = beer);
  }

}
