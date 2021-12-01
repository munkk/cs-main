import {
  Component,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { shuffle } from 'src/app/utils/common';
import { TextToSpeechService } from 'src/app/services/text-to-speech.service';
import {
  changeTitleSubheading,
  hideActivityButton,
  showActivityButton,
} from 'src/app/store/actions/layout.actions';
import { registerActivityButtonCallback } from 'src/app/store/actions/callbacks.actions';

@Component({
  selector: 'app-insert-word-test',
  templateUrl: './insert-word-test.page.html',
  styleUrls: ['./insert-word-test.page.scss'],
})
export class InsertWordTestPage {
  @ViewChild('successTemplate', { static: true })
  successTemplate: TemplateRef<any> | null = null;
  @ViewChild('failTemplate', { static: true })
  failTemplate: TemplateRef<any> | null = null;

  templateBlock: TemplateRef<any> | null = null;

  answer: any = '';
  unit;
  index = 0;
  copy = [];

  constructor(
    private store: Store,
    private router: Router,
    private textToSpeech: TextToSpeechService
  ) {
    this.store.dispatch(
      changeTitleSubheading({
        value: 'Прослушайте слово и выберите соответсвующий перевод',
      })
    );
    this.store.dispatch(
      registerActivityButtonCallback({
        callback: () => {
          if (this.index === 4) {
            this.router.navigate(['app/dashboard/finish']);
          }

          this.index++;
          this.answer = '';
          this.unit = this.copy[this.index];
          this.templateBlock = null;

          this.store.dispatch(hideActivityButton());
        },
      })
    );

    this.copy = shuffle(this.options);
    this.unit = this.copy[this.index];
  }

  options = [
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

  selectAnswer(answer) {
    if (!this.answer) {
      this.answer = answer;
      this.speak(this.unit.example);

      this.checkForCorrectness();
    }
  }

  getCompleteSentence() {
    return (
      this.unit.example.slice(0, 1).toUpperCase() + this.unit.example.slice(1)
    );
  }

  getIncompleteSentence() {
    return this.getCompleteSentence().replace(this.unit.foreignWord, '...');
  }

  checkForCorrectness() {
    if (this.answer === this.unit) {
      this.templateBlock = this.successTemplate;
    } else {
      this.templateBlock = this.failTemplate;
    }

    this.store.dispatch(showActivityButton());
  }

  speak(phrase) {
    const speak = this.textToSpeech.configure('english');

    speak && speak(phrase);
  }
}
