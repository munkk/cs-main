import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { from, Observable, Subject } from 'rxjs';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { TextAnswerData } from 'src/app/components/presentational/tests/text-anwer/text-answer.interfaces';
import { StorageService } from 'src/app/services/storage.service';
import { registerActivityButtonCallback } from 'src/app/store/actions/callbacks.actions';
import {
  changeActivityButtonTitle,
  hideActivityButton,
  showActivityButton,
} from 'src/app/store/actions/layout.actions';
import {
  AppOptions,
  selectAppOptions,
} from 'src/app/store/reducers/layout.reducer';

@Component({
  selector: 'selecty',
  templateUrl: './selecty.component.html',
  styleUrls: ['./selecty.component.scss'],
})
export class SelectyComponent implements OnDestroy {
  data: TextAnswerData[] | null = null;
  controller;

  destroy$: Subject<boolean> = new Subject<boolean>();
  appOptions$: Observable<AppOptions>;

  constructor(private storageService: StorageService, private store: Store) {
    this.store
      .pipe(
        takeUntil(this.destroy$),
        select(selectAppOptions),
        switchMap((appOptions: AppOptions) => {
          return from(this.storageService.get(appOptions.type));
        })
      )
      .subscribe((value) => {
        this.data = value.slice(0, 20);
      });

    this.store.dispatch(changeActivityButtonTitle({ value: 'Next' }));
    this.store.dispatch(
      registerActivityButtonCallback({
        callback: () => {
          this.controller.next();
          this.store.dispatch(hideActivityButton());
        },
      })
    );
  }

  setController(controller) {
    this.controller = controller;
  }

  onResult({ status }) {
    this.store.dispatch(showActivityButton());
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
