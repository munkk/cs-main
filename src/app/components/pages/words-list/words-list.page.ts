import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  changeTitleHeading,
  changeTitleIcon,
  changeTitleSubheading,
} from 'src/app/store/actions/layout.actions';
import { Store } from '@ngrx/store';
import { StorageService } from 'src/app/services/storage.service';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

import { chunkArray } from 'src/app/utils/common';

@Component({
  selector: 'app-words-list',
  templateUrl: './words-list.page.html',
  styleUrls: ['./words-list.page.scss'],
})
export class WordsListPage {
  chunks$;

  constructor(
    private store: Store,
    private router: Router,
    private storageService: StorageService
  ) {
    this.store.dispatch(
      changeTitleHeading({
        value: 'Учеба',
      })
    );
    this.store.dispatch(
      changeTitleSubheading({
        value: 'Выберите комплект слов, слова разбиты по темам',
      })
    );
    this.store.dispatch(
      changeTitleIcon({
        value: 'lnr-graduation-hat',
      })
    );

    this.chunks$ = from(this.storageService.get('english1')).pipe(
      map((list) => chunkArray(list, 5))
    );
  }

  practice() {
    this.router.navigate(['app/dashboard/practice']);
  }
}
