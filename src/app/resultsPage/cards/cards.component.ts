import { Component, OnInit, Input } from '@angular/core';
//import { CostInfoService } from '../cost-info.service';
import { SendCostDataService } from '../../send-cost-data.service'

@Component({
  selector: 'app-cards',
  template: `
    <div class='cards flex-container'>
      <div class="flex-item car">
        <h3> Travel by Car </h3>
        <app-single-card [costData]="carData"></app-single-card>
      </div>
      <div class="flex-item plane">
        <h3> Travel by Plane </h3>
        <app-single-card [costData]="planeData"></app-single-card>
      </div>
      <div class="flex-item walk">  
        <h3> Travel by Foot </h3>
        <app-single-card [costData]="walkData"></app-single-card>
      </div>
      <div class="flex-item train"> 
        <h3> Travel by Train </h3>
        <app-single-card [costData]="trainData"></app-single-card>   
      </div>
    </div>
  `,
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  constructor(private sendCostDataService: SendCostDataService) {}
    @Input() costData: any;
    ngOnInit() {
      console.log(this.sendCostDataService.dataStore[0])
      this.costData = this.sendCostDataService.dataStore[0]
    }
  carData: '';
  planeData: '';
  ngOnChanges() {
    console.log(this.costData)
    if (this.costData) {
      let averageData: any[] = this.costData.data
      let index: number = 0;
      for (var i = 0; i < averageData.length; i++) {
        if (averageData[i].label === 'car') {
          this.carData = averageData[i];
        } else if (averageData[i].label === 'plane') {
          this.planeData = averageData[i];
        }
      }
    }
  }
}
