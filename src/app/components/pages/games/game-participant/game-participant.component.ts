import { AfterViewInit, Component, Input } from '@angular/core';
import { interval } from 'rxjs';

import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'game-participant',
  templateUrl: './game-participant.component.html',
  styleUrls: ['./game-participant.component.scss'],
})
export class GameParticipantComponent implements AfterViewInit {
  @Input() user: User;

  progress = 0;
  curSec: number = 0;

  ngAfterViewInit() {
    this.startTimer();
  }

  startTimer() {
    const timer$ = interval(1000);

    const sub = timer$.subscribe((sec) => {
      this.progress = this.progress + sec;

      if (this.progress === 100) {
        sub.unsubscribe();
      }
    });
  }
}
