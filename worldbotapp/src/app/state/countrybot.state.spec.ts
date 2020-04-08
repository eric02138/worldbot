import { TestBed, inject } from "@angular/core/testing";
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { CountryBotState } from './countrybot.state';
import { CountryBotService } from './../services/countrybot.service';

describe('Change Count', () => {

  let countryBotState: CountryBotState;
  //let countryBot = {'name': 'United States', 'iso3cc': 'USA', 'count': 1}

  beforeEach(() => {
    TestBed.configureTestingModule({
    	//imports: NgxsModule.forRoot([CountryBotState]),
    	imports: [HttpClientModule], 
    	//providers: [CountryBotState]
    	providers: [CountryBotState, CountryBotService, HttpClient] 
    });
    countryBotState = TestBed.get(CountryBotState);
  });  

  it('countryBotState.changeCount(1, add) results in two', () => {
  	  expect(countryBotState.changeCount(1, 'add')).toEqual(2);
  	}
  )

  it('results in one', () => {
  	  expect(countryBotState.changeCount(2, 'subtracasdas')).toEqual(1);
  });

  it('countryBotState.changeCount(1, subtract) results in min', () => {
    expect(countryBotState.changeCount(0, 'subtract')).toEqual(0);
  });

  it('countryBotState.changeCount(100, add) results in max', () => {
    expect(countryBotState.changeCount(100, 'add')).toEqual(100);
  });

});