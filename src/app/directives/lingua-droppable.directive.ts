import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  Input,
  EventEmitter,
  Output,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appLinguaDroppable]',
})
export class LinguaDroppableDirective {
  backgroundColor = 'white';

  @Input() element: any;

  @Output() onEmitCoords = new EventEmitter<any>();

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostBinding('style.backgroundColor') get getBackgroundColor() {
    return this.backgroundColor;
  }

  @HostListener('mouseover', ['$event']) onMouseOver(e: any) {
    this.backgroundColor = 'red';

    this.onEmitCoords.emit(this.elementRef);
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(e: any) {
    this.backgroundColor = 'white';

    this.onEmitCoords.emit({
      x: this.elementRef.nativeElement.offsetTop,
      y: this.elementRef.nativeElement.offsetLeft,
    });
  }
}
