import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDisplayComponent } from './main-display.component';
import { FilterToolsComponent } from './../filter-tools/filter-tools.component'
import { WorldMapComponent } from './../world-map/world-map.component'
import { CountryNameFormatter } from './../pipes/countryNameFormatter.pipe';

// describe('MainDisplayComponent', () => {
//   let component: MainDisplayComponent;
//   let fixture: ComponentFixture<MainDisplayComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ 
//         MainDisplayComponent,
//         FilterToolsComponent,
//         WorldMapComponent
//       ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(MainDisplayComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
