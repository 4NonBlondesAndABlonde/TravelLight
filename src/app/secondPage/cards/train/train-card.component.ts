import { Component, Input, OnChanges, AfterViewInit } from '@angular/core';
// import { RadarChartComponent } from '../../radar-chart.component';

@Component({
  selector: 'app-train-card',
  templateUrl:'./train-card.component.html',
  styleUrls: ['./train-card.component.css']
})
export class TrainCardComponent implements OnChanges {

  constructor() { }

  @Input() costData: any;
  ranking: number = 0;
  method: string = '';
  place: string = '';
  ngOnChanges() {
    if (this.costData) {
      let averageData: any[] = this.costData.normalizedData
      let index: number = 0;
 
      for (var i = 0; i < averageData.length; i++) {
        if (averageData[i].label === 'transit' || averageData[i].label === 'train') {
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
