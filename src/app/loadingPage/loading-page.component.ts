import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css']
})
export class LoadingPageComponent implements OnInit {
  
  private statementArray:string[] = [
    // 'Planning Your Trip...',
    'Crunching Data...',
    'Coloring Triangles...',
    'Counting Trees...',
    'Calculating Path...',
    'Making Medals...',
    // 'Accessing Data...',
    'Checking Available Tickets...',
    'Assessing Walking Feasibility...'
  ];

  private currentStatement:string;
  private getCurrentStatement = () => {
    this.currentStatement = this.statementArray.splice(Math.floor(Math.random()*this.statementArray.length), 1)[0]
  };
  constructor() {
   }

  ngOnInit() {
    this.getCurrentStatement()
    setInterval(this.getCurrentStatement, 5000)
  }

}
