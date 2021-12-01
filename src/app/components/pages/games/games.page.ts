import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Inject,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { from, Observable, of, Subject } from 'rxjs';
import { debounce, debounceTime, map } from 'rxjs/operators';
import { User } from 'src/app/interfaces/user.interface';
import { DynamolistComponent } from '../../presentational/controls/dynamolist/dynamolist.component';
import { DialogData } from '../../presentational/modals/drop-modal/drop-modal.component';

@Component({
  selector: 'games-page',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage {
  isConfigurationModalOpen = false;
  isLobbyModalOpen = false;
  data = null;
  configurationData = null;

  constructor(private router: Router) {}

  configure(data) {
    this.data = data;
    setTimeout(() => {
      this.isConfigurationModalOpen = true;
    });
  }

  onPlay(data) {
    this.configurationData = data;
    this.isConfigurationModalOpen = false;
    setTimeout(() => {
      this.isLobbyModalOpen = true;
    });
  }

  onReady(data) {
    this.isLobbyModalOpen = false;
    setTimeout(() => {
      this.router.navigate([`/app/games/${data.type}`], data);
    });
  }
}
