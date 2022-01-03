import { Component, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  AppOptions,
  selectAppOptions,
} from 'src/app/store/reducers/layout.reducer';
import { moduleMap } from './aside.constants';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit {
  asideWidth = 70;
  moduleMap = moduleMap;
  appOptions$: Observable<AppOptions>;

  constructor(private store: Store) {
    this.appOptions$ = this.store.pipe(select(selectAppOptions));
  }

  @ViewChild('aside', { static: false }) aside!: any;

  ngOnInit(): void {}
}
