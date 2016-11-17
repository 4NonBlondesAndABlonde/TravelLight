import { Component, OnInit } from '@angular/core';
import { CostInfoService } from './cost-info.service'


@Component({
  selector: 'app-plane-stats',
  template: `
    <div>
      <p>
        Cost: $ {{cost}}
        <br />
        Time: {{hours}} hours, {{ minutes }} minutes
        <br />
        Emissions: {{emissions}} lbs CO<sub>2</sub>
      </p>
    </div>
  `,
  styles: [`
    div {
      background-color: #ffebcd;
      width: 50%;
      height: 18%;
      margin: 0 0 0 15%;
      text-aign: center;
      float: left;
    }
  `]
})
export class PlaneStatsComponent implements OnInit {
  constructor(private costInfoService: CostInfoService) {}
  cost= 178;
  hours= 1;
  minutes=10;
  emissions= 76;

  ngOnInit() {
    this.costInfoService.getCosts()
    .then(costs => {
      let data: any[] = costs.data
      let index: number = 0;
      for (var i = 0; i < data.length; i++) {
        if (data[i].label === 'plane') {
          index = i;
          break;
        }
      }
      console.log(data, index)
      this.cost = data[index].data[0].toFixed(2)
      this.hours = Math.floor(data[index].data[1])
      this.minutes = Math.floor((data[index].data[1] % 1)*60) 
      this.emissions = data[index].data[2]
    })
  }

}
