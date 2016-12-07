import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-travelpath',
  template: `
    <div class="path flex-container">
      <h3 class="flex-item text">{{cities.origin}}</h3>
      <img *ngIf="tripType === 'distant'" class="flex-item arrow" src='../assets/arrow.png'/>
      <h3 *ngIf="tripType === 'distant'" class="flex-item text">{{cities.destination}}</h3>
    </div>
  `,
  styles: [`
    .flex-container {
      justify-content: center;
      align-items: baseline;
      text-align: center;
      flex-direction: row;
      width: 100%;
      display: inline-flex;
    }
    .arrow {
      width: 4em;
      height: 2em;
    }
    .text {
      font-size: 2.5em;
      font-family: Lato;
      margin: 20px;
      color: #625949;
    }
  `]
})
export class TravelpathComponent implements OnInit {
  @Input() cities:{destination:string, origin:string};
  @Input() tripType:string;

  constructor() { }

  ngOnInit() {
  }

}
