import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import { TestResultEnum } from './chip-list.interface';
import { ChipComponent } from './chip/chip.component';
import { ChipInputData, ChipOutputData } from './chip/chip.interface';

@Component({
  selector: 'chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.scss'],
})
export class ChipListComponent {
  @Input() chips: ChipInputData[];
  @Input() answer: ChipInputData;

  @Output() onResult = new EventEmitter<any>();

  constructor(private renderer: Renderer2) {}

  checkCorrectness(chip: ChipOutputData) {
    if (this.answer.answer === chip.answer) {
      this.onResult.emit({ status: TestResultEnum.SUCCESS });
    } else {
      this.onResult.emit({ status: TestResultEnum.FAIL });
    }

    this.highlight(this.getAnswer(), TestResultEnum.SUCCESS);
  }

  getAnswer() {
    return this.chips.find((c) => c.id === this.answer.id);
  }

  highlight(chip: ChipInputData, type: TestResultEnum) {
    chip.highlight = type;
  }
}
