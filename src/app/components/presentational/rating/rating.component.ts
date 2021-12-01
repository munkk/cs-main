import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent {
  @Input() value: number = 0;

  constructor() {}

  get starsCount() {
    const number = +(this.value / 20 ).toFixed();
    return Array(number)
  }

}
