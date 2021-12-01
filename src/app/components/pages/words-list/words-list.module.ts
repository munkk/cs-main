import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WordsListPageRoutingModule } from './words-list-routing.module';

import { WordsListPage } from './words-list.page';
import { WordsboxComponent } from './wordsbox/wordsbox.component';

@NgModule({
  imports: [CommonModule, WordsListPageRoutingModule],
  declarations: [WordsListPage, WordsboxComponent],
})
export class WordsListPageModule {}
