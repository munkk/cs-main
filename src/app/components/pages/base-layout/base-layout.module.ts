import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// MATERIAL
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';

import { BaseLayoutComponent } from './base-layout.component';
import { HeaderComponent } from '../../containers/header/header.component';
import { LogoComponent } from '../../presentational/logo/logo.component';
import { AsideComponent } from '../../containers/aside/aside.component';
import { FooterModule } from '../../containers/footer/footer.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/app/dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../dashboard/dashboard.module').then(
                (m) => m.DashboardPageModule
              ),
          },
        ],
      },
      {
        path: 'trainer',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../trainer/trainer.page.module').then(
                (m) => m.TrainerPageModule
              ),
          },
        ],
      },
      {
        path: 'chat',
        loadChildren: () =>
          import('../chat/chat-page.module').then((m) => m.ChatPageModule),
      },
      {
        path: 'courses',
        loadChildren: () =>
          import('../courses/courses-page.module').then((m) => m.CoursesPageModule),
      },
      {
        path: 'games',
        loadChildren: () =>
          import('../games/games.module').then((m) => m.GamesPageModule),
      },
      {
        path: 'lesson-maker',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../lesson-maker/lesson-maker-page.module').then(
                (m) => m.LessonMakerPageModule
              ),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatSidenavModule,
    MatFormFieldModule,
    FooterModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  declarations: [
    BaseLayoutComponent,
    HeaderComponent,
    AsideComponent,
    LogoComponent,
  ],
})
export class BaseLayoutPageModule {}
