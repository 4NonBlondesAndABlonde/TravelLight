import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ng2-bootstrap/components/modal';
import { TypeaheadModule } from 'ng2-bootstrap/components/typeahead';

//App Root
import { AppComponent } from './app.component';

//Home page
import { HeaderComponent } from './firstPage/header.component';
import { SloganComponent } from './firstPage/slogan.component';
import { OptionsComponent } from './firstPage/options.component';
import { HomeComponent } from './firstPage/home.component';

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
    WalkCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule,
    TypeaheadModule,
    routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }