import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardBodyComponent } from './cards/card/card-body/card-body.component';
import { CardHeaderComponent } from './cards/card/card-header/card-header.component';
import { CardFooterComponent } from './cards/card/card-footer/card-footer.component';
import { CardComponent } from './cards/card/card.component';
import { AnimatedComponent } from './cards/animated/animated-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CardHeaderComponent,
    CardBodyComponent,
    CardComponent,
    CardFooterComponent,
    AnimatedComponent,
  ],
  exports: [
    CardHeaderComponent,
    CardBodyComponent,
    CardComponent,
    CardFooterComponent,
    AnimatedComponent,
  ],
})
export class LayoutModule {}
