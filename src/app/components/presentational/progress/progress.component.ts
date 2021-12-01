import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { selectProgressValue } from 'src/app/store/reducers/layout.reducer';
import { NavigationStart, Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { selectprogressBarCallback } from 'src/app/store/reducers/callbacks.reducer';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
})
export class ProgressComponent {
  @Input() value: number;
  @Input() isVisible: boolean = true;

  @Output() onClose = new EventEmitter<any>();

  close() {
    this.onClose.emit();
  }
}
