import { CountryBot } from './../models/countrybot.model'

export class SetSelectedCountryBot {
	static readonly type = '[CountryBot] SetSelectedCountryBot'
	constructor(public payload: string) {}
}

export class PopulateCountryBots {
	static readonly type = '[CountryBot] Populate'
	constructor(public payload: object) {}
}

export class SetCountryBotCount {
	static readonly type = '[CountryBot] SetCountryBotCount'
	constructor(public payload: string) {}
}

export class IncrementCountryBot {
	static readonly type = '[CountryBot] Increment'
	constructor(public payload: CountryBot) {}
}

export class DecrementCountryBot {
	static readonly type = '[CountryBot] Decrement'
	constructor(public payload: CountryBot) {}
}

export type CountryBotActions = 
	| SetSelectedCountryBot
	| PopulateCountryBots
	| IncrementCountryBot
	| DecrementCountryBot