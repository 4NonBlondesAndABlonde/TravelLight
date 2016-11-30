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
      flightCost: ['55']
    })
    this.localOptionsForm = this._fb.group({})
  }

  @Input() costData:Object;

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
