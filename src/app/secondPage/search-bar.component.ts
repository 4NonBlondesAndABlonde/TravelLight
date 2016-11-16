import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  template: `
    <form>
      Origin:
      <input type='text' name='origin'>
      Destination:
      <input type='text' name='destination'>
      <input type='submit' value='Submit'>
  `,
  styles: [`
    form {
      margin: 0 0 0 10%;
    }
    input {
      margin: 2% 5% 2% 0;
    }
  `]
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
