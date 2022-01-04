import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonColor } from '../../presentational/controls/button/button.interface';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from 'src/app/services/user.service';
import { map, shareReplay, switchMap, take } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'trainer-page',
  templateUrl: './trainer.page.html',
  styleUrls: ['./trainer.page.scss'],
})
export class TrainerPageComponent {
  constructor(private router: Router) {}

  goTest(data) {
    this.router.navigateByUrl('/app/trainer/' + data.type);
  }
}
