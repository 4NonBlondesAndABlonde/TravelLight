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
    // div {
    //   margin-top: 2%;
    // }
    // canvas {
    //   width: 80% !important;
    //   height: 80% !important;
    //   margin-bottom: -18%;
    //   margin-left: 10%;
    // }
export class RadarChartComponent {

  constructor() {}
  @Input() costData: any;
  @Input() transportMode: string;
  @Input() changes: Boolean;
  public radarChartData: TravelInfo[] = [{data: [0, 0, 0], label: ''}];
  public toolTipData: TravelInfo[];

  // Radar
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

  // events
  public chartClicked(e:any):void {
    //console.log(e);
  }

  public chartHovered(e:any):void {
    //console.log(e);
  }

  ngOnChanges() {
    if(this.costData) {
      //Order data so current travel method is in front
      let index: number = 0;
      let sortedNormalData: any[] = [];
      let sortedData: any[] = [];
      this.costData.normalizedData.forEach(cost => {
        cost.label === this.transportMode ? 
        sortedNormalData.unshift(cost) : sortedNormalData.push(cost);
      });
      this.costData.data.forEach(cost => {
        cost.label === this.transportMode ? 
        sortedData.unshift(cost) : sortedData.push(cost);
      });
      let normalizedData = sortedNormalData.map(datum => {
        // Set current data's color to green
        if (datum.label === this.transportMode) {
          datum.backgroundColor = 'rgba(0,153,51,0.5)';
          datum.borderColor = 'rgba(0,153,51,1)';
        } else {
          datum.backgroundColor = 'rgba(58, 79, 66,0.5)';
          datum.borderColor = 'rgba(58, 79, 66,1)';
        }
        return datum;
      })
      // Set chart data, and display data for info / tooltip
      this.radarChartData = normalizedData;
      console.log('chart data' + this.radarChartData)
      this.toolTipData = sortedData;
    }
  }
}