
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  template: `
    <form class="flex-item background">
      <p>Origin:     </p>
      <input type='text' name='origin'>
      <br />
      <p>Destination:</p>
      <input type='text' name='destination'>
      <br />
      <input type='submit' value='Submit'>
    </form>
  `,
  styles: [`
    form {
      margin: 2% 0 0 5%;
      float: right;
      clear: both;
      width: 30%;
      display: inline-block;
      padding-left:2%;
    }
    input {
      margin: 2% 2% 2% 0;
      float: right;
      clear: both;
      display:inline-block;
    }
    p{
      margin: 4% 2% 2% 0;
      clear:both;
      text-align: left;
      display:inline-block;
      color: #FBF3EC;
      text-shadow: 1px 1px 1px #938380;
      font: 1.2em;
    }
    // .background {
    //   background: #ffebcd;
    //   opacity:.5;
    // }
  `]
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
