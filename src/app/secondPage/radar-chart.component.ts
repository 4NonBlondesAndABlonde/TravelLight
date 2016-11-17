import { Component, OnInit, Input } from '@angular/core';
import{ ChartsModule } from 'ng2-charts/ng2-charts'
import { CostInfoService } from './cost-info.service'
import { TravelInfo } from './travelInfo';

@Component({
  selector: 'app-radar-chart',
  template: `
    <p>
      radar-chart Works!
    </p>
    <div style="display: block; width:400px">
    <canvas baseChart 
      [datasets]="radarChartData"
      [labels]="radarChartLabels"
      [chartType]="radarChartType"
      [options]="radarChartOptions"
      [colors]="[[0,153,51], [58, 79, 66]]"
      (chartHover)="chartHovered($event)"
      (chartClick)="chartClicked($event)"></canvas>
    </div>
  `,
  styles: [`
    p {
      display: inline-block;
    }
  `]
})
export class RadarChartComponent {

  constructor(private costInfoService: CostInfoService) {}
  @Input() transportMode: string;

  public radarChartData: TravelInfo[] = [{data: [0, 0, 0], label: ''}];
  public toolTipData: TravelInfo[];
  // Radar
  public radarChartLabels:string[] = ['Cost', 'Time', 'Emissions'];

  public radarChartType:string = 'radar';

  public radarChartOptions:any = {
    tooltips: {
        callbacks: {
          title: (toolTipItem, data) => {
            return `${data.datasets[toolTipItem[0].datasetIndex].label} ${data.labels[toolTipItem[0].index]}` 
          },
          label: (toolTipItem, data) => {
            let dataType = data.labels[toolTipItem.index]
            let number = this.toolTipData[toolTipItem.datasetIndex].data[toolTipItem.index]
            let display: string;
            if (dataType === 'Emissions') {
              display = `${number} Pounds CO2`
            } else if (dataType === 'Time') {
              display = `${number} Hours`
            } else if (dataType === 'Cost') {
              display = `$${number}`
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
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  ngOnInit() {
    this.costInfoService.getCosts()
    .then(costs => {
      // Order data so current travel method is in front
      let index: number;
      costs.normalizedData.forEach((cost, i) => {
        if (cost.label === this.transportMode) {
          index = i;
        }
      })
      if (index && index !== 0) {
        let temp: any = costs.normalizedData[0];
        costs.normalizedData[0] = costs.normalizedData[index];
        costs.normalizedData[index] = temp;
        [costs.data[0], costs.data[index]] = [costs.data[index], costs.data[0]]
      }
      let normalizedData = costs.normalizedData.map(datum => {
        // Set current data's color to green
        if (datum.label === this.transportMode) {
          datum.backgroundColor = 'rgba(0,153,51,0.5)';
          datum.borderColor = 'rgba(0,153,51,1)';
        } else {
          datum.backgroundColor = 'rgba(58, 79, 66,0.5)';
          datum.borderColor = 'rgba(58, 79, 66,1)';
        }
        return datum
      })
      // Set chart data, and display data for info / tooltip
      this.radarChartData = normalizedData
      this.toolTipData = costs.data
    })

  }
}
