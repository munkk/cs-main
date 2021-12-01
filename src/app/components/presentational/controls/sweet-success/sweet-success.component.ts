import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sweet-success',
  templateUrl: './sweet-success.component.html',
  styleUrls: ['./sweet-success.component.scss'],
})
export class SweetSuccessComponent implements OnInit {
  @Input() type: string = 'success';

  constructor() { }

  ngOnInit() {}

}
