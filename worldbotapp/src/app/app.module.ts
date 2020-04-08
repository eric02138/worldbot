import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryBotState } from './state/countrybot.state';
import { CountryBotService } from './services/countrybot.service';

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MainDisplayComponent } from './main-display/main-display.component';
import { WorldMapComponent } from './world-map/world-map.component';
import { FilterToolsComponent } from './filter-tools/filter-tools.component';
import { CountryNameFormatter } from "./pipes/countryNameFormatter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainDisplayComponent,
    WorldMapComponent,
    FilterToolsComponent,
    CountryNameFormatter
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxsModule.forRoot([
      CountryBotState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()    
  ],
  providers: [CountryBotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
