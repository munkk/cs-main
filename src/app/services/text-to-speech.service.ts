import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
// @ts-ignore:

const mapLanguageToRecognition: any = {
  chinese: 'zh-CN',
  english: 'en-EN',
};

@Injectable({
  providedIn: 'root',
})
export class TextToSpeechService {
  configure(language: string, pitch = 1, rate = 0.7) {
    if (!window.speechSynthesis) {
      return '';
    }

    const synth = window.speechSynthesis;

    if (synth.speaking) {
      console.error('speechSynthesis.speaking');
      return '';
    }

    const utterThis = new SpeechSynthesisUtterance();

    utterThis.onerror = function (event) {
      console.error('SpeechSynthesisUtterance.onerror');
    };

    utterThis.onend = function (event) {
      console.error('Done');
    };

    utterThis.lang = mapLanguageToRecognition[language];
    utterThis.pitch = pitch;
    utterThis.rate = rate;
    utterThis.volume = 1;
    utterThis.voice = window.speechSynthesis.getVoices()[2];

    return (text: string) => {
      utterThis.text = text;
      synth.speak(utterThis);
    };
  }
}
