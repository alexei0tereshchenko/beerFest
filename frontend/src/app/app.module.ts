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

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    NavigationComponent,
    BreweriesComponent,
    CitiesComponent
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
    CitiesComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
