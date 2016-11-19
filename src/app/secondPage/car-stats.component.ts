import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-car-stats',
  template: `
    <div>
       <p>Ranking: {{ ranking }}</p>
      <h4> Travel by Car</h4>
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
      width: 100%;
      height: 100%;
      color:whitesmoke;
      text-align: center;
      float: left;
      font-family: Lucida Sans Grande;
      background-color: rgba(0,0,0,0.5);
      border-radius:10px;
    }
  `]
})
export class CarStatsComponent implements OnChanges {
  constructor() {}
  @Input() costData: any;
  private cost: number;
  private hours: number;
  private minutes: number;
  private emissions: number;

  ngOnChanges() {
    if (this.costData) {
      let data: any[] = this.costData.data
      let index: number = 0;
      for (var i = 0; i < data.length; i++) {
        if (data[i].label === 'car') {
          index = i;
          break;
        }
      }
      this.cost = data[index].data[0].toFixed(2)
      this.hours = Math.floor(data[index].data[1])
      this.minutes = Math.floor((data[index].data[1] % 1)*60) 
      this.emissions = data[index].data[2].toFixed(2)
    }
  }

}
