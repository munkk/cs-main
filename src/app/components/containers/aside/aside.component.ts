import { Component, OnInit, ViewChild } from '@angular/core';
import { pages } from './aside.constants';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent implements OnInit {
  asideWidth = 70;
  pages = pages;

  @ViewChild('aside', { static: false }) aside!: any;

  constructor() {}

  ngOnInit(): void {}
}
