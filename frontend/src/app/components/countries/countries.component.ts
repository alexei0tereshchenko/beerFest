import {Component, OnDestroy, OnInit} from '@angular/core';
import {Country} from '../../models/country.model';
import {CountryService} from '../../services/country.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'country',
  templateUrl: 'countries.component.html'
})
export class CountriesComponent implements OnInit, OnDestroy {
  title = 'Countries';

  countries: Country[];

  //formAddCountry: FormGroup;
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
  /*OnButtonClick(): void {
    this.count = this.form.get('countOfNumbers').value;
    this.input = new Input(this.form.get('countOfNumbers').value,
      this.form.get('fromNumber').value,
      this.form.get('toNumber').value,
      this.form.get('multiNumber').value
    );
    this.countryService.getRandom(this.input).subscribe((list) => {
      this.filteredNumbers = list;
      this.missCount = +this.count - list.length;
    });
  }*/
}
