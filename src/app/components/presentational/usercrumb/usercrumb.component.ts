import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-crumb',
  templateUrl: './usercrumb.component.html',
  styleUrls: ['./usercrumb.component.scss'],
})
export class UserCrumb {
  @Input() user: any;
  @Input() size: 'sm' | 'md' | 'lg';
  @Input() avatarType: 'round' | 'square';
  @Input() withName: boolean;
  @Input() withPhrase: boolean;
  @Input() showStatus: boolean;
}
