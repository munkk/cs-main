import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Inject,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { from, Observable, of, Subject } from 'rxjs';
import { debounce, debounceTime, map } from 'rxjs/operators';
import { User } from 'src/app/interfaces/user.interface';
import { users } from 'src/app/mocks/users';
import { DynamolistComponent } from '../../../presentational/controls/dynamolist/dynamolist.component';
import { DialogData } from '../../../presentational/modals/drop-modal/drop-modal.component';

@Component({
  selector: 'configuration-modal',
  templateUrl: 'configuration-modal.component.html',
  styleUrls: ['./configuration-modal.component.scss'],
})
export class GameConfigurationModal {
  @Input() data: any = null;

  @Input() set isOpen(value: boolean) {
    value ? this.show(this.data) : this.hide();
  }

  @Output()
  onClose = new EventEmitter<any>();

  @Output()
  onPlay = new EventEmitter<any>();

  constructor(public dialog: MatDialog) {}

  show(data) {
    const dialogRef = this.dialog.open(GameConfigurationTemplate, {
      width: '100%',
      maxWidth: 600,
      data: {
        ...data,
        onPlay: (data) => this.onPlay.emit(data),
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
  selector: 'configuration-template',
  templateUrl: 'configuration-template.html',
  styleUrls: ['./configuration-template.scss'],
})
export class GameConfigurationTemplate {
  @ViewChild(DynamolistComponent, { static: false })
  dynamoList: DynamolistComponent;

  users: User[] = [];
  amount: string = '20';
  _friends = users;
  timeout: string = '30';

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
  ) {}

  play() {
    this.data.onPlay({
      users: this.users,
      amount: this.amount,
      type: this.data.type,
    });
  }

  addUser({ item }) {
    this.users.push(item);
  }
}
