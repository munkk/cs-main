import { AfterViewInit, Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { AuthService, JWTUser } from './auth/auth.service';
import { UserService } from './services/user.service';
import { loadUser } from './store/actions/user.actions';

const helper = new JwtHelperService();

import * as introJs from 'intro.js/intro.js';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  introJS = introJs();
  title = 'linguafront';

  constructor(
    private authSerice: AuthService,
    private store: Store,
    private router: Router
  ) {
    // this.authSerice.user.pipe(filter(Boolean)).subscribe((user: JWTUser) => {
    //   this.store.dispatch(loadUser({ id: user.sub }));
    // });
    // this.router.events.subscribe((value) => {
    //   if (value instanceof NavigationEnd) {
    //     setTimeout(() => {
    //       this.startTour(value.url.split('/')[2]);
    //     }, 1000);
    //   }
    // });
  }

  startTour(section) {
    switch (section) {
      case 'games':
        this.setGameTour();
        break;
      case 'chat':
        return;
        break;
      default:
        return;
    }

    this.introJS.start();
  }

  setGameTour() {
    this.introJS.setOptions({
      steps: [
        {
          element: document.querySelector('.road-card--match'),
          intro: 'Давайте сыграем в игру "Собери слова"',
        },
        {
          element: document.querySelector('.lingua-dynamolist'),
          intro: "Ok, wasn't that fun?",
          position: 'right',
        },
        {
          element: '#step3',
          intro: 'More features, more fun.',
          position: 'left',
        },
        {
          element: '#step4',
          intro: 'Another step.',
          position: 'bottom',
        },
        {
          element: '#step5',
          intro: 'Get it, use it.',
        },
      ],
    });
  }
}
