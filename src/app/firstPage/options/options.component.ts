import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from '../../../../node_modules/ng2-bootstrap/components/modal/modal.component';
import { AirportLocationService } from '../airport-location.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})

export class OptionsComponent {
  // constructor(private airportLocationService: AirportLocationService) {}

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
