import { Component, OnInit, EventEmitter, Output, DoCheck } from '@angular/core';

@Component({
  selector: 'app-travelers',
  template: `
    <div class="form-group travelers">
      <label for="travelers">Travelers</label>
      <input [(ngModel)]="numTravelers" type="number" min="1" class="form-control" id="travelers">
    </div>
  `,
  styles: [`
    .travelers {
      margin-top: 5px;
    }
  `]
})
export class TravelersComponent {
  @Output() travelersNotify: EventEmitter<number> = new EventEmitter<number>();
  private numTravelers: number = 1;
  ngDoCheck() {
    this.travelersNotify.emit(this.numTravelers)
  }
}
