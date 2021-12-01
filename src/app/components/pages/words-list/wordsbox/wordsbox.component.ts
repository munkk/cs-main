import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wordsbox',
  templateUrl: './wordsbox.component.html',
  styleUrls: ['./wordsbox.component.scss'],
})
export class WordsboxComponent {
  @Input() link: string;
  @Input() id: any;
  @Input() wordsbox: any;
  @Input() state: 'initial' | 'completed' | 'closed';
  @Input() wordsAmount: number = 0;
  @Input() lastTimeStudy: string = '';
  @Input() progress: number = 0;

  @Output() onClick = new EventEmitter<any>();

  constructor() {}

  handleClick() {
    this.onClick.emit({ id: this.id });
  }

  getIcon() {
    if (this.state === 'closed') return 'lock';
    if (this.state === 'completed') return 'checkmark-circle';

    return '';
  }

  getIconColor() {
    if (this.state === 'closed') return 'danger';
    if (this.state === 'completed') return 'success';

    return '';
  }
}
