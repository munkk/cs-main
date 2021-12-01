import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { PackComponent } from './pack/pack.component';
import { PacksPage } from './packs.page';

const routes: Routes = [
  {
    path: '',
    component: PacksPage,
  },
];

@NgModule({
  imports: [CommonModule, RoundProgressModule, RouterModule.forChild(routes)],
  declarations: [PacksPage, PackComponent],
  exports: [RouterModule],
})
export class PacksPageModule {}
