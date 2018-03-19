import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CameraPage } from '../camera/camera';
import { MapsGooglePage } from '../maps-google/maps-google';
import { MapsDinamicPage } from '../maps-dinamic/maps-dinamic';
import { VoiceToTextPage } from '../voice-to-text/voice-to-text';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private tts: TextToSpeech) {

  }
  //push para ir com opção de volta
  //setroot para ir sem opção de volta pois se torna a página principal

  irPageCamera(){
    this.navCtrl.push(CameraPage);
  }

  irPageGoogleMaps(){
    this.navCtrl.push(MapsGooglePage);
  }

  irPageGoogleMapsDinamics(){
    this.navCtrl.push(MapsDinamicPage);
  }

  irTextParaFala(){
    this.navCtrl.push(VoiceToTextPage);
  }

  ngOnInit(){
    console.log('Teste de voz');
    this.tts.speak({text:'Olá, você acabou de abrir a página', locale:'pt-BR'})
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason) );
    console.log('Teste de voz');
  }

}
