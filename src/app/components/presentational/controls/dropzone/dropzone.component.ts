import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.scss'],
})
export class DropZone {
  @Output() onSuccess = new EventEmitter<any>();

  constructor(private toastr: ToastrService) {}

  onUploadError([file, msg, xr]) {
    // FIX

    this.onUploadSuccess(file);
  }

  onUploadSuccess(file) {
    this.toastr.success('Фаил загружен.');
    this.onSuccess.emit(file);
  }
}
