import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CountriesComponent} from './components/country/countries.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavigationComponent} from './components/navigation/navigation.component';
import {BreweriesComponent} from "./components/breweries/breweries.component";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    NavigationComponent,
    BreweriesComponent
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
    BreweriesComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
