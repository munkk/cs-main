import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { DragNDropTestPage } from './drag-n-drop-test.component';
import { LinguaDroppableDirective } from 'src/app/directives/lingua-droppable.directive';
import { RouterModule, Routes } from '@angular/router';
import { PresentationalModule } from '../../presentational/presentational.module';
import { TestsModule } from '../../presentational/tests/tests.module';

const routes: Routes = [
  {
    path: '',
    component: DragNDropTestPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    TestsModule,
    FormsModule,
    DragDropModule,
    RouterModule.forChild(routes),
    PresentationalModule,
  ],
  declarations: [DragNDropTestPage, LinguaDroppableDirective],
})
export class DragNDropTestPageModule {}
