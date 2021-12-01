import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-road-card',
  templateUrl: './road-card.component.html',
  styleUrls: ['./road-card.component.scss'],
})
export class RoadCardComponent {
  @Input() type: string;
  @Input() title: string;
  @Input() description: string;
  @Input() isDisabled: boolean;

  @Output() onClick = new EventEmitter<any>();

  click() {
    this.onClick.emit({
      title: this.title,
      description: this.description,
      type: this.type,
    });
  }

  getClasses() {
    const classes = [`road-card--${this.type}`];
    if (this.isDisabled) {
      classes.push(`road-card--disabled`);
    }

    return classes;
  }
}
