import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterPageComponent {
  credentials = {
    userName: '',
    email: '',
    password: '',
    password_repeat: '',
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  isValid() {
    return (
      this.credentials.email &&
      this.credentials.password &&
      this.credentials.password_repeat &&
      this.credentials.password === this.credentials.password_repeat
    );
  }

  async register() {
    if (!this.isValid()) return;
    const { userName, email, password } = this.credentials;

    this.authService.register({ email, password }).subscribe(
      (res) => {
        if (res) {
          this.toastr.success('Отлично! Теперь подтвердите свой email.');
        }
      },
      (err) => this.toastr.error(err.error?.message)
    );
  }
}
