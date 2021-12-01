import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Inject,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'game-result',
  templateUrl: './game-result.page.html',
  styleUrls: ['./game-result.page.scss'],
})
export class GameResultPage {}
