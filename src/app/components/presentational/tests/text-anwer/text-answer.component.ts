import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { selectProgressValue } from 'src/app/store/reducers/layout.reducer';
import { NavigationStart, Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { selectprogressBarCallback } from 'src/app/store/reducers/callbacks.reducer';
import { TextAnswerData } from './text-answer.interfaces';
import { TestBaseComponent } from '../test-base/test-base.component';

@Component({
  selector: 'text-answer',
  templateUrl: './text-answer.component.html',
  styleUrls: ['./text-answer.component.scss'],
})
export class TextAnswerComponent extends TestBaseComponent {
  @Input() data: TextAnswerData[];
}
