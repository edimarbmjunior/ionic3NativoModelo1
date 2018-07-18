import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SpeechRecognition } from '@ionic-native/speech-recognition';

/**
 * Generated class for the VoiceToTextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-voice-to-text',
  templateUrl: 'voice-to-text.html'
})
export class VoiceToTextPage {

  msg:string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private tts: TextToSpeech,
    private speechRecognition: SpeechRecognition) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad VoiceToTextPage');
  }

  ngOnInit(){
    console.log('Teste de voz');
    this.tts.speak({text:'Olá, você acabou de abrir a página', locale:'pt-BR'})
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason) );
    console.log('Teste de voz');
  }

  comandoDeVoz(){
    //Verifica se o usuario tem disponivel no celular a função para utilizar o recuros
    this.speechRecognition.isRecognitionAvailable()
      .then((available: boolean) => {
        if(available){
          //Verifica se o usuario tem permissão de utilizar o recurso
          this.speechRecognition.hasPermission()
            .then((hasPermission: boolean) => {
              if(hasPermission){
                this.speechRecognition.startListening({language:'pt-BR'})
                  .subscribe(
                    (matches: Array<string>) => {
                      for(let item of matches){
                        this.msg += item + ' ';
                      }
                    },
                    (onerror) => alert(`Error: ${onerror}`)
                  );
              }else{
                this.msg = "O usuario necessita de permissão!";
                //Pergunta se quer dar permissão para o usuario
                this.speechRecognition.requestPermission()
                  .then(
                    () => {this.comandoDeVoz();},
                    () => {this.msg = "O recurso não está disponível, por permissão do usuário!";}
                  );
              }
            })
        }else{
          this.msg = "O recurso não está disponível!";
        }
      });
  }
}
