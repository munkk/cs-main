import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import {
  selectActivityButtonState,
  selectActivityButtonTitle,
} from 'src/app/store/reducers/layout.reducer';
import { selectActivityButtonCallback } from 'src/app/store/reducers/callbacks.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-activity-button',
  templateUrl: './activity-button.component.html',
  styleUrls: ['./activity-button.component.scss'],
})
export class ActivityButtonComponent {
  visible$: Observable<boolean>;
  title$: Observable<string>;

  callback;

  constructor(private readonly store: Store) {
    this.visible$ = this.store.pipe(select(selectActivityButtonState));
    this.title$ = this.store.pipe(select(selectActivityButtonTitle));
    this.store.pipe(select(selectActivityButtonCallback)).subscribe((cb) => {
      this.callback = cb;
    });
  }

  onActivityButtonClick() {
    if (this.callback) {
      this.callback();
    } else {
      console.table('No callback for activity button');
    }
  }
}
