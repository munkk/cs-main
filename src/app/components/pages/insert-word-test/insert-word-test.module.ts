import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { InsertWordTestPage } from './insert-word-test.page';
import { ControlsModule } from '../../presentational/controls/controls.module';

const routes: Routes = [
  {
    path: '',
    component: InsertWordTestPage,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ControlsModule,
    MatCardModule,
  ],
  declarations: [InsertWordTestPage],
})
export class InsertWordTestPageModule {}
