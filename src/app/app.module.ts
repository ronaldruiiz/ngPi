import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SpeechRecognitionModule} from '@kamiazya/ngx-speech-recognition';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpeechRecognitionModule.withConfig({
      lang: 'es-EC',
      interimResults: true,
      maxAlternatives: 10,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
