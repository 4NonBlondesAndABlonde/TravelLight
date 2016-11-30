import { Component, Input, OnChanges } from '@angular/core';
// import { RadarChartComponent } from '../../radar-chart.component';

@Component({
  selector: 'app-airplane-card',
  template: `
    <div class = 'outer'>
      <div class = 'icons'>
        <i class="ionicons ion-ribbon-b {{ place }}"></i>
        <div *ngIf="costData.bestCost === method"> 
          <i class="glyphicon glyphicon-usd"></i>
        </div>
        <div *ngIf="costData.bestTime === method">
          <i class="glyphicon glyphicon-time"></i>
        </div>
        <div *ngIf="costData.bestEmissions === method">
          <i class="glyphicon glyphicon-tree-deciduous"></i>
         </div>
      </div>
      <br />
      <div [class]="stats">
      <h3> Travel by Plane</h3>
        <app-plane-stats 
        [costData]="costData">
        </app-plane-stats>
      </div>
    </div>
  `,
  styleUrls: ['./airplane-card.component.css']
})
export class AirplaneCardComponent implements OnChanges {
  constructor() { }
  @Input() costData: any;
  ranking: number = 0;
  place: string='';
  method: string='';
  ngOnChanges() {
    // TODO: Ivey factor this out into it's own function
    if (this.costData) {
      let averageData: any[] = this.costData.normalizedData
      let index: number = 0;
      for (var i = 0; i < averageData.length; i++) {   
        if (averageData[i].label === 'plane') {
          this.method = averageData[i].label;
          index = i;
          break;
        }
      }
      let scores = averageData.map(methodData => 
        methodData.data.reduce((a, b) => a + b))
      let rankings = scores.map(score => {
        let rank = 1;
        scores.forEach(compScore => {
          if (compScore < score) rank++;
        })
        return rank;
      })
      this.ranking = rankings[index]
      if (this.ranking === 1) {
        this.place = 'gold';
      }
      if (this.ranking === 2) {
        this.place = 'silver';
      }
      if (this.ranking === 3) {
        this.place = 'bronze';
      }
    }
  }

}
