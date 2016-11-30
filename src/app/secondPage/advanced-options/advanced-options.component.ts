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

  constructor(private sendCostDataService: SendCostDataService,
              private _fb: FormBuilder) { }

  ngOnInit() { 
    this.distantOptionsForm = this._fb.group({
      carHours: Math.floor(this.costData.data[0].data[1]),
      carMins: Math.floor(60 * (this.costData.data[0].data[1] % 1)),
      flightCost: this.costData.data[1].data[0],
      flightHours: Math.floor(this.costData.data[1].data[1]),
      flightMins: Math.floor(60 * (this.costData.data[1].data[1] % 1)),
      trainCost: this.costData.data[2].data[0],
      trainHours: Math.floor(this.costData.data[2].data[1]),
      trainMins: Math.floor(60 * (this.costData.data[2].data[1] % 1))
    })
    this.localOptionsForm = this._fb.group({
      carHours: Math.floor(this.costData.data[0].data[1]),
      carMins: Math.floor(60 * (this.costData.data[0].data[1] % 1)),
      trainCost: this.costData.data[2].data[0],
      trainHours: Math.floor(this.costData.data[2].data[1]),
      trainMins: Math.floor(60 * (this.costData.data[2].data[1] % 1)),
      walkingPace: 3
    })
    setInterval(() => console.log(this.distantOptionsForm.value), 3000)
  }

  @Input() costData:{data:{data:number}[]};

  @ViewChild('childModal') public childModal:ModalDirective;
 
  public showChildModal():void {
    this.childModal.show();
  }
 
  public hideChildModal():void {
    this.childModal.hide();
  }

  public submit(input:Object) {
    console.log(input)
  }


}
