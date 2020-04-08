import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StateStream, Select } from '@ngxs/store';
import { InternalStateOperations } from '@ngxs/internal/state-operations';

import { FilterToolsComponent } from './filter-tools.component';
import { CountryNameFormatter } from './../pipes/countryNameFormatter.pipe';
import { SetCountryBotCount } from './../actions/countrybot.actions'

// describe('FilterToolsComponent', () => {
//   let component: FilterToolsComponent;
//   let fixture: ComponentFixture<FilterToolsComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ FilterToolsComponent, CountryNameFormatter ],
//       providers: [ InternalStateOperations, Store, StateStream ]
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(FilterToolsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
