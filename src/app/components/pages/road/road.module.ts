import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { RoadPage } from './road.page';
import { PresentationalModule } from '../../presentational/presentational.module';

const routes: Routes = [
  {
    path: '',
    component: RoadPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RoundProgressModule,
    RouterModule.forChild(routes),
    PresentationalModule,
  ],
  declarations: [RoadPage],
})
export class RoadPageModule {}
