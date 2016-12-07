import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ModalDirective } from '../../../../node_modules/ng2-bootstrap/components/modal/modal.component';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SendCostDataService } from '../../send-cost-data.service';

@Component({
  selector: 'app-advanced-options',
  templateUrl: './advanced-options.component.html',
  styleUrls: ['./advanced-options.component.css']
})
export class AdvancedOptionsComponent implements OnInit {

  public distantOptionsForm: FormGroup;
  public localOptionsForm: FormGroup;
  private currentData:{data:{data:number[]}[], normalizedData:{data:number[]}[]};
  private showHelpInfo: Boolean = false;
  private showCar: Boolean = false;

  constructor(private sendCostDataService: SendCostDataService,
              private _fb: FormBuilder) { }

  ngOnInit() { 
    this.currentData = this.costData;
    this.distantOptionsForm = this._fb.group({
      carHours: Math.floor(this.costData.data[0].data[1]),
      carMins: Math.floor(60 * (this.costData.data[0].data[1] % 1)),
      flightCost: this.costData.data[1].data[0].toFixed(2),
      flightHours: Math.floor(this.costData.data[1].data[1]),
      flightMins: Math.floor(60 * (this.costData.data[1].data[1] % 1)),
      trainCost: this.costData.data[2].data[0].toFixed(2),
      trainHours: Math.floor(this.costData.data[2].data[1]),
      trainMins: Math.floor(60 * (this.costData.data[2].data[1] % 1))
    })
    this.localOptionsForm = this._fb.group({
      carHours: Math.floor(this.costData.data[0].data[1]),
      carMins: Math.floor(60 * (this.costData.data[0].data[1] % 1)),
      trainCost: this.costData.data[1].data[0].toFixed(2),
      trainHours: Math.floor(this.costData.data[1].data[1]),
      trainMins: Math.floor(60 * (this.costData.data[1].data[1] % 1)),
      walkingPace: 3
    })
    this.distantOptionsForm.valueChanges.subscribe(input => {
      this.currentData.data[0].data[1] = Number(input.carHours) + Number(input.carMins) / 60;
      this.currentData.data[1].data[0] = Number(input.flightCost);
      this.currentData.data[1].data[1] = Number(input.flightHours) + Number(input.flightMins) / 60;
      this.currentData.data[2].data[0] = Number(input.trainCost);
      this.currentData.data[2].data[1] = Number(input.trainHours) + Number(input.trainMins) / 60;
    })
    this.localOptionsForm.valueChanges.subscribe(input => {
      this.currentData.data[0].data[1] = Number(input.carHours) + Number(input.carMins) / 60;
      this.currentData.data[1].data[0] = Number(input.trainCost);
      this.currentData.data[1].data[1] = Number(input.trainHours) + Number(input.trainMins) / 60;
      this.currentData.data[2].data[1] = this.costData.distance / Number(input.walkingPace)
    })
  }

  @Input() costData:{data:{data:number[]}[], normalizedData:{data:number[]}[], distance:number};

  onCarNotify(payload:{EPM?:number, MPG?:number, Car?:string}){
    if (payload.EPM !== undefined && payload.MPG !== undefined) {
      this.currentData.data[0].data[2] = payload.EPM * this.costData.distance;
      this.currentData.data[0].data[0] = this.costData.distance / payload.MPG * 2.15;
    }
  }

  @ViewChild('childModal') public childModal:ModalDirective;
 
  public showChildModal():void {
    this.childModal.show();
  }
 
  public hideChildModal():void {
    this.childModal.hide();
  }

  public showPopUpInfo() {
    this.showHelpInfo = true;
  }

  public hidePopUpInfo() {
    this.showHelpInfo = false;
  }


  recalculateAverages(info:{data:Object[]}) {
    let totals:number[] = [0, 0, 0]
    this.currentData.data.forEach(point => {
      point.data.forEach((num, i) => {
        totals[i] += num;
      })
    })
    let averages:number[] = totals.map(num => num / 3)
    this.currentData.normalizedData.forEach((point, i) => {
      point.data = this.currentData.data[i].data.map((number, j) => {
        return number / averages[j];
      });
    });
  }

  public submit(input:Object) {
    this.recalculateAverages(this.currentData)
    this.sendCostDataService.sendData(this.currentData)
  }

}
