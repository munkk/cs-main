import {Component, ViewChild, ElementRef} from '@angular/core';
import { sections } from './footer.helper';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  sections = sections;
}
