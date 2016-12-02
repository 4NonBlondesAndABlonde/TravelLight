import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css']
})
export class LoadingPageComponent implements OnInit {
  
  private statementArray:string[] = [
    'Planning Your Trip...',
    'Crunching Data...',
    'Coloring Triangles...',
    'Counting Trees...',
    'Calculating Path...'
  ];

  private currentStatement:string;
  private getCurrentStatement = () => { 
    this.currentStatement = this.statementArray.shift() 
  };
  constructor() {
   }

  ngOnInit() {
    this.getCurrentStatement()
    setInterval(this.getCurrentStatement, 5000)
  }

}
