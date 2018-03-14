import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
  providers:[
    Camera
  ]
})
export class CameraPage {

  private base64Image = "";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

  acionarCamera(){
    const confiuraçõesDeCaptura: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(confiuraçõesDeCaptura).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(`Texto da imagem: ${this.base64Image}`)
    }, (err) => {
     console.log(`Error: ${err}`)
    });
  }

}
