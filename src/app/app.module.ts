import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ng2-bootstrap/components/modal';
import { TypeaheadModule } from 'ng2-bootstrap/components/typeahead';
import { DatepickerModule } from 'ng2-bootstrap/components/datepicker';
import { ChartsModule } from 'ng2-charts/ng2-charts';


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
import { D3VisComponent } from './secondPage/d3-vis.component';
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


import { routing } from './app.routing';


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
    D3VisComponent,
    CarStatsComponent,
    PlaneStatsComponent,
    BikeCardComponent,
    TrainCardComponent,
    WalkCardComponent,
<<<<<<< ab00cf7e65f15db97c5e9b296f967ff152d2d056
<<<<<<< bdbcdefecea0477b07ed0e63d6a12e8bde18b3dd
    LocInputComponent,
    DateInputComponent,
    TravelersComponent
=======
    RadarChartComponent
>>>>>>> merge
=======
    RadarChartComponent,
    PreferenceSliderComponent,
    PreferenceSliderContainerComponent
>>>>>>> starting slider
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule,
    TypeaheadModule,
<<<<<<< bdbcdefecea0477b07ed0e63d6a12e8bde18b3dd
    DatepickerModule,
    routing
=======
    routing,
    ChartsModule
>>>>>>> merge
  ],
  providers: [CostInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }