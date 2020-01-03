import {Component, OnInit} from "@angular/core";
import {Beer} from "../../models/beer.model";
import {BeerService} from "../../services/beer.service";
declare const require: any;
const jsPDF = require('jspdf');
require('jspdf-autotable');

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

  generatePDF() {
    let doc = new jsPDF('l', 'pt');
    let columns = ["Beer Name", "Alc/Vol", "Brewery", "Beer Style", "Average Mark"];
    let rows = new Array<Array<any>>();
    for (let beer of this.beersToDisplay) {
      let row = [beer.beerName, beer.alcVol, beer.breweryByIdBrewery.breweryName,
        beer.beerStyleByIdBeerStyle.beerStyleName, beer.avgMark];
      rows.push(row);
    }
    doc.autoTable(columns, rows);
    doc.save('Rating.pdf')
  }
}
