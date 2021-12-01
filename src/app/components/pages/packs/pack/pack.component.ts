import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrls: ['./pack.component.scss'],
})
export class PackComponent {
  @Input() link: string;
  @Input() id!: number;
  @Input() icon: string = '';
  @Input() wordsAmount: number = 0;
  @Input() lastTimeStudy: string = '';
  @Input() progress: number = 0;

  @Output() onClick = new EventEmitter<any>();

  constructor() {}

  handleClick() {
    this.onClick.emit({ id: this.id });
  }
}
