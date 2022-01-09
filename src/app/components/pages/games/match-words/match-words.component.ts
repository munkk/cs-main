import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DragQuestion } from 'src/app/components/presentational/tests/draggy/draggy.interfaces';
import { User } from 'src/app/interfaces/user.interface';
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
import { chunkArray } from 'src/app/utils/common';
import { GameOptions } from '../game.interface';

@Component({
  selector: 'match-words',
  templateUrl: './match-words.component.html',
  styleUrls: ['./match-words.component.scss'],
})
export class MatchWords {
  type: string = null;
  users: User[] = null;
  amount: string = null;
  chunks: DragQuestion[][] = null;
  currentPage = 0;
  progress = 0;
  controller = null;
  appOptions$: Observable<AppOptions>;

  constructor(
    private router: Router,
    private store: Store,
    private storageService: StorageService
  ) {
    const options: GameOptions = this.router.getCurrentNavigation()
      .extras as GameOptions;
    if (!options.type) {
      this.router.navigateByUrl(`/app/games`);
    } else {
      this.store.dispatch(changeActivityButtonTitle({ value: 'Next' }));
      this.setOptions(options);
      this.appOptions$ = this.store.pipe(select(selectAppOptions));
      this.setChunks();
    }
  }

  setController(controller) {
    this.controller = controller;
  }

  getChunk(): any {
    return this.chunks[this.currentPage];
  }

  setOptions(options) {
    this.users = options.users;
    this.type = options.type;
    this.amount = options.amount;
  }

  setChunks() {
    this.appOptions$.subscribe((options: AppOptions) => {
      this.storageService.get(options.type).then((list) => {
        this.chunks = chunkArray(list, 5).slice(0, (+this.amount || 20) / 5);
      });
    });
  }

  exit(event) {
    this.router.navigateByUrl('app/games');
  }

  onFinish(options) {
    this.progress = 100 / (this.chunks.length / (options.page + 1));

    if (!options.isDone) {
      this.store.dispatch(
        registerActivityButtonCallback({
          callback: () => {
            this.store.dispatch(hideActivityButton());
            this.controller.next();
            this.currentPage++;
          },
        })
      );
      this.store.dispatch(showActivityButton());
      return;
    }

    this.store.dispatch(
      registerActivityButtonCallback({
        callback: () => {
          this.router.navigate(['/app/games/match/result']);
          this.store.dispatch(
            changeActivityButtonTitle({ value: 'К списку игр' })
          );
          this.store.dispatch(
            registerActivityButtonCallback({
              callback: () => {
                this.store.dispatch(hideActivityButton());
                this.router.navigate(['/app/games']);
              },
            })
          );
        },
      })
    );
    this.store.dispatch(changeActivityButtonTitle({ value: 'Финиш' }));
    this.store.dispatch(showActivityButton());
  }
}
