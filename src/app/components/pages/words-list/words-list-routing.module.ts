import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WordsListPage } from './words-list.page';

const routes: Routes = [
  {
    path: '',
    component: WordsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WordsListPageRoutingModule {}
