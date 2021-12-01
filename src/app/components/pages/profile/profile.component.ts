import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  changeTitleHeading,
  changeTitleIcon,
  changeTitleSubheading,
} from 'src/app/store/actions/layout.actions';
import { updateUser } from 'src/app/store/actions/user.actions';
import {
  selectUser,
  selectFetching,
} from 'src/app/store/reducers/user.reducer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfilePageComponent {
  user$: Observable<any>;
  isUpdating$: Observable<any>;

  credentials = {
    name: '',
  };

  constructor(private store: Store) {
    this.user$ = this.store.pipe(select(selectUser));
    this.isUpdating$ = this.store.pipe(select(selectFetching));

    this.store.dispatch(
      changeTitleHeading({
        value: 'Личный кабинет',
      })
    );
    this.store.dispatch(
      changeTitleSubheading({
        value: 'Настройте приложение по своему усмотрению',
      })
    );
    this.store.dispatch(
      changeTitleIcon({
        value: 'pe-7s-settings',
      })
    );
  }

  update() {
    this.store.dispatch(
      updateUser({
        name: this.credentials.name,
      })
    );
  }
}
