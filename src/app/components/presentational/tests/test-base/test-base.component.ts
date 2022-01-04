import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'test-base',
  templateUrl: './test-base.component.html',
  styleUrls: ['./test-base.component.scss'],
})
export class TestBaseComponent {
  @Output() onInitController: EventEmitter<any> = new EventEmitter();
  @Output() onFinish: EventEmitter<any> = new EventEmitter();

  page = 0;

  ngOnInit() {
    this.onInitController.emit({
      next: () => this.next(),
    });
  }

  next() {
    this.invalidate();
    this.page++;
    this.shuffle();
  }

  invalidate() {}

  shuffle() {}
}
