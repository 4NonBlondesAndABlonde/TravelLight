import { Component, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from '../../../../node_modules/ng2-bootstrap/components/modal/modal.component';
import { AirportLocationService } from '../airport-location.service';
import { CostInfoService } from '../../resultsPage/cost-info.service';
import { SendCostDataService } from '../../send-cost-data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})

export class OptionsComponent {

  private information:any = {};
  constructor(private costInfoService: CostInfoService, 
  private sendCostDataService: SendCostDataService,
  private router: Router) {

  }

  onDriveLocNotify(payload:Object) {
    this.information = Object.assign(this.information, payload)
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
    //this.costInfoService.sendUserInput(this.information)
    this.costInfoService.sendStubData()
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
