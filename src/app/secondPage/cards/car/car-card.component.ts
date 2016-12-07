import { Component, Input, OnChanges } from '@angular/core';
// import { RadarChartComponent } from '../../radar-chart.component';


@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css'],
})
export class CarCardComponent {
  constructor() { }
  @Input() costData: any;
  @Input() changes: Boolean;
  @Input() rank: number;

}

