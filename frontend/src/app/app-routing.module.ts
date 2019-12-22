import {RouterModule, Routes} from "@angular/router";
import {BreweriesComponent} from "./components/breweries/breweries.component";
import {NgModule} from "@angular/core";
import {CountriesComponent} from "./components/countries/countries.component";
import {CitiesComponent} from "./components/cities/cities.component";
import {BreweriesByCityComponent} from "./components/breweriesByCity/breweriesByCity.component";
import {BeerComponent} from "./components/beer/beer.component";
import {BeerStylesComponent} from "./components/beerStyles/beerStyles.component";
import {GroupsComponent} from "./components/groups/groups.component";
import {BeerByBeerStyleComponent} from "./components/beerByBeerStyle/beerByBeerStyle.component";
import {TastersComponent} from "./components/tasters/tasters.component";
import {TastersByGroupComponent} from "./components/tastersByGroup/tastersByGroup.component";
import {MarksByTasterComponent} from "./components/marksByTaster/marksByTaster.component";
import {MarksByBeerComponent} from "./components/marksByBeer/marksByBeer.component";
import {RatingComponent} from "./components/rating/rating.component";

const routes: Routes = [
  {path: '', redirectTo: '/countries', pathMatch: 'full'},
  {path: 'countries', component: CountriesComponent},
  {path: 'breweries', component: BreweriesComponent},
  {path: 'country/:id', component: CitiesComponent},
  {path: 'city/:id', component: BreweriesByCityComponent},
  {path: 'brewery/:id', component: BeerComponent},
  {path: 'beerStyles', component: BeerStylesComponent},
  {path: 'groups', component: GroupsComponent},
  {path: 'beerStyle/:id', component: BeerByBeerStyleComponent},
  {path: 'beers', component: TastersComponent},
  {path: 'group/:id', component: TastersByGroupComponent},
  {path: 'taster/:id', component: MarksByTasterComponent},
  {path: 'beer/:id', component: MarksByBeerComponent},
  {path: 'rating', component: RatingComponent}
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
