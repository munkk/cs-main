import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ControlsModule } from '../controls/controls.module';
import { PresentationalModule } from '../presentational.module';
import { DraggyComponent } from './draggy/draggy.component';

import { TextAnswerComponent } from './text-anwer/text-answer.component';

@NgModule({
  imports: [CommonModule, ControlsModule, PresentationalModule, DragDropModule],
  declarations: [DraggyComponent, TextAnswerComponent],
  exports: [DraggyComponent, TextAnswerComponent],
})
export class TestsModule {}
