import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-card-stats',
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
      width: 100%;
      border-radius: 10px;
    }
  `]
})
export class CardStatsComponent implements OnChanges {
  constructor() {}
  @Input() costData: any;
  private cost: number;
  private hours: number;
  private minutes: number;
  private emissions: number;

  ngOnChanges() {
    console.log(this.costData)
    if (this.costData) {
      let data: any[] = this.costData.data

      this.cost = data[0]
      this.hours = Math.floor(data[1])
      this.minutes = Math.floor((data[1] % 1)*60) 
      this.emissions = data[2].toFixed(2)
    }
  }

}
