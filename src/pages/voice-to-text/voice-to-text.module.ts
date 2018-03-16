import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VoiceToTextPage } from './voice-to-text';

@NgModule({
  declarations: [
    VoiceToTextPage,
  ],
  imports: [
    IonicPageModule.forChild(VoiceToTextPage),
  ],
})
export class VoiceToTextPageModule {}
