import { Component, Input, OnChanges } from '@angular/core';
import { RadarChartComponent } from './radar-chart.component';

@Component({
  selector: 'app-comparison-card',
  templateUrl: './comparison-card.component.html',
  styleUrls: ['./comparison-card.component.css']
})
export class ComparisonCardComponent implements OnChanges {
  constructor() { }
  @Input() costData: any;
  planeRank: number = 0;
  carRank: number = 0;
  first: string = '';
  second: string = '';
  travelMode:string = '';
  
  public toFirst():void {
    this.travelMode = this.first;
  }

  public toSecond():void {
    this.travelMode = this.second;
  }

  public changeTravelMode():void {
    if (this.travelMode === 'plane') {
      this.travelMode = 'car';
    } else {
      this.travelMode = 'plane';
    }
  }

  ngOnChanges() {
    if (this.costData) {
      let averageData: any[] = this.costData.normalizedData
      let planeIndex: number = 0;
      let carIndex: number = 0;
      for (var i = 0; i < averageData.length; i++) {
        if (averageData[i].label === 'plane') {
          planeIndex = i;
        }
        if (averageData[i].label === 'car') {
          carIndex = i;
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
      this.planeRank = rankings[planeIndex];
      this.carRank = rankings[carIndex];
      if (this.planeRank < this.carRank) {
        this.first = 'plane';
        this.second = 'car';
      } else {
        this.first = 'car';
        this.second = 'plane';
      }
      this.travelMode = this.first;
    }
  }
}


//       for (var i = 0; i < averageData.length; i++) {
//         if (averageData[i].label === 'plane') {
//           index = i;
//           break;
//         }
//       }
//       let scores = averageData.map(methodData => 
//         methodData.data.reduce((a, b) => a + b))
//       let rankings = scores.map(score => {
//         let rank = 1;
//         scores.forEach(compScore => {
//           if (compScore < score) rank++;
//         })
//         return rank;
//       })
//       this.ranking = rankings[index]
//     }
//   }