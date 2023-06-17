import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonColor } from '../../presentational/controls/button/button.interface';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from 'src/app/services/user.service';
import { map, shareReplay, switchMap, take } from 'rxjs/operators';
// import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginPageComponent {
  credentials = {
    email: '',
    password: '',
    remember: '',
  };

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  isValid() {
    return this.credentials.email && this.credentials.password;
  }

  async login() {
    if (!this.isValid()) return;

    this.authService.login(this.credentials).subscribe(
      (res) => {
        if (res) {
          window.location.href = window.location.origin + '/app/dashboard';
          // CHECK GUARD !!!
          //this.router.navigateByUrl('/app/dashboard');
        }
      },
      (err) => this.toastr.error(err.error?.message)
    );
  }
}
