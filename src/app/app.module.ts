import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ng2-bootstrap/components/modal';
import { TypeaheadModule } from 'ng2-bootstrap/components/typeahead';
import { DatepickerModule } from 'ng2-bootstrap/components/datepicker';
import { ChartsModule } from '../../node_modules/ng2-charts/ng2-charts';


//App Root
import { AppComponent } from './app.component';

//Home page
import { HomeComponent } from './firstPage/home.component';
import { HeaderComponent } from './firstPage/header/header.component';
import { OptionsComponent } from './firstPage/options/options.component';
import { LocInputComponent } from './firstPage/options/loc-input/loc-input.component';
import { DateInputComponent } from './firstPage/options/date-input/date-input.component';
import { TravelersComponent } from './firstPage/options/travelers/travelers.component';
import { SloganComponent } from './firstPage/slogan/slogan.component';

//Results page
import { ResultsComponent } from './secondPage/second.page.component';
import { BannerComponent } from './secondPage/banner.component';
import { CarCardComponent } from './secondPage/car-card.component';
import { AirplaneCardComponent } from './secondPage/airplane-card.component';
import { SearchBarComponent} from './secondPage/search-bar.component';
import { CarStatsComponent } from './secondPage/car-stats.component';
import { PlaneStatsComponent } from './secondPage/plane-stats.component';
import { BikeCardComponent } from './secondPage/bike-card.component';
import { TrainCardComponent } from './secondPage/train-card.component';
import { WalkCardComponent } from './secondPage/walk-card.component';
import { RadarChartComponent } from './secondPage/radar-chart.component'
import { PreferenceSliderComponent } from './secondPage/preference-slider.component'
import { PreferenceSliderContainerComponent } from './secondPage/preference-slider-container.component'

//Services
import { CostInfoService } from './secondPage/cost-info.service';
import { AirportLocationService } from './firstPage/airport-location.service';
import { SendCostDataService } from './send-cost-data.service'
import { AppRoutingModule } from './app-routing.module';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { PassDataService } from './pass-data.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SloganComponent,
    OptionsComponent,
    ResultsComponent,
    BannerComponent,
    CarCardComponent,
    AirplaneCardComponent,
    SearchBarComponent,
    CarStatsComponent,
    PlaneStatsComponent,
    BikeCardComponent,
    TrainCardComponent,
    WalkCardComponent,
    LocInputComponent,
    DateInputComponent,
    TravelersComponent,
    RadarChartComponent,
    PreferenceSliderComponent,
    PreferenceSliderContainerComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ModalModule,
    TypeaheadModule,
    DatepickerModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [
    CostInfoService,
    AirportLocationService,
    PassDataService,
    SendCostDataService,
    {provide:LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }