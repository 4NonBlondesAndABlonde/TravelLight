import { Component, OnInit, Input } from '@angular/core';
import { ChartsModule } from '../../../../../node_modules/ng2-charts/ng2-charts'
import { TravelInfo } from '../../travelInfo';

@Component({
  selector: 'app-radar-chart',
  template: `
    <div>
      <canvas baseChart 
        [datasets]="radarChartData"
        [labels]="radarChartLabels"
        [chartType]="radarChartType"
        [options]="radarChartOptions"
        [colors]="[[0,153,51], [58, 79, 66]]"
        (chartHover)="chartHovered($event)"
        (chartClick)="chartClicked($event)">
      </canvas>
    </div>
  `,
  styles: [`
  `]
})

export class RadarChartComponent {

  constructor() {}
  @Input() costData: any;
  @Input() planeRank: number;
  @Input() carRank: number;
  @Input() trainRank: number;
  @Input() walkingRank: number;
  @Input() changes: Boolean;
  public radarChartData: TravelInfo[] = [{data: [0, 0, 0], label: ''}];
  public toolTipData: TravelInfo[];
  public radarChartLabels:string[] = ['Cost', 'Time', 'Emissions'];
  public radarChartType:string = 'radar';
  public radarChartOptions:any = {
    tooltips: {
        callbacks: {
          title: (toolTipItem, data) => {
            let label = data.datasets[toolTipItem[0].datasetIndex].label;
            return `${label.charAt(0).toUpperCase() + label.slice(1)} ${data.labels[toolTipItem[0].index]}` 
          },
          label: (toolTipItem, data) => {
            let dataType = data.labels[toolTipItem.index]
            let number = this.toolTipData[toolTipItem.datasetIndex].data[toolTipItem.index]
            let display: string;
            if (dataType === 'Emissions') {
              display = `${number.toFixed(2)} Pounds CO2`
            } else if (dataType === 'Time') {
              display = `${Math.floor(number)} Hours, ${Math.floor((number % 1)*60)} Minutes`
            } else if (dataType === 'Cost') {
              display = `$${number.toFixed(2)}`
            }
            return display
          }
        },
        displayColors: false
      },
    hover: {
      animationDuration: 0
    },
    scale: {
      ticks: {
        beginAtZero: true,
        display: false,
        maxTicksLimit: 5
      },
      gridLines: {
        display: true
      }
    },
    responsive: true
  }


  ngOnChanges() {
    if(this.costData) {
      //Order data so current travel method is in front
      let ranks:Object = {
        car: this.carRank,
        plane: this.planeRank,
        train: this.trainRank,
        transit: this.trainRank,
        walking: this.walkingRank
      };
      let sortedNormalData: any[] = [];
      let sortedData: any[] = [];
      this.costData.normalizedData.forEach(cost => {
        let index = ranks[cost.label] - 1
        sortedNormalData[index] = cost;
      });
      this.costData.data.forEach(cost => {
        let index = ranks[cost.label] - 1
        sortedData[index] = cost;
      });
      let normalizedData = sortedNormalData.map(datum => {
        // Set current data's color to green
        if (ranks[datum.label] === 1) {
          datum.backgroundColor = 'rgba(0,153,51,0.5)';
          datum.borderColor = 'rgba(0,153,51,1)';
        } else if (ranks[datum.label] === 2){
          datum.backgroundColor = 'rgba(66, 146, 244 ,0.5)';
          datum.borderColor = 'rgba(66, 146, 244 ,1)';
        } else {
          datum.backgroundColor = 'rgba(58, 79, 66,0.5)';
          datum.borderColor = 'rgba(58, 79, 66,1)';
        }
        return datum;
      })
      // Set chart data, and display data for info / tooltip
      this.radarChartData = normalizedData;
      this.toolTipData = sortedData;
    }
  }
}