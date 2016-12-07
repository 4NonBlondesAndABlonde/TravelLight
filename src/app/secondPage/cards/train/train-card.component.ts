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
  @Input() changes: Boolean;
  @Input() rank: number;
  ranking: number = 0;
  method: string = 'train';
  place: string = '';
  trees: any=[];
  numTrees:number=0;
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
    //   this.ranking = this.rank
    //   if (this.ranking === 1) {
    //     this.place = 'gold';
    //   }
    //   if (this.ranking === 2) {
    //     this.place = 'silver';
    //   }
    //   if (this.ranking === 3) {
    //     this.place = 'bronze';
    //   }
    // }
    }
  }

}
