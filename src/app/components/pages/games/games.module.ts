import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { PresentationalModule } from '../../presentational/presentational.module';
import { GamesPage } from './games.page';
import { ControlsModule } from '../../presentational/controls/controls.module';
import { MatchWords } from './match-words/match-words.component';
import {
  GameConfigurationModal,
  GameConfigurationTemplate,
} from './configuration-modal/configuration-modal.component';
import { LobbyModal, LobbyTemplate } from './lobby-modal/lobby-modal.component';
import { GameParticipantComponent } from './game-participant/game-participant.component';
import { GameResultPage } from './game-result/game-result.page';
import { SelectRight } from './select-right/select-right.component';
import { TestsModule } from '../../presentational/tests/tests.module';

const routes: Routes = [
  {
    path: '',
    component: GamesPage,
    pathMatch: 'full',
  },
  {
    path: 'match',
    component: MatchWords,
  },
  {
    path: 'match/result',
    component: GameResultPage,
  },
  {
    path: 'select',
    component: SelectRight,
  },
];

@NgModule({
  imports: [
    MatProgressBarModule,
    CommonModule,
    TestsModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    PresentationalModule,
    ControlsModule,
  ],
  declarations: [
    GameParticipantComponent,
    GameConfigurationModal,
    GameConfigurationTemplate,
    LobbyModal,
    LobbyTemplate,
    MatchWords,
    SelectRight,
    GamesPage,
  ],
})
export class GamesPageModule {}
