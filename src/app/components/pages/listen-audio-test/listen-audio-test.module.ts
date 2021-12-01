import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { ListenAudioTestPage } from './listen-audio-test.page';
import { RouterModule, Routes } from '@angular/router';
import { ControlsModule } from '../../presentational/controls/controls.module';

const routes: Routes = [
  {
    path: '',
    component: ListenAudioTestPage,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ControlsModule,
    MatCardModule,
    MatButtonModule,
  ],
  declarations: [ListenAudioTestPage],
})
export class ListenAudioTestPageModule {}
