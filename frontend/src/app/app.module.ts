import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CountryComponent} from './components/country/country.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavigationComponent} from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CountryComponent,
    NavigationComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
