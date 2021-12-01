import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { ButtonColor, ButtonSize } from './button.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text!: string;
  @Input() icon!: string;
  @Input() size: keyof typeof ButtonSize = 'content';
  @Input() color!: keyof typeof ButtonColor;
  @Input() template: TemplateRef<any>;
  @Input() templateOn: 'hover' | 'click';

  @Output() onClick = new EventEmitter<any>();

  showTemplate = false;

  onClickButton(event: any) {
    this.onClick.emit(event);
  }

  getClasses() {
    const classes = [];
    classes.push(`button-${this.color}`);
    classes.push(`button-${this.size}`);
    return classes;
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event) {
    if (this.templateOn === 'hover') {
      this.showTemplate = true;
    }
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event) {
    if (this.templateOn === 'hover') {
      this.showTemplate = false;
    }
  }

  @HostListener('mouseclick', ['$event'])
  onMouseClick(event) {
    if (this.templateOn === 'click') {
      this.showTemplate = false;
    }
  }
}
