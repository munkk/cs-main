import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

import { PracticePage } from './practice.component';
import { PracticeCardComponent } from 'src/app/components/presentational/practice-card/practice-card.component';
import { ControlsModule } from '../../presentational/controls/controls.module';
import { LayoutModule } from '../../presentational/layout/layout.module';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
};

const routes: Routes = [
  {
    path: '',
    component: PracticePage,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SwiperModule,
    ControlsModule,
    LayoutModule,
    MatCardModule,
    MatChipsModule,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
  declarations: [PracticePage, PracticeCardComponent],
})
export class PracticePageModule {}
