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

  public dataSource:Observable<any>;
  public asyncSelected:string = '';
  public typeaheadLoading:boolean = false;
  public typeaheadNoResults:boolean = false;

  public constructor(private airportLocationService: AirportLocationService) {
    this.dataSource = Observable.create((observer:any) => {
      // Runs on every search
      this.airportLocationService
      .getAirports(this.asyncSelected)
      .subscribe((result:any) => {
        console.log('RESULTTT ', result);
        observer.next(result.filter(item => {
          // var self = this;
          let query = new RegExp(this.asyncSelected, 'ig');
          if (!!item.City) {
            return item.City.match(query);
          }
        }))
      })
    })

    // }).mergeMap((token:string) => this.getAirportsAsObservable(token));
  }

  // public getAirportsAsObservable(token:string):Observable<any> {
  //   let query = new RegExp(token, 'ig');

  //   return Observable.of(
  //     this.dataSource.filter((airports:any) => {
  //       console.log(airports.City);
  //       return query.test(airports.City);
  //     })
  //   );
  // }

  public changeTypeaheadLoading(e:boolean):void {
    this.typeaheadLoading = e;
  }

  public changeTypeaheadNoResults(e:boolean):void {
    this.typeaheadNoResults = e;
  }

  public typeaheadOnSelect(e:TypeaheadMatch):void {
    console.log('Selected value: ', e.value);
  }

  destinationSelectedState: any = null;
  public destinationStateSelected(state) {
    this.destinationSelectedState = state
    console.log(this.destinationSelectedState)
  }
  originSelectedState: any = null;
  public originStateSelected(state) {
    this.originSelectedState = state
    console.log(this.originSelectedState)
  }
}
