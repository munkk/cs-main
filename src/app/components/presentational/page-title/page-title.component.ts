import { Component, OnInit, Input } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  selectTitleHeading,
  selectTitleIcon,
  selectTitleSubheading,
} from 'src/app/store/reducers/layout.reducer';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
})
export class PageTitleComponent {
  heading$: Observable<string>;
  subheading$: Observable<string>;
  icon$: Observable<string>;

  constructor(private readonly store: Store) {
    this.heading$ = this.store.pipe(select(selectTitleHeading));
    this.subheading$ = this.store.pipe(select(selectTitleSubheading));
    this.icon$ = this.store.pipe(select(selectTitleIcon));
  }
}
