import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { SafePipe } from 'src/app/pipes/safe.pipe';

@Component({
  selector: 'chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatPage {
  token = '123';

  constructor(
    private authService: AuthService,
    private safePipe: SafePipe,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {
    //this.setToken();

    window.addEventListener('message', this.receiveMessage, false);
  }

  getUrl() {
    const url = (environment as any).chatURL;
    return this.safePipe.transform(url, 'resourceUrl');
  }

  setToken() {
    this.authService.getJwtToken().then((value) => {
      this.token = value;
      this.cd.markForCheck();
    });
  }

  receiveMessage = (event: any) => {
    switch (event.data.message) {
      case 'ChatMessage':
        return this.onMessage(event.data);
      case 'ChatDuel':
        return this.onDuel(event.data);
    }
  };

  onMessage(data) {}

  onDuel(data) {
    this.router.navigateByUrl('/app/games');
  }
}
