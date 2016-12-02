import { Component, Input, OnChanges } from '@angular/core';
// import { RadarChartComponent } from '../../radar-chart.component';


@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css'],
})
export class CarCardComponent implements OnChanges {
  constructor() { }
  @Input() costData: any;
  @Input() changes: Boolean;
  @Input() rank: number;
  ranking: number = 0;
  place: string='';
  method: string='car';

  trees: any=[];
  numTrees:number=0;
  ngOnChanges() {
    // if (this.costData) {
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

      // let data= this.costData.data;
      // for (var i = 0; i < data.length; i++) {
      //   if (data[i].label === 'car') {
      //     let emissions = data[i].data[2]
      //     this.numTrees = Math.round(emissions/48 *2)/2;
      //     console.log(this.numTrees);
      //   }
      // }
      // for (var j = 0; j < Math.floor(this.numTrees); j++) {
      // this.trees.push(this.fulltree);
      // }
      // if (this.numTrees % 1 !== 0) {
      //   this.trees.push(this.halftree);
      // }

  }
}

