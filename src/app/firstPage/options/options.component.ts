import { Component, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from '../../../../node_modules/ng2-bootstrap/components/modal/modal.component';
import { AirportLocationService } from '../airport-location.service';
import { CostInfoService } from '../../secondPage/cost-info.service';
import { SendCostDataService } from '../../send-cost-data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css'],
  providers: [CostInfoService]
})

export class OptionsComponent {
  // information = {
  //   originLat: 35.04,
  //   originLng: -106.609,
  //   destinationLat:37.618,
  //   destinationLng:-122.374,
  //   travelers: 2,
  //   date: '2016-11-20',
  //   originAirportCode: 'ABQ',
  //   destinationAirportCode: 'SFO'
  // };
  private information:any = {};
  constructor(private costInfoService: CostInfoService, 
  private sendCostDataService: SendCostDataService,
  private router: Router) {

  }

  onLocNotify(payload:Object) {
    this.information = Object.assign(this.information, payload);
  }

  onDateNotify(payload:string) {
    this.information.date = payload;
  }

  onTravelersNotify(payload:number) {
    this.information.travelers = payload;
  }

  onClick() {
    console.log('sending ' + this.information)
    this.costInfoService.sendUserInput(this.information)
    .subscribe(results => {
      this.sendCostDataService.sendData(results)
      this.router.navigate(['results'])
    })
  }



  @ViewChild('childModal') public childModal:ModalDirective;
 
  public showChildModal():void {
    this.childModal.show();
  }
 
  public hideChildModal():void {
    this.childModal.hide();
  }

  // ngOnInit() {
  //   this.airportLocationService
  //   .getAirports(S)
  //   .subscribe(airports => console.log(airports));
  // }

}
