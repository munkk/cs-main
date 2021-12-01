import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Inject,
} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  ok: (files) => void;
}

@Component({
  selector: 'app-drop-modal',
  templateUrl: './drop-modal.component.html',
  styleUrls: ['./drop-modal.component.scss'],
})
export class DropModalComponent {
  @Output() onOk = new EventEmitter<any>();

  constructor(public dialog: MatDialog) {}

  public open() {
    const dialogRef = this.dialog.open(DropModalContent, {
      width: '100%',
      maxWidth: 500,
      data: {
        ok: this.ok.bind(this),
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ok(files) {
    this.onOk.emit({ files });
  }
}

@Component({
  selector: 'drop-modal-content',
  templateUrl: 'drop-modal-content.html',
})
export class DropModalContent {
  files: File[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onUploadSuccess(files) {
    this.files.push(files);
  }

  ok() {
    this.data.ok(this.files);
  }
}
