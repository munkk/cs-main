import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  AppOptions,
  selectAppOptions,
} from 'src/app/store/reducers/layout.reducer';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  appOptions$: Observable<AppOptions>;

  constructor(private router: Router, private store: Store) {
    this.appOptions$ = this.store.pipe(select(selectAppOptions));
  }

  ngOnInit() {}
}
