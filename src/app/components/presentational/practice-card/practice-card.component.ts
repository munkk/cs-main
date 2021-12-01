import { Component, OnInit, Input } from '@angular/core';
// import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

import { TextToSpeechService } from 'src/app/services/text-to-speech.service';
import { SpeechRecognitionService } from 'src/app/services/speech-recognition.service';
import { Observable } from 'rxjs';
import { ButtonColor } from '../controls/button/button.interface';

@Component({
  selector: 'app-practice-card',
  templateUrl: './practice-card.component.html',
  styleUrls: ['./practice-card.component.scss'],
  providers: [SpeechRecognitionService],
})
export class PracticeCardComponent implements OnInit {
  userSpeechResult$!: Observable<any>;

  @Input() subject: any;

  constructor(
    private textToSpeech: TextToSpeechService,
    private speechRecogintion: SpeechRecognitionService
  ) {}

  ngOnInit() {
    this.userSpeechResult$ = this.speechRecogintion.onResult$;
  }

  speak(phrase: any) {
    const speak: any = this.textToSpeech.configure('english');

    speak(phrase);
  }

  record() {
    console.log('record');

    this.speechRecogintion.start();
  }
}
