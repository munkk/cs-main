import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  ViewChildren,
  QueryList,
} from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import {
  changeActivityButtonTitle,
  changeTitleSubheading,
  hideActivityButton,
  increaseProgress,
  showActivityButton,
} from 'src/app/store/actions/layout.actions';
import { shuffle } from 'src/app/utils/common';
import {
  registerActivityButtonCallback,
  registerProgressbarCallback,
} from 'src/app/store/actions/callbacks.actions';
import { DragQuestion } from '../../presentational/draggy/draggy.interfaces';

@Component({
  selector: 'app-drag-n-drop-test',
  templateUrl: './drag-n-drop-test.component.html',
  styleUrls: ['./drag-n-drop-test.component.scss'],
})
export class DragNDropTestPage {
  questions: DragQuestion[][] = [
    [
      {
        id: 1,
        text: 'go',
        answer: 'идти; пойти; ехать',
      },
      {
        id: 2,
        text: 'can',
        answer: 'мочь; смочь; уметь',
      },
      {
        id: 3,
        text: 'get',
        answer: 'получить; приобрести',
      },
      {
        id: 3,
        text: 'if',
        answer: 'если',
      },
      {
        id: 4,
        text: 'all',
        answer: 'все',
      },
    ],
  ];

  constructor(private store: Store, private router: Router) {
    this.store.dispatch(
      changeTitleSubheading({
        value: 'Подберите к словам соответствующий перевод',
      })
    );
    this.store.dispatch(
      registerActivityButtonCallback({
        callback: () => {
          this.store.dispatch(hideActivityButton());
          this.router.navigate(['app/dashboard/exercise2']);
        },
      })
    );
    this.store.dispatch(
      registerProgressbarCallback({
        callback: () => {
          this.store.dispatch(hideActivityButton());
          this.router.navigate(['app/dashboard/wordslist']);
        },
      })
    );
  }

  onFinish(data) {
    this.store.dispatch(changeActivityButtonTitle({ value: 'Далее' }));
    this.store.dispatch(showActivityButton());
    this.store.dispatch(increaseProgress({ value: 25 }));
  }
}
