import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { AutoLoginGuard } from './auth/guards/auto-login.guard';

const routes: Routes = [
  {
    path: 'register',
    loadChildren: () =>
      import('./components/pages/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
    // canActivate: [AutoLoginGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/pages/login/login.module').then(
        (m) => m.LoginPageModule
      ),
    // canActivate: [AutoLoginGuard],
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./components/pages/base-layout/base-layout.module').then(
        (m) => m.BaseLayoutPageModule
      ),
    // canActivate: [AuthGuard],
  },
  // {
  //   path: 'lessons-list',
  //   loadChildren: () => import('./components/pages/lessons-list/lessons-list.module').then( m => m.LessonsListPageModule)
  // },
  // {
  //   path: 'practice',
  //   loadChildren: () => import('./components/pages/practice/practice.module').then( m => m.PracticePageModule)
  // },
  // {
  //   path: 'result-test',
  //   loadChildren: () => import('./components/pages/result-test/result-test.module').then( m => m.ResultTestPageModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
