import { Component, Input, OnChanges } from '@angular/core';
import { RadarChartComponent } from './chart/radar-chart.component';

@Component({
  selector: 'app-comparison-card',
  templateUrl: './comparison-card.component.html',
  styleUrls: ['./comparison-card.component.css']
})
export class ComparisonCardComponent implements OnChanges {
  constructor() {
   }
  @Input() costData: any;
  @Input() changes: Boolean;

  planeRank: number = 0;
  carRank: number = 0;
  trainRank: number = 0;
  walkingRank: number = 0;
  
  first: string = '';
  second: string = '';
  third: string = '';
  travelMode: string = '';
  private preferenceArray: number[] = [1/3, 1/3, 1/3]

  onPreferenceNotify(payload:number[]) {
    if (payload[0] !== undefined) {
      if (this.preferenceArray[0].toFixed(2) !== payload[0].toFixed(2) || this.preferenceArray[1].toFixed(2) !== payload[1].toFixed(2)) {
        this.preferenceArray = payload;
        if (this.costData) {
          this.calculateBestChoice()
          if (this.travelMode !== this.first) {
            setTimeout(()=> this.travelMode = this.first, 10)
          }
        }
      }
    }
  }
  
  private calculateBestChoice() {
    let averageData: any[] = this.costData.normalizedData;
    let planeIndex: number = 0;
    let carIndex: number = 0;
    let trainIndex: number = 0;
    let walkingIndex: number = 0;
    
    for (var i = 0; i < averageData.length; i++) {
      if (averageData[i].label === 'plane') {
        planeIndex = i;
      }
      if (averageData[i].label === 'car') {
        carIndex = i;
      }
      if (averageData[i].label === 'train' || averageData[i].label === 'transit') {
        trainIndex = i;
      } 
      if (averageData[i].label === 'walking') {
        walkingIndex = i;
      }
    }
    let scores = averageData.map(methodData => 
      methodData.data.reduce((a, b, i) => a + b * this.preferenceArray[i], 0))
    let rankings = scores.map(score => {
      let rank = 1;
      scores.forEach(compScore => {
        if (compScore < score) rank++;
      })
      return rank;
    })
    if (this.costData.tripType === 'distant') {
      this.planeRank = rankings[planeIndex];
    } else {
      this.walkingRank = rankings[walkingIndex]
    }
    this.carRank = rankings[carIndex];
    this.trainRank = rankings[trainIndex];
    if (this.costData.tripType === 'distant') {
      if (this.planeRank === 1) {
        this.first = 'plane';
        if (this.carRank === 2) {
          this.second = 'car';
          this.third = 'train';
        } else {
          this.second = 'train';
          this.third = 'car';
        }
      } else if (this.planeRank === 2) {
        this.second = 'plane';
        if (this.carRank === 1) {
          this.first = 'car';
          this.third = 'train';
        } else {
          this.first = 'train';
          this.third = 'car'
        }
      } else {
        this.third = 'plane';
        if (this.carRank === 1) {
          this.first = 'car';
          this.second = 'train';
        } else {
          this.first = 'train';
          this.second = 'car'
        }
      }
    } else {
      if (this.walkingRank === 1) {
        this.first = 'walking';
        if (this.carRank === 2) {
          this.second = 'car';
          this.third = 'transit';
        } else {
          this.second = 'transit';
          this.third = 'car';
        }
      } else if (this.walkingRank === 2) {
        this.second = 'walking';
        if (this.carRank === 1) {
          this.first = 'car';
          this.third = 'transit';
        } else {
          this.first = 'transit';
          this.third = 'car'
        }
      } else {
        this.third = 'walking';
        if (this.carRank === 1) {
          this.first = 'car';
          this.second = 'transit';
        } else {
          this.first = 'transit';
          this.second = 'car'
        }
      }
    }
  }

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
      this.calculateBestChoice()
      //this.toFirst()
    }
  }
}
