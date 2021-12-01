

import { Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs';

import { WebSpeechRecognition } from 'src/app/classes/web-speech-recognition';

@Injectable({
  providedIn: 'root'
})
export class SpeechRecognitionService {
  recognition: any;
  isRecording: boolean = false;
  speechRecognition: any;

  private closeSubject$ = new Subject<any>();
  onResult$ = this.closeSubject$.asObservable();

  constructor(private ngZone: NgZone) {
    this.speechRecognition = new WebSpeechRecognition();
    this.speechRecognition.onResult.subscribe((value: any) => {
      this.ngZone.run(() => {
        this.closeSubject$.next(value)
      });

    });
  }

  start() {
    this.speechRecognition.start()
  }

}