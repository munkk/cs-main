import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ChipComponent } from './chiplist/chip/chip.component';
import { ChipListComponent } from './chiplist/chip-list.component';

import { ControlsModule } from './controls/controls.module';
import { LoaderComponent } from './loader/loader.component';

import {
  DropModalComponent,
  DropModalContent,
} from './modals/drop-modal/drop-modal.component';
import { ProgressComponent } from './progress/progress.component';
import { RatingComponent } from './rating/rating.component';
import { RoadCardComponent } from './road-card/road-card.component';
import { UserCrumb } from './usercrumb/usercrumb.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    ControlsModule,
    MatProgressBarModule,
  ],
  declarations: [
    RatingComponent,
    UserCrumb,
    DropModalComponent,
    DropModalContent,
    RoadCardComponent,
    LoaderComponent,
    ProgressComponent,
    ChipListComponent,
    ChipComponent,
  ],
  exports: [
    RatingComponent,
    UserCrumb,
    DropModalComponent,
    DropModalContent,
    RoadCardComponent,
    LoaderComponent,
    ProgressComponent,
    ChipListComponent,
    ChipComponent,
  ],
})
export class PresentationalModule {}
