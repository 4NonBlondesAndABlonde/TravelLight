import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travelpath',
  template: `
    <div class="path flex-container">
      <h3 class="flex-item text">{{Origin}}</h3>
      <img class="flex-item arrow" src='../assets/arrow.png'/>
      <h3 class="flex-item text">{{Destination}}</h3>
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
  Origin = 'Philadelphia';
  Destination = 'Atlanta';

  constructor() { }

  ngOnInit() {
  }

}
