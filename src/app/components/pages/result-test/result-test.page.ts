import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import {
  changeTitleSubheading,
  hideActivityButton,
  showActivityButton,
} from 'src/app/store/actions/layout.actions';
import { registerActivityButtonCallback } from 'src/app/store/actions/callbacks.actions';

@Component({
  selector: 'app-result-test',
  templateUrl: './result-test.page.html',
  styleUrls: ['./result-test.page.scss'],
})
export class ResultTestPage {
  constructor(private store: Store, private router: Router) {
    this.store.dispatch(showActivityButton());
    this.store.dispatch(changeTitleSubheading({ value: '' }));
    this.store.dispatch(
      registerActivityButtonCallback({
        callback: () => {
          this.store.dispatch(hideActivityButton());
          this.router.navigate(['app/dashboard/wordslist']);
        },
      })
    );
  }
}
