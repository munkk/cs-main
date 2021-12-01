import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  changeTitleHeading,
  changeTitleIcon,
  changeTitleSubheading,
} from 'src/app/store/actions/layout.actions';

@Component({
  selector: 'app-road',
  templateUrl: './road.page.html',
  styleUrls: ['./road.page.scss'],
})
export class RoadPage {
  constructor(private store: Store, private router: Router) {
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
  }
}
