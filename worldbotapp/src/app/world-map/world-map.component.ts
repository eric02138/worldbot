import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs'
import { CountryBot } from './../models/countrybot.model';
import { CountryBotService } from './../services/countrybot.service';
import { CountryBotState } from './../state/countrybot.state';
import { SetSelectedCountryBot, 
         PopulateCountryBots } from './../actions/countrybot.actions'

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})
export class WorldMapComponent implements OnInit {

  @Select(CountryBotState.getSelectedCountryBot) selectedCountryBot$: Observable<CountryBot>
  //@Select(CountryBotState.getCountryBots) countryBots$: Observable<CountryBot[]>

  constructor(
    private store: Store,
    private countryBotService: CountryBotService
  ) {}

  ngOnInit() {
    this.countryBotService.getCountryBots().subscribe(
      resp => {
        this.store.dispatch(new PopulateCountryBots(resp))
      },
      err => console.log(err)
    );
  }

  handleCountryClick(event) {
  	let iso3CountryCode = event.target.parentElement.className.baseVal.split(" ")[1];
    this.store.dispatch(new SetSelectedCountryBot(iso3CountryCode));
  }
}