import { catchError, map } from 'rxjs/operators';

import { State, Action, StateContext, Selector } from '@ngxs/store';
import { CountryBot } from './../models/countrybot.model';
import { CountryBotService } from './../services/countrybot.service';
import * as countryBotActions from './../actions/countrybot.actions';


export class CountryBotStateModel {
	countrybots: CountryBot[];
	selectedCountryBot: CountryBot;
}

@State<CountryBotStateModel>({
  name: 'countrybots',
  defaults: {
  	countrybots: [],
  	selectedCountryBot: null
  }
})

export class CountryBotState {
	constructor(private countryBotService: CountryBotService) {}

	// New, returns entire CountryBot object
	@Selector()
	static getSelectedCountryBot(state: CountryBotStateModel) {
		if (state.selectedCountryBot) {
			return state.selectedCountryBot
		} else {
			return null
		}
	}

	@Selector()
	static getCountryBots(state: CountryBotStateModel) {
		return Object.assign([], state.countrybots);
		//return state.countrybots
	}

	@Selector()
	static selectedCountryBot(state: CountryBotStateModel): CountryBot{
		return state.countrybots.find(
			(countrybot: CountryBot) => countrybot.iso3cc === state.selectedCountryBot.iso3cc
		)
	}

	@Action(countryBotActions.SetSelectedCountryBot)
	setSelectedCountryBot(
		{ getState, patchState }: StateContext<CountryBotStateModel>, 
		{ payload }: countryBotActions.SetSelectedCountryBot
	) {
		const state = getState();
		let bot = state.countrybots.find(
			(countrybot: CountryBot) => countrybot.iso3cc === payload
		)
		patchState({ selectedCountryBot: bot })
	}

	@Action(countryBotActions.PopulateCountryBots)
	populateCountryBots(
		{ patchState }: StateContext<CountryBotStateModel>, 
		{ payload }: countryBotActions.PopulateCountryBots
	) {
		let countryBotArray = [];
		let payloadArray = Object.assign([], payload);
		payloadArray.forEach(item => {
			countryBotArray.push({'name': item['name'], 'count': 0, 'iso3cc': item['alpha3Code']})
		});
		patchState({ countrybots: countryBotArray })
	}	

	@Action(countryBotActions.SetCountryBotCount)
	setCountryBotCount(
		{ getState, patchState }: StateContext<CountryBotStateModel>, 
		{ payload }: countryBotActions.SetCountryBotCount
	) {
		const state = getState();
		let copyCountryBots = Object.assign([], state.countrybots);
		let index = copyCountryBots.findIndex((countrybot: CountryBot) => countrybot.iso3cc === state.selectedCountryBot.iso3cc)
		copyCountryBots[index].count = this.changeCount(copyCountryBots[index].count, payload);
		patchState({ countrybots: copyCountryBots })
	}

	changeCount(count: number, addOrSubtract: string) {
		const min = 0;
		const max = 100;
		let plusOrMinus = 1;
		if (addOrSubtract != 'add'){
			plusOrMinus = -1;
		}
		let result = count + plusOrMinus;
		if (result < min) {
			return min;
		}
		if (result > max) {
			return max;
		}
		return result;
	}

	changeColor(count: number) {
		switch(true) {
			case (count == 0): 
				return "#666666";
				break;
			case (count < 10):
				return "#669966";
				break;
			case (count < 20):
				return "#66cc66";
				break;
			case (count > 20):
				return "#66ff66";
				break;
			default:
				return "#666666";
				break;
		}
	}
}