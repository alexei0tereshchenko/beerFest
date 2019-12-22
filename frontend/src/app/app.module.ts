import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CountriesComponent} from './components/countries/countries.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavigationComponent} from './components/navigation/navigation.component';
import {BreweriesComponent} from "./components/breweries/breweries.component";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {CitiesComponent} from "./components/cities/cities.component";
import {BreweriesByCityComponent} from "./components/breweriesByCity/breweriesByCity.component";
import {BeerComponent} from "./components/beer/beer.component";
import {BeerStylesComponent} from "./components/beerStyles/beerStyles.component";
import {GroupsComponent} from "./components/groups/groups.component";
import {BeerByBeerStyleComponent} from "./components/beerByBeerStyle/beerByBeerStyle.component";
import {TastersComponent} from "./components/tasters/tasters.component";
import {TastersByGroupComponent} from "./components/tastersByGroup/tastersByGroup.component";
import {MarksByBeerComponent} from "./components/marksByBeer/marksByBeer.component";
import {MarksByTasterComponent} from "./components/marksByTaster/marksByTaster.component";
import {RatingComponent} from "./components/rating/rating.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    NavigationComponent,
    BreweriesComponent,
    CitiesComponent,
    BreweriesByCityComponent,
    BeerComponent,
    BeerStylesComponent,
    GroupsComponent,
    BeerByBeerStyleComponent,
    TastersComponent,
    TastersByGroupComponent,
    MarksByBeerComponent,
    MarksByTasterComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ],
  exports: [
    CountriesComponent,
    NavigationComponent,
    BreweriesComponent,
    CitiesComponent,
    BreweriesByCityComponent,
    BeerComponent,
    BeerStylesComponent,
    GroupsComponent,
    BeerByBeerStyleComponent,
    TastersComponent,
    TastersByGroupComponent,
    MarksByBeerComponent,
    MarksByTasterComponent,
    RatingComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
