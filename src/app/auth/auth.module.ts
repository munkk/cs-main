import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptor } from './token.interceptor';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [],
  providers: [
    AuthGuard,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  imports: [CommonModule, RouterModule],
})
export class AuthModule {}
