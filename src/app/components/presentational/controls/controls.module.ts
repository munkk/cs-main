import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  DropzoneConfigInterface,
  DropzoneModule,
  DROPZONE_CONFIG,
} from 'ngx-dropzone-wrapper';

import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DropZone } from './dropzone/dropzone.component';
import { DynamolistComponent } from './dynamolist/dynamolist.component';
import { InputComponent } from './input/input.component';
import { SweetSuccessComponent } from './sweet-success/sweet-success.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'http://localhost:3000',
  maxFilesize: 50,
  acceptedFiles: 'image/*',
};

@NgModule({
  imports: [DropzoneModule, CommonModule, MatButtonModule],
  declarations: [
    ButtonComponent,
    CheckboxComponent,
    InputComponent,
    DynamolistComponent,
    SweetSuccessComponent,
    DropZone,
  ],
  exports: [
    ButtonComponent,
    CheckboxComponent,
    InputComponent,
    DynamolistComponent,
    SweetSuccessComponent,
    DropZone,
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG,
    },
  ],
})
export class ControlsModule {}
