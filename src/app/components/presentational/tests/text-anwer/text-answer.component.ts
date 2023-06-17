import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { Store, select } from '@ngrx/store';

import { selectProgressValue } from 'src/app/store/reducers/layout.reducer';
import { NavigationStart, Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { selectprogressBarCallback } from 'src/app/store/reducers/callbacks.reducer';
import { TextAnswerData } from './text-answer.interfaces';
import { TestBaseComponent } from '../test-base/test-base.component';
import { TestResultEnum } from '../../chiplist/chip-list.interface';
import {
  deepCopy,
  getRandomItemsFromArray,
  shuffle,
} from 'src/app/utils/common';
import { ChipInputData } from '../../chiplist/chip/chip.interface';

@Component({
  selector: 'text-answer',
  templateUrl: './text-answer.component.html',
  styleUrls: ['./text-answer.component.scss'],
})
export class TextAnswerComponent extends TestBaseComponent {
  _questions: TextAnswerData[];
  chips: ChipInputData[];

  get questions(): TextAnswerData[] {
    return this._questions;
  }
  @Input() set questions(questions: TextAnswerData[]) {
    if (questions) {
      //this._questions = shuffle(questions);
      this._questions = questions;
      this.setChips();
    }
  }

  @ViewChild('successTemplate', { static: true })
  successTemplate: TemplateRef<any> | null = null;
  @ViewChild('failTemplate', { static: true })
  failTemplate: TemplateRef<any> | null = null;

  @Output() onResult = new EventEmitter<any>();

  templateBlock: TemplateRef<any> | null = null;

  _onResult({ status }) {
    if (status === TestResultEnum.SUCCESS) {
      this.templateBlock = this.successTemplate;
    } else {
      this.templateBlock = this.failTemplate;
    }

    this.onResult.emit({ status });
  }

  setChips() {
    const curr = this.questions[this.page];
    const items = getRandomItemsFromArray(
      this.questions.filter((q) => q.id !== curr.id),
      4
    );
    this.chips = deepCopy(
      items.concat(curr).sort(() => Math.random() - Math.random())
    );
  }

  invalidate() {
    this.templateBlock = null;
  }

  shuffle() {
    this.setChips();
  }
}
