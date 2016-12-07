import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-airplane-card',
  templateUrl: './airplane-card.component.html',
  styleUrls: ['./airplane-card.component.css']
})
export class AirplaneCardComponent {
  constructor() { }
  @Input() costData: any;
  @Input() changes: Boolean;
  @Input() rank: number;

}
