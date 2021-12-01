import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import {
  changeActivityButtonTitle,
  showActivityButton,
  changeTitleSubheading,
  hideActivityButton,
} from 'src/app/store/actions/layout.actions';
import { registerActivityButtonCallback } from 'src/app/store/actions/callbacks.actions';

declare var Swiper: any;

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
})
export class PracticePage implements OnInit {
  public config: any = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false,
  };

  slides = [
    {
      id: 0,
      foreignWord: 'go',
      translation: 'идти; пойти; ехать',
      example: "it's time to go",
      alternative: '',
      exampleTranslation: 'Время идти',
    },
    {
      id: 1,
      foreignWord: 'can',
      translation: 'мочь; смочь; уметь',
      example: 'I can read',
      alternative: '',
      exampleTranslation: 'Я умею читать',
    },
    {
      id: 2,
      foreignWord: 'get',
      translation: 'получить; приобрести',
      example: 'can I get some coffee?',
      alternative: 'can I get some coffee',
      exampleTranslation: 'Можно мне кофе?',
    },
    {
      id: 3,
      foreignWord: 'if',
      translation: 'если',
      example: 'i will go if you go',
      alternative: '',
      exampleTranslation: 'Я пойду, если пойдешь ты',
    },
    {
      id: 4,
      foreignWord: 'all',
      translation: 'все',
      example: 'we all make mistakes',
      alternative: '',
      exampleTranslation: 'мы все совершаем ошибки',
    },
  ];

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,
    pager: false,
    coverflowEffect: {
      slideShadows: false,
    },
  };

  constructor(private store: Store, private router: Router) {
    this.store.dispatch(changeActivityButtonTitle({ value: 'Тест' }));
    this.store.dispatch(showActivityButton());
    this.store.dispatch(
      changeTitleSubheading({
        value: 'Практикуйте произношение и практикуйте произношение',
      })
    );
    this.store.dispatch(
      registerActivityButtonCallback({
        callback: () => {
          this.store.dispatch(hideActivityButton());
          this.router.navigate(['app/dashboard/exercise1']);
        },
      })
    );
  }

  ngOnInit() {}
}
