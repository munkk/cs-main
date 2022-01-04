import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ControlsModule } from '../controls/controls.module';

import { TextAnswerComponent } from './text-anwer/text-answer.component';

@NgModule({
  imports: [CommonModule, ControlsModule],
  declarations: [TextAnswerComponent],
  exports: [TextAnswerComponent],
})
export class TestsModule {}
