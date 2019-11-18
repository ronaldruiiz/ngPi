import { Component } from '@angular/core';
import {resultList, SpeechRecognitionService} from '@kamiazya/ngx-speech-recognition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    SpeechRecognitionService,
  ],
})
export class AppComponent {
  private synth = window.speechSynthesis;
  message = '';
  private voices;
  listen = ""
  title = 'ngRaspberryPi';
  leOn = false

  constructor(public _speech: SpeechRecognitionService){

  }

  commandVoice() {
    if (this.synth !== null) {
      this.voices = this.synth.getVoices();
      const utterThis = new SpeechSynthesisUtterance('Que accion desea realizar');
      utterThis.lang = 'es-EC';
      this.synth.speak(utterThis);
      const speking = this.synth.speaking;
      this.listen = 'warn';
      setTimeout(() => {
        this._speech.start();
      }, 1500);
      this._speech.onresult = ({results}) => {
        this.message = results.item(0).item(0).transcript;
      };
      this._speech.onend = () => {
        this.listen = '';
        console.log(this.message)
        if (this.message === 'encender') {
          this.leOn = true;
        } else {
          this.leOn = false;
        }
      };
    }
  }
}
