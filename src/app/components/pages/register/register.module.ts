import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { RegisterPageComponent } from './register.component';
import { ControlsModule } from '../../presentational/controls/controls.module';
import { LayoutModule } from '../../presentational/layout/layout.module';

const routes: Routes = [
  {
    path: '',
    component: RegisterPageComponent,
  },
];

@NgModule({
  imports: [
    ControlsModule,
    LayoutModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule.forChild(routes),
  ],
  declarations: [RegisterPageComponent],
})
export class RegisterPageModule {}
