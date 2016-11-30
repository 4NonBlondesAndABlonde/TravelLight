import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ng2-bootstrap/components/modal';
import { TypeaheadModule } from 'ng2-bootstrap/components/typeahead';
import { DatepickerModule } from 'ng2-bootstrap/components/datepicker';
import { ButtonsModule } from 'ng2-bootstrap/components/buttons'
import { ChartsModule } from '../../node_modules/ng2-charts/ng2-charts';
import { AgmCoreModule } from 'angular2-google-maps/core'
import { MdSliderModule } from '@angular2-material/slider'
import { CarouselModule } from 'ng2-bootstrap/components/carousel';

// App Root
import { AppComponent } from './app.component';


//Home page
import { HomeComponent } from './landingPage/home.component';
import { HeaderComponent } from './landingPage/header/header.component';
import { OptionsComponent } from './landingPage/options/options.component';
import { DriveLocInputComponent } from './landingPage/options/drive-loc-input/drive-loc-input.component'
import { LocInputComponent } from './landingPage/options/loc-input/loc-input.component';
import { DateInputComponent } from './landingPage/options/date-input/date-input.component';
import { TravelersComponent } from './landingPage/options/travelers/travelers.component';
import { SloganComponent } from './landingPage/slogan/slogan.component';


// Results page
import { ResultsComponent } from './secondPage/second.page.component';
import { BannerComponent } from './secondPage/nav/banner.component';
import { CarCardComponent } from './secondPage/cards/car/car-card.component';
import { AirplaneCardComponent } from './secondPage/cards/plane/airplane-card.component';
import { SearchBarComponent} from './secondPage/nav/searchbar/search-bar.component';
import { CarStatsComponent } from './secondPage/cards/car/car-stats.component';
import { TrainStatsComponent } from './secondPage/cards/train/train-stats.component';
import { WalkStatsComponent } from './secondPage/cards/walk/walk-stats.component';
import { PlaneStatsComponent } from './secondPage/cards/plane/plane-stats.component';
import { TrainCardComponent } from './secondPage/cards/train/train-card.component';
import { WalkCardComponent } from './secondPage/cards/walk/walk-card.component';
import { RadarChartComponent } from './secondPage/comparison/chart/radar-chart.component'
import { PreferenceSliderComponent } from './secondPage/comparison/sliders/preference-slider.component';
import { PreferenceSliderContainerComponent } from './secondPage/comparison/sliders/preference-slider-container.component';
import { CardsComponent } from './secondPage/cards/cards.component';
import { TravelpathComponent } from './secondPage/path/travelpath.component';
import { ComparisonCardComponent } from './secondPage/comparison/comparison-card.component';
import { AdvancedOptionsComponent } from './secondPage/advanced-options/advanced-options.component';

// Services
import { CostInfoService } from './secondPage/cost-info.service';
import { AirportLocationService } from './landingPage/airport-location.service';
import { SendCostDataService } from './send-cost-data.service'
import { AppRoutingModule } from './app-routing.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './landingPage/carousel/carousel.component';
import { AboutComponent } from './landingPage/about/about.component';
import { FooterComponent } from './footer/footer.component';

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
    TrainStatsComponent,
    PlaneStatsComponent,
    WalkStatsComponent,
    TrainCardComponent,
    WalkCardComponent,
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
    NavbarComponent,
    CarouselComponent,
    AboutComponent,
    FooterComponent,
    AdvancedOptionsComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    ButtonsModule,
    TypeaheadModule,
    DatepickerModule,
    AppRoutingModule,
    ChartsModule,
    MdSliderModule,
    CarouselModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDeVMNxaPKG4Z9pzCGVf0FVOUmSGYXhTEs',
      libraries: ['places']
    })
  ],
  providers: [
    CostInfoService,
    AirportLocationService,
    SendCostDataService,
    {provide:LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}