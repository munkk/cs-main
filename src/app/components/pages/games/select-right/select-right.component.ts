import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DragQuestion } from 'src/app/components/presentational/tests/draggy/draggy.interfaces';
import { User } from 'src/app/interfaces/user.interface';
import { StorageService } from 'src/app/services/storage.service';
import { registerActivityButtonCallback } from 'src/app/store/actions/callbacks.actions';
import {
  changeActivityButtonTitle,
  hideActivityButton,
  showActivityButton,
} from 'src/app/store/actions/layout.actions';
import { chunkArray } from 'src/app/utils/common';
import { GameOptions } from '../game.interface';

@Component({
  selector: 'select-right',
  templateUrl: './select-right.component.html',
  styleUrls: ['./select-right.component.scss'],
})
export class SelectRight {
  type: string = null;
  users: User[] = null;
  amount: string = null;
  chunks: DragQuestion[][] = null;
  currentPage = 0;
  progress = 0;
  controller = null;

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
    this.storageService.get('english1').then((list) => {
      this.chunks = chunkArray(list, 5).slice(0, (+this.amount || 20) / 5);
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
