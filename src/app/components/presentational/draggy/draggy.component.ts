import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import {
  Component,
  OnInit,
  Input,
  Renderer2,
  ViewChild,
  QueryList,
  ViewChildren,
  Output,
  EventEmitter,
} from '@angular/core';
import { shuffle } from 'src/app/utils/common';
import { TestBaseComponent } from '../tests/test-base/test-base.component';

import { DragQuestion } from './draggy.interfaces';

@Component({
  selector: 'app-draggy',
  templateUrl: './draggy.component.html',
  styleUrls: ['./draggy.component.scss'],
})
export class DraggyComponent extends TestBaseComponent implements OnInit {
  _questions: DragQuestion[][];

  get questions(): DragQuestion[][] {
    return this._questions;
  }
  @Input() set questions(questions: DragQuestion[][]) {
    if (questions) {
      this._questions = questions;
      this.shuffle();
    }
  }

  @ViewChild('list1') private list1!: CdkDropList;
  @ViewChild('list2') private list2!: CdkDropList;
  @ViewChild('list3') private list3!: CdkDropList;
  @ViewChild('list4') private list4!: CdkDropList;
  @ViewChild('list5') private list5!: CdkDropList;

  @ViewChildren('cdkDragTest2') private dragItems: any;
  @ViewChildren(CdkDrag) dragItems2!: QueryList<CdkDrag>;

  one: any = [];
  two: any = [];
  three: any = [];
  four: any = [];
  five: any = [];

  options: DragQuestion[] = null;
  translations: DragQuestion[] = null;

  constructor(private renderer: Renderer2) {
    super();
  }

  finish() {}

  invalidate() {
    this.options = null;
    this.one = [];
    this.two = [];
    this.three = [];
    this.four = [];
    this.five = [];
  }

  shuffle() {
    this.options = shuffle([...this.questions[this.page]]);
    this.translations = shuffle([...this.questions][this.page]);
  }

  get noMoreOptions() {
    return !this.options.length;
  }

  drop(event: CdkDragDrop<DragQuestion[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      if (this.options.length === 0) {
        this.onFinish.emit({
          page: this.page,
          isDone: this.page === this.questions.length - 1,
        });

        setTimeout(() => this.colorize(), 0);
      }
    }
  }

  colorize() {
    const combined: any = [
      ...this.one,
      ...this.two,
      ...this.three,
      ...this.four,
      ...this.five,
    ];

    this.dragItems.toArray().forEach((dragRef: CdkDrag) => {
      const data = dragRef.dropContainer.data[0];
      const index = combined.indexOf(data);
      const item = this.translations[index];

      if (item.id === data.id) {
        this.renderer.addClass(
          dragRef.element.nativeElement,
          'draggy__success'
        );
      } else {
        this.renderer.addClass(dragRef.element.nativeElement, 'draggy__fail');
      }
    });
  }

  checkDropPossibility(list: any) {
    return function (item: CdkDrag<number>) {
      return list.length < 1;
    };
  }
}
