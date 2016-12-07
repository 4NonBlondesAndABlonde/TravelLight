import { Component, ElementRef, ViewChild, Input, Output, DoCheck, Directive, AfterViewInit, OnDestroy, EventEmitter } from '@angular/core';
import { ModalDirective } from '../../../node_modules/ng2-bootstrap/components/modal/modal.component';
import { FormBuilder, Validators, FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AirportLocationService } from '../landingPage/airport-location.service';
import { CostInfoService } from '../secondPage/cost-info.service';
import { SendCostDataService } from '../send-cost-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public tripForm: FormGroup
  private information:any = {};
  private showLocalFields:boolean = false;
  private showAirportFields:boolean = false;
  private valid:boolean = false;

  constructor(private costInfoService: CostInfoService, 
  private sendCostDataService: SendCostDataService,
  private router: Router) { }

  ngDoCheck() {
    if (this.information.tripType && this.information.date && this.information.travelers) {
      if (this.information.tripType === 'distant') {
        if (this.information.originAirportCode && this.information.destinationAirportCode) {
          this.valid = true;
        }
      } else {
        this.valid = true;
      }
    }
  }

  onDriveLocNotify(payload:Object) {
    this.information = Object.assign(this.information, payload)
    if (this.information.originDriveLatitude && this.information.originDriveLongitude && this.information.destinationDriveLatitude && this.information.destinationDriveLongitude) {
      this.showLocalFields = true;
      let dist = this.costInfoService.getDistance([this.information.originDriveLatitude, this.information.originDriveLongitude], [this.information.destinationDriveLatitude, this.information.destinationDriveLongitude])
      if (dist > 100) {
        this.showAirportFields = true;
        this.information.tripType = 'distant';
      } else {
        this.showAirportFields = false;
        this.information.tripType = 'local';
      }
    } else {
      this.showLocalFields = false;
    }
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
    setTimeout(() => this.router.navigate(['loading']), 0)
    this.costInfoService.sendUserInput(this.information)
    //this.costInfoService.sendStubData()
    .subscribe(results => {
      this.sendCostDataService.sendData(results)
      setTimeout(() => this.router.navigate(['results']), 0)
    })
  }

  @ViewChild('mdModal') public childModal:ModalDirective;
 
  public showModal():void {
    this.childModal.show();
  }
 
  public hideModal():void {
    this.childModal.hide();
  }
}

// @Directive({
//   selector: '[bsModal]',
//   exportAs: 'bs-modal'
// })
// export class ModalDirective implements AfterViewInit, OnDestroy {
//   @Input()
//   public set config(conf:ModalOptions) {
//     this._config = this.getConfig(conf);
//   };

//   @Output() public onShow:EventEmitter<ModalDirective> = new EventEmitter();
//   @Output() public onShown:EventEmitter<ModalDirective> = new EventEmitter();
//   @Output() public onHide:EventEmitter<ModalDirective> = new EventEmitter();
//   @Output() public onHidden:EventEmitter<ModalDirective> = new EventEmitter();

// }