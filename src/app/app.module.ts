import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ng2-bootstrap/components/modal';
import { TypeaheadModule } from 'ng2-bootstrap/components/typeahead';
import { DatepickerModule } from 'ng2-bootstrap/components/datepicker';
import { ChartsModule } from '../../node_modules/ng2-charts/ng2-charts';
import { AgmCoreModule } from 'angular2-google-maps/core'

//App Root
import { AppComponent } from './app.component';

//Home page
import { HomeComponent } from './firstPage/home.component';
import { HeaderComponent } from './firstPage/header/header.component';
import { OptionsComponent } from './firstPage/options/options.component';
import { DriveLocInputComponent } from './firstPage/options/drive-loc-input/drive-loc-input.component'
import { LocInputComponent } from './firstPage/options/loc-input/loc-input.component';
import { DateInputComponent } from './firstPage/options/date-input/date-input.component';
import { TravelersComponent } from './firstPage/options/travelers/travelers.component';
import { SloganComponent } from './firstPage/slogan/slogan.component';

//Results page
import { ResultsComponent } from './resultsPage/second.page.component';
import { BannerComponent } from './resultsPage/banner.component';
import { SearchBarComponent} from './resultsPage/search-bar.component';
import { CardStatsComponent } from './resultsPage/cards/cardstats/card-stats.component';
import { RadarChartComponent } from './resultsPage/radar-chart.component'
import { PreferenceSliderComponent } from './resultsPage/preference-slider.component'
import { PreferenceSliderContainerComponent } from './resultsPage/preference-slider-container.component'
import { CardsComponent } from './resultsPage/cards/cards.component'
import { TravelpathComponent } from './resultsPage/travelpath.component';
import { ComparisonCardComponent } from './resultsPage/comparison-card.component';
import { SingleCardComponent } from './resultsPage/cards/singlecard/single-card.component';
//won't need
import { CarStatsComponent } from './resultsPage/cards/car/car-stats.component';
import { TrainStatsComponent } from './resultsPage/cards/train/train-stats.component';
import { WalkStatsComponent } from './resultsPage/cards/walk/walk-stats.component';
import { PlaneStatsComponent } from './resultsPage/cards/plane/plane-stats.component';


//Services
import { CostInfoService } from './resultsPage/cost-info.service';
import { AirportLocationService } from './firstPage/airport-location.service';
import { SendCostDataService } from './send-cost-data.service'
import { AppRoutingModule } from './app-routing.module';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { PassDataService } from './pass-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SloganComponent,
    OptionsComponent,
    ResultsComponent,
    BannerComponent,
    SearchBarComponent,
    LocInputComponent,
    DateInputComponent,
    TravelersComponent,
    RadarChartComponent,
    PreferenceSliderComponent,
    PreferenceSliderContainerComponent,
    CardsComponent,
    TravelpathComponent,
    ComparisonCardComponent,
    DriveLocInputComponent,
    SingleCardComponent,
    CardStatsComponent,
//won't need
    CarStatsComponent,
    TrainStatsComponent,
    PlaneStatsComponent,
    WalkStatsComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    TypeaheadModule,
    DatepickerModule,
    AppRoutingModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDeVMNxaPKG4Z9pzCGVf0FVOUmSGYXhTEs',
      libraries: ['places']
    })
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