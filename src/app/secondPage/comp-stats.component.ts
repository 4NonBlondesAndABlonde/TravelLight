import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-stats',
  template: `
    <div>
      <p>
        comp-stats Works!
      </p>
    </div>
  `,
  styles: [`
    div {
      background-color: green;
      width: 50%;
      height: 15%;
      margin: 0 0 0 15%;
      text-aign: center;
    }
  `]
})
export class CompStatsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
