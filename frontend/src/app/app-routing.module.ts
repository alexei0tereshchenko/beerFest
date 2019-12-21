import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {BreweriesComponent} from "./components/breweries/breweries.component";
import {NgModule} from "@angular/core";
import {CountriesComponent} from "./components/countries/countries.component";
import {CitiesComponent} from "./components/cities/cities.component";

const routes: Routes = [
  {path: '', redirectTo: '/countries', pathMatch: 'full'},
  {path: 'countries', component: CountriesComponent},
  {path: 'breweries', component: BreweriesComponent},
  {path: 'country/:id', component: CitiesComponent}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule{}
