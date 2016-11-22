import { Component, Input, OnChanges } from '@angular/core';
// import { RadarChartComponent } from '../../radar-chart.component';

@Component({
  selector: 'app-single-card',
  template: `
    <div class='outer'>
      <div [class]="stats">
          <app-card-stats
          [costData]="costData">
          </app-card-stats>
      </div>
    </div>
  `,
  styleUrls: ['./single-card.component.css']
})
export class SingleCardComponent implements OnChanges {
  constructor() { }
  @Input() costData: any;
  // carData: '';
  // planeData: '';
  ngOnChanges() {
    console.log(this.costData)
    // if (this.costData) {
    //   let averageData: any[] = this.costData.data
    //   let index: number = 0;
    //   for (var i = 0; i < averageData.length; i++) {
    //     if (averageData[i].label === 'car') {
    //       this.carData = averageData[i];
    //     } else if (averageData[i].label === 'plane') {
    //       this.planeData = averageData[i];
    //     }
    //   }
    // }
  }
}




    // TODO: Ivey factor this out into it's own function

    
  //     let scores = averageData.map(methodData => 
  //       methodData.data.reduce((a, b) => a + b))
  //     let rankings = scores.map(score => {
  //       let rank = 1;
  //       scores.forEach(compScore => {
  //         if (compScore < score) rank++;
  //       })
  //       return rank;
  //     })
  //     this.ranking = rankings[index]
