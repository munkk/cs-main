import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { SafePipe } from 'src/app/pipes/safe.pipe';

@Component({
  selector: 'courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesPage {

  constructor(
    private authService: AuthService,
    private safePipe: SafePipe,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {}

  getUrl() {
    const url = (environment as any).coursesURl;
    return this.safePipe.transform(url, 'resourceUrl');
  }
 
}
