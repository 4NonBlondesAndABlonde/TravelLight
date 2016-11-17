import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plane-stats',
  template: `
    <div>
      <p>
        Cost: {{cost}} dollars
        <br />
        Time: {{time}}
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
  cost= 178;
  time= '2 hours, 45 min';
  emissions= 76;

  ngOnInit() {
  }

}
