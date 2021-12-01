import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { ResultTestPage } from './result-test.page';
import { PresentationalModule } from '../../presentational/presentational.module';

const routes: Routes = [
  {
    path: '',
    component: ResultTestPage,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    MatCardModule,
    PresentationalModule,
  ],
  declarations: [ResultTestPage],
})
export class ResultTestPageModule {}
