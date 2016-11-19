import { Component, OnInit, EventEmitter, DoCheck, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AirportLocationService } from '../../airport-location.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { TypeaheadMatch } from '../../../../../node_modules/ng2-bootstrap/components/typeahead/typeahead-match.class';

@Component({
  selector: 'app-loc-input',
  templateUrl: './loc-input.component.html',
  styleUrls: ['./loc-input.component.css']
})

export class LocInputComponent {

  @Output() locNotify: EventEmitter<any> = new EventEmitter();

  ngDoCheck() {
    this.locNotify.emit(this.information)
  }

  public stateCtrl:FormControl = new FormControl();

  public myForm:FormGroup = new FormGroup({
    state: this.stateCtrl
  });

  public dataSource1:Observable<any>;
  public dataSource2:Observable<any>;
  public originAirport:string = '';
  public destinationAirport:string = '';
  public typeaheadOriginLoading:boolean = false;
  public typeaheadOriginNoResults:boolean = false;
  public typeaheadDestinationLoading:boolean = false;
  public typeaheadDestinationNoResults:boolean = false;
  public information:Object = {};
  
  public constructor(private airportLocationService: AirportLocationService) {
    this.dataSource1 = Observable.create((observer:any) => {
      // Runs on every search
      this.airportLocationService
      .getAirports(this.originAirport)
      .subscribe((result:any) => {
        observer.next(result.filter(item => {
          let query = new RegExp(this.originAirport, 'ig');
          if (!!item.City) {
            return item.City.match(query);
          }
        }))
      })
    })
    this.dataSource2 = Observable.create((observer:any) => {
      // Runs on every search
      this.airportLocationService
      .getAirports(this.destinationAirport)
      .subscribe((result:any) => {
        observer.next(result.filter(item => {
          let query = new RegExp(this.destinationAirport, 'ig');
          if (!!item.City) {
            return item.City.match(query);
          }
        }))
      })
    })
  }

  onDateNotify(payload:string) {
    this.information.date = payload;
  }

  onTravelersNotify(payload:number) {
    this.information.travelers = payload;
  }
 
  public changeTypeaheadOriginLoading(e:boolean):void {
    this.typeaheadOriginLoading = e;
  }
 
  public changeTypeaheadOriginNoResults(e:boolean):void {
    this.typeaheadOriginNoResults = e;
  }

  public changeTypeaheadDestinationLoading(e:boolean):void {
    this.typeaheadDestinationLoading = e;
  }
 
  public changeTypeaheadDestinationNoResults(e:boolean):void {
    this.typeaheadDestinationNoResults = e;
  }
 
  public typeaheadOnSelect(e:TypeaheadMatch):void {
    let type:string;
    if (e.value === this.originAirport) {
      this.information.originAirportCode = e.item.FAA_IATA
      this.information.originLat = e.item.Latitude
      this.information.originLng = e.item.Longitude
    } else if (e.value === this.destinationAirport) {
      this.information.destinationAirportCode = e.item.FAA_IATA
      this.information.destinationLat = e.item.Latitude
      this.information.destinationLng = e.item.Longitude
    }
  }
}
