import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CameraPage } from '../camera/camera';
import { MapsGooglePage } from '../maps-google/maps-google';
import { MapsDinamicPage } from '../maps-dinamic/maps-dinamic';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

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

}
