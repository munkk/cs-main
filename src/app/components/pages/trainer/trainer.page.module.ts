import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { ControlsModule } from '../../presentational/controls/controls.module';
import { LayoutModule } from '../../presentational/layout/layout.module';
import { TrainerPageComponent } from './trainer.page';
import { PresentationalModule } from '../../presentational/presentational.module';
import { SelectyComponent } from './selecty/selecty.component';
import { TestsModule } from '../../presentational/tests/tests.module';

const routes: Routes = [
  {
    path: '',
    component: TrainerPageComponent,
  },
  {
    path: 'selecty',
    component: SelectyComponent,
  },
];

@NgModule({
  imports: [
    ControlsModule,
    ControlsModule,
    TestsModule,
    PresentationalModule,
    LayoutModule,
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    RouterModule.forChild(routes),
  ],
  declarations: [TrainerPageComponent, SelectyComponent],
})
export class TrainerPageModule {}
