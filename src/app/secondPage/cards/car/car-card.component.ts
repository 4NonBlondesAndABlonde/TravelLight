import { Component, Input, OnChanges } from '@angular/core';
// import { RadarChartComponent } from '../../radar-chart.component';

@Component({
  selector: 'app-car-card',
  template: `
    <div class = 'outer'>
      <i class="ionicons ion-ribbon-b {{ place }}"></i>
      <br />
      <div [class]="stats">
        <h3> Travel by Car</h3>
        <app-car-stats
        [costData]="costData">
        </app-car-stats>
      </div>
    </div>
  `,
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnChanges {
  constructor() { }
  @Input() costData: any;
  ranking: number = 0;
  place: string='';
  ngOnChanges() {
    if (this.costData) {
      let averageData: any[] = this.costData.normalizedData
      let index: number = 0;
      for (var i = 0; i < averageData.length; i++) {
        if (averageData[i].label === 'car') {
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
