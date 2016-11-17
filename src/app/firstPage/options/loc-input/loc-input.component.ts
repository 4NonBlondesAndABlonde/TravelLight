import { Component, OnInit } from '@angular/core';
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
    console.log('Selected value: ', e.value);
  }
}
