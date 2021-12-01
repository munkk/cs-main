import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  Output,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { from, Observable, of, Subject } from 'rxjs';
import { debounce, debounceTime, map } from 'rxjs/operators';
import { UserCrumb } from 'src/app/components/presentational/usercrumb/usercrumb.component';
import { User } from 'src/app/interfaces/user.interface';
import { shuffle } from 'src/app/utils/common';
import { DynamolistComponent } from '../../../presentational/controls/dynamolist/dynamolist.component';
import { DialogData } from '../../../presentational/modals/drop-modal/drop-modal.component';

@Component({
  selector: 'lobby-modal',
  templateUrl: 'lobby-modal.component.html',
  styleUrls: ['./lobby-modal.component.scss'],
})
export class LobbyModal {
  @Input() data: any = null;

  @Input() set isOpen(value: boolean) {
    value ? this.show(this.data) : this.hide();
  }

  @Output()
  onClose = new EventEmitter<any>();

  @Output()
  onReady = new EventEmitter<any>();

  constructor(public dialog: MatDialog) {}

  show(data) {
    const dialogRef = this.dialog.open(LobbyTemplate, {
      width: '100%',
      maxWidth: 600,
      data: {
        ...data,
        onReady: (data) => this.onReady.emit(data),
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.onClose.emit();
    });
  }

  hide() {
    this.dialog.closeAll();
  }
}

@Component({
  selector: 'lobby-template',
  templateUrl: 'lobby-template.html',
  styleUrls: ['./lobby-template.scss'],
})
export class LobbyTemplate implements AfterViewInit {
  @ViewChildren(UserCrumb, { read: ElementRef })
  usercrumbs: QueryList<UserCrumb>;

  usersReady = 0;
  amount: string = '20';

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    const crumbs = this.usercrumbs.toArray();
    this.setAllInactive(crumbs);
    this.setRandomlyActive(crumbs);
  }

  setAllInactive(crumbs) {
    crumbs.forEach(this.addInactiveClass.bind(this));
  }

  setRandomlyActive(crumbs) {
    const _crumbs = shuffle(crumbs);
    for (let i = 0; i < _crumbs.length; i++) {
      setTimeout(() => {
        this.addActiveClass(_crumbs[i]);
        this.usersReady++;
        if (this.usersReady === _crumbs.length) {
          this._onReady();
        }
      }, Math.floor(Math.random() * 5 * 1000));
    }
  }

  addInactiveClass(crumb) {
    this.renderer.addClass(crumb.nativeElement, 'play-inactive');
  }

  addActiveClass(crumb) {
    this.renderer.removeClass(crumb.nativeElement, 'play-inactive');
  }

  _onReady() {
    const { type, amount, users } = this.data;

    this.data.onReady({
      type,
      amount,
      users,
    });
  }
}
