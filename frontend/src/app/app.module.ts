import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
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
    GroupsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  exports: [
    CountriesComponent,
    NavigationComponent,
    BreweriesComponent,
    CitiesComponent,
    BreweriesByCityComponent,
    BeerComponent,
    BeerStylesComponent,
    GroupsComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
