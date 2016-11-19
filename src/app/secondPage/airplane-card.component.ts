import { Component, Input, OnChanges } from '@angular/core';
import { RadarChartComponent } from './radar-chart.component';

@Component({
  selector: 'app-airplane-card',
  template: `
    <div class = 'outer'>
      <div class='tab'>
        <img class='bigplane' src='../assets/plane2.png'/>
        <p>Ranking: {{ ranking }}</p>
        <p>PLANE</p>
        <img class='smplane' src='../assets/airplaneIcon.png'/>
      </div>
      <app-radar-chart 
      [costData]="costData"
      transportMode="plane">
      </app-radar-chart>
      <app-plane-stats 
      [costData]="costData">
      </app-plane-stats>
    </div>
  `,
  styles: [`
    .outer {
      min-height: 70vh;
      width: 40vw;
      // background-color:lightblue;
      border: solid 1px black;
      border-radius: 10px;
      float:left;
      margin-left:7%;
    }
    .outer:hover{
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    }
    p{
      display: inline;
      margin-right: 5%;
      text-align:right;
      font-size:1.2em;
      margin-bottom:0;
    }
    .smplane {
      height: 5%;
      width: 5%;
      margin-right: 5%;
      float: right;
    }
    .tab {
      float: right;
      width: 100%;
    }
    .bigplane {
      height: 100px;
      width:100%;
      clear:both;
      border-radius:10px;
    }
  `]
})
export class AirplaneCardComponent implements OnChanges {

  constructor() { }
  @Input() costData: any;
  ranking: number = 0;
  ngOnChanges() {
    // TODO: Ivey factor this out into it's own function
    if (this.costData) {
      let averageData: any[] = this.costData.normalizedData
      let index: number = 0;
      for (var i = 0; i < averageData.length; i++) {
        if (averageData[i].label === 'plane') {
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
