import {Component, OnInit} from "@angular/core";
import {BeerStyle} from "../../models/beerStyle.model";
import {BeerStylesService} from "../../services/beerStyles.service";

@Component({
  selector: 'beer-styles',
  templateUrl: 'beerStyles.component.html'
})
export class BeerStylesComponent implements OnInit {

  beerStyles: BeerStyle[];

  constructor(private beerStyleService: BeerStylesService) {

  }

  ngOnInit(): void {
    this.beerStyleService.getBeerStyles().subscribe(beerStyles =>
      this.beerStyles = beerStyles);
  }

}
