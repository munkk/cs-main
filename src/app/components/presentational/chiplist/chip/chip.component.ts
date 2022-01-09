import {
  Component,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { TestResultEnum } from '../chip-list.interface';
import { ChipInputData, ChipOutputData } from './chip.interface';

@Component({
  selector: 'chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent {
  TestResultEnum = TestResultEnum;

  @Input() data: ChipInputData;
  @Output() onClick = new EventEmitter<any>();

  answer;

  handleClick() {
    this.onClick.emit({
      id: this.data.id,
      text: this.data.text,
      answer: this.data.answer,
    } as ChipOutputData);
  }
}
