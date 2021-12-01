import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { DashboardComponent } from './dashboard.component';
import { PageTitleComponent } from '../../presentational/page-title/page-title.component';

import { PresentationalModule } from '../../presentational/presentational.module';

// import { NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';
// import { HeaderComponent } from 'src/app/components/smart/header/header.component';
// import { LessonComponent } from 'src/app/components/dumb/lesson/lesson.component';
// import { RoundProgressModule } from 'angular-svg-round-progressbar';
// import { PageTitleComponent } from 'src/app/components/dumb/page-title/page-title.component';
// import { ProgressComponent } from 'src/app/components/dumb/progress/progress.component';

// import { SweetSuccessComponent } from 'src/app/components/dumb/sweet-success/sweet-success.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../road/road.module').then((m) => m.RoadPageModule),
      },
      {
        path: 'wordslist',
        loadChildren: () =>
          import('../words-list/words-list.module').then(
            (m) => m.WordsListPageModule
          ),
      },
      {
        path: 'practice',
        loadChildren: () =>
          import('../practice/practice.module').then(
            (m) => m.PracticePageModule
          ),
      },
      {
        path: 'exercise1',
        loadChildren: () =>
          import('../drag-n-drop-test/drag-n-drop-test.module').then(
            (m) => m.DragNDropTestPageModule
          ),
      },
      {
        path: 'exercise2',
        loadChildren: () =>
          import('../listen-audio-test/listen-audio-test.module').then(
            (m) => m.ListenAudioTestPageModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../profile/profile.module').then((m) => m.ProfilePageModule),
      },
      {
        path: 'exercise3',
        loadChildren: () =>
          import('../insert-word-test/insert-word-test.module').then(
            (m) => m.InsertWordTestPageModule
          ),
      },
      {
        path: 'finish',
        loadChildren: () =>
          import('../result-test/result-test.module').then(
            (m) => m.ResultTestPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    PresentationalModule,
    MatTabsModule,
  ],
  declarations: [DashboardComponent, PageTitleComponent],
  entryComponents: [],
})
export class DashboardPageModule {}
