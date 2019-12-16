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


  constructor(private countryService: CountryService) {
  }


  ngOnInit(): void {
    this.countryService.getAllCountries().subscribe((countries) => {
      this.countries = countries;
    });
  }

  ngOnDestroy(): void {
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
