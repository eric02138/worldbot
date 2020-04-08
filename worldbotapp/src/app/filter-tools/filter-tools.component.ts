import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs'
import { CountryBot } from './../models/countrybot.model';
import { CountryBotService } from './../services/countrybot.service';
import { CountryBotState } from './../state/countrybot.state';
import { SetCountryBotCount } from './../actions/countrybot.actions'

@Component({
  selector: 'app-filter-tools',
  templateUrl: './filter-tools.component.html',
  styleUrls: ['./filter-tools.component.css']
})
export class FilterToolsComponent implements OnInit {

	@Select(CountryBotState.getSelectedCountryBot) selectedCountryBot$: Observable<CountryBot>

  constructor(private store: Store) {
  }

  ngOnInit() {
  }

  handleIncrementClick() {
    this.store.dispatch(new SetCountryBotCount('add'));
  }  

  handleDecrementClick() {
    this.store.dispatch(new SetCountryBotCount('subtract'));
  }  

}
