import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() type?: string = '';
  @Input() label?: string = '';
  @Input() value?: string = '';
  @Input() placeholder?: string = '';

  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();

  handleChange(event: any) {
    this.onChange.emit(event.target.value);
  }

  constructor() {}
}
