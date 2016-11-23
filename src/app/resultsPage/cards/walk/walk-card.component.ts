import { Component, Input, OnChanges } from '@angular/core';
// import { RadarChartComponent } from '../../radar-chart.component';

@Component({
  selector: 'app-walk-card',
  template: `
    <div class = 'outer'>
      <div [class]="stats">
        <h3> Travel by Foot</h3>
        <app-walk-stats 
        [costData]="costData">
        </app-walk-stats>
      </div>
    </div>
  `,
  styleUrls: ['./walk-card.component.css']
})
export class WalkCardComponent implements OnChanges {
  constructor() { }

  @Input() costData: any;
  ranking: number = 0;
  ngOnChanges() {
    // TODO: Ivey factor this out into it's own function
    if (this.costData) {
      let averageData: any[] = this.costData.normalizedData
      let index: number = 0;
      for (var i = 0; i < averageData.length; i++) {
        if (averageData[i].label === 'walk') {
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
    }
  }

}
