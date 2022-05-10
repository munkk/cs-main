import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { FooterComponent } from './footer.component';
import { ActivityButtonComponent } from './activity-button/activity-button.component';
import { ControlsModule } from '../../presentational/controls/controls.module';

import { MatButtonModule } from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  imports: [ControlsModule, MatButtonModule, MatTooltipModule, CommonModule, RouterModule],
  exports: [FooterComponent],
  declarations: [FooterComponent, ActivityButtonComponent],
})
export class FooterModule {
  
}
