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
import { setAppOptions } from './store/actions/layout.actions';
import { StorageService } from './services/storage.service';
import { StudyService } from './services/study.service';

const languageApp = {
  type: 'language',
  title: 'CS.Lingua',
  mainColor: '#6768ab',
  modules: [
    {
      type: 'course',
    },
    {
      type: 'chat',
    },
    {
      type: 'trainer',
    },
    {
      type: 'games',
    },
  ],
};

const expertiseApp = {
  type: 'expertise',
  title: 'CS.Expertise',
  mainColor: '#20b8d6',
  modules: [
    {
      type: 'course',
    },
    {
      type: 'chat',
    },
    {
      type: 'trainer',
    },
    {
      type: 'wiki',
    },
  ],
};

const unnormalized = ['english'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  introJS = introJs();

  constructor(
    private authSerice: AuthService,
    private store: Store,
    private router: Router,
    private storageService: StorageService,
    private studyService: StudyService
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
    this.setBaseOptions(this.getAppType());
    this.checkAndRetrieveData();
  }

  getAppType() {
    const port = window.location.port;
    switch (port) {
      case '4300': {
        return languageApp;
      }
      case '4200': {
        return expertiseApp;
      }
      default: {
        return null;
      }
    }
  }

  async checkAndRetrieveData() {
    const type = this.getAppType().type;
    const list = await this.storageService.get(type);
    if (!list) {
      this.studyService.getList(type).subscribe((res: any) => {
        let items = res.data;
        if (unnormalized.includes(type)) {
          items = this[`${type}PerformNormalization`](res.data);
        }

        this.storageService.set(type, items);
      });
    }
  }

  englishPerformNormalization(data) {
    return data.map((item) => {
      return {
        id: item.id,
        text: item.foreignWord,
        answer: item.translation,
        exampleText: item.example,
        exampleAnswer: item.exampleTranslation,
      };
    });
  }

  setBaseOptions(options) {
    this.store.dispatch(setAppOptions(options));
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
