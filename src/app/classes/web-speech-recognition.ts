import { Observable, Subject } from 'rxjs';

const SpeechRecognition =
  (window as any).SpeechRecognition ||
  (window as any).webkitSpeechRecognition ||
  (window as any).msSpeechRecognition;
const SpeechGrammarList =
  (window as any).SpeechGrammarList ||
  (window as any).webkitSpeechGrammarList ||
  (window as any).msSpeechGrammarList;

const mapLanguageToRecognition = {
  chinese: "zh-CN",
  english: "en-EN"
};

export class WebSpeechRecognition {
  recognition: any;
  isRecording: boolean = false;
  onResult = new Subject<string>();

  constructor() {
    this.recognition = new SpeechRecognition();
    const speechRecognitionList = new SpeechGrammarList();
    const grammar =
      "#JSGF V1.0; grammar phrase; public <text> = " + "patterns" + ";";
    speechRecognitionList.addFromString(grammar, 1);
    this.recognition.grammars = speechRecognitionList;
    this.recognition.lang = "en-EN";
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;
    this.recognition.continuous = false;
    this.isRecording = false;

    this.recognition.onstart = () => {
      this.isRecording = true;
    };

    this.recognition.onend = () => {
      this.isRecording = false;
    };

    this.recognition.onerror = function () {
      this.isRecording = false;
    };

    this.recognition.onresult = (event: any) => {
      this.onResult.next(event.results[0][0].transcript);

      console.log(event.results[0][0].transcript);
    };
  }

  start() {
    if (this.isRecording) {
      return;
    }
    try {
      this.recognition.start();
    } catch (err) {
      console.log(err);
      this.isRecording = false;
    }
  }

  stop() {
    try {
      this.recognition.stop();
    } catch (err) {
      console.log(err);
    }
  }
}
