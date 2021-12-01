import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ChatPage } from './chat-page.component';
import { SafePipe } from 'src/app/pipes/safe.pipe';
import { PresentationalModule } from '../../presentational/presentational.module';

const routes: Routes = [
  {
    path: '',
    component: ChatPage,
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    PresentationalModule,
  ],
  providers: [SafePipe],
  declarations: [ChatPage],
})
export class ChatPageModule {}
