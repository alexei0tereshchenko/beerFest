import {Component, OnDestroy, OnInit} from '@angular/core';
import {Country} from '../../models/country.model';
import {CountryService} from '../../services/country.service';

@Component({
  selector: 'country',
  templateUrl: 'countries.component.html'
})
export class CountriesComponent implements OnInit, OnDestroy {
  title = 'Countries';

  countries: Country[];

  newCountryName: string;
  newCountry: Country;

  constructor(private countryService: CountryService) {
  }


  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe((countries) => {
      this.countries = countries;
    });
  }

  ngOnDestroy(): void {
  }

  onSubmitAddCountry(): void{
    this.newCountry = new Country(this.newCountryName);
    this.countryService.addNewCountry(this.newCountry).subscribe((country) =>{
      this.countries.push(country);
      this.newCountryName = null;
      this.newCountry = null;
      window.location.reload();
    });
  }
}
