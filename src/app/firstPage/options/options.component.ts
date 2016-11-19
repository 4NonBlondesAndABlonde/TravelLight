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
  information = {
    originLat: 0,
    originLng: 0,
    destinationLat:50,
    destinationLng:50,
    travelers: 2,
    date: new Date(2016,11,11),
    originAirportCode: 'ABQ',
    destinationAirportCode: 'SFO'
  };
  constructor(private costInfoService: CostInfoService, 
  private sendCostDataService: SendCostDataService,
  private router: Router) {

  }

  onClick() {
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
