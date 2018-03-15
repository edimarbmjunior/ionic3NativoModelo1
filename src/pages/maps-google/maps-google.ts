import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';
//import { GoogleMaps, GoogleMap } from '@ionic-native/google-maps';

declare var google;

/**
 * Generated class for the MapsGooglePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maps-google',
  templateUrl: 'maps-google.html'
})
export class MapsGooglePage {

  // Chave android maps:AIzaSyCY84UGfDif1-XVuQWSBf4WJraBoEOedwE
  // Chave ios maps:AIzaSyADnPHCDL5KiYidKVEvXZq9BcSetBdhZec
  //ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="AIzaSyCY84UGfDif1-XVuQWSBf4WJraBoEOedwE" --variable API_KEY_FOR_IOS="AIzaSyADnPHCDL5KiYidKVEvXZq9BcSetBdhZec"

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  start = 'chicago, il';
  end = 'chicago, il';
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {}

  ionViewDidEnter() {
    this.loadMap();
  }

  loadMap(){
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 13,
      center: {lat: -22.903202, lng: -43.177310}
    });

    this.directionsDisplay.setMap(this.map);
  }
}
