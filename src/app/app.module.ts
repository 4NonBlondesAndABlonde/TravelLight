import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive, OnInit, Output, EventEmitter, Input, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ng2-bootstrap/components/modal';
import { TypeaheadModule } from 'ng2-bootstrap/components/typeahead';
import { DatepickerModule } from 'ng2-bootstrap/components/datepicker';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { SloganComponent } from './slogan.component';
import { OptionsComponent } from './options/options.component';
import { DatesComponent } from './dates/dates.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SloganComponent,
    OptionsComponent,
    DatesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule,
    DatepickerModule,
    TypeaheadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
