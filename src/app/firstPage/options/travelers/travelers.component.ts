import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travelers',
  template: `
    <div class="form-group travelers">
      <label for="travelers">Travelers</label>
      <input type="number" class="form-control" id="travelers">
    </div>
  `,
  styles: [`
    .travelers {
      width: 25%;
      margin: 0 auto;
      margin-top: 5px;
    }
  `]
})
export class TravelersComponent {

}
