import {Component, OnDestroy, OnInit} from '@angular/core';
import {Brewery} from "../../models/brewery.model";
import {BreweryService} from "../../services/brewery.service";

@Component({
  selector: 'breweries',
  templateUrl: 'breweries.component.html'
})
export class BreweriesComponent implements OnInit, OnDestroy{

  breweries: Brewery[];
  
  constructor(private breweryService: BreweryService) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.breweryService.getAllBreweries().subscribe((breweries) => {
      this.breweries = breweries;
    })
  }
}
