import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

//NGRX
import { StoreModule } from '@ngrx/store';
import { layoutReducer } from './store/reducers/layout.reducer';
import { callbacksReducer } from './store/reducers/callbacks.reducer';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './components/containers/footer/footer.component';
import { AsideComponent } from './components/containers/aside/aside.component';
import { ButtonComponent } from './components/presentational/controls/button/button.component';
import { JWT_TOKEN } from './auth/auth.service';
import { TokenInterceptor } from './auth/token.interceptor';
import { AuthModule } from './auth/auth.module';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user.effects';
import { userReducer } from './store/reducers/user.reducer';
import { MatDialogModule } from '@angular/material/dialog';
import { SafePipe } from './pipes/safe.pipe';

export function jwtOptionsFactory(storage: any) {
  return {
    tokenGetter: () => {
      return storage.get(JWT_TOKEN);
    },
    whitelistedDomains: ['localhost:5000', '192.168.0.16:5000'],
  };
}

@NgModule({
  declarations: [AppComponent, SafePipe],
  imports: [
    AuthModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    // JwtModule.forRoot({
    //   jwtOptionsProvider: {
    //     provide: JWT_OPTIONS,
    //     useFactory: jwtOptionsFactory,
    //     deps: [Storage]
    //   }
    // }),

    // @ts-ignore:
    [
      StoreModule.forRoot({
        user: userReducer as any,
        layout: layoutReducer as any,
        callbacks: callbacksReducer as any,
      }),
    ],
    EffectsModule.forRoot([UserEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
