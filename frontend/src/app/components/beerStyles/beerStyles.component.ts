import {Component, OnInit} from "@angular/core";
import {BeerStyle} from "../../models/beerStyle.model";
import {BeerStylesService} from "../../services/beerStyles.service";

@Component({
  selector: 'beer-styles',
  templateUrl: 'beerStyles.component.html'
})
export class BeerStylesComponent implements OnInit {

  beerStyles: BeerStyle[];

  newBeerStyleName: string;

  constructor(private beerStyleService: BeerStylesService) {

  }

  ngOnInit(): void {
    this.beerStyleService.getBeerStyles().subscribe(beerStyles =>
      this.beerStyles = beerStyles);
  }

  onSubmitAddBeerStyle(): void {
    this.beerStyleService.addBeerStyle(new BeerStyle(this.newBeerStyleName)).subscribe(() => {
      this.newBeerStyleName = null;
      window.location.reload();
    })
  }
}
