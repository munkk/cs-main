import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LessonMakerPage } from './lesson-maker-page.component';

const routes: Routes = [
  {
    path: '',
    component: LessonMakerPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [LessonMakerPage],
})
export class LessonMakerPageModule {}
