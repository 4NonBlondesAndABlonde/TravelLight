import { Component } from '@angular/core';

@Component({
  selector: 'app-slogan',
  template: `
    <h3>
      For those who want to travel with awareness
    </h3>
    <Button routerLink="/results" routerLinkActive="active">See Results</Button>
  `,
  styles: [`
    h3 {
      font-family: 'Lato';
      position: absolute;
      bottom: 0;
      text-align: center;
      width: 100%;
      color: #DEC2B3;
      font-size: 1.25em;
    }
    button {
      margin: 0 auto;
      position: absolute;
      bottom: 0;
    }
  `]
})
export class SloganComponent {}
