import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions } from '@ionic-native/google-maps';
import { Platform } from 'ionic-angular';

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
  map: GoogleMap;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad MapsGooglePage');
    this.loadMap();
  }

  /* ngAfterViewInit(){
    console.log('ngAfterViewInit MapsGooglePage');
    this.loadMap();
  } */

  loadMap() {

    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 15,
      center: {lat: -22.903286, lng: -43.177541}
    });

    this.directionsDisplay.setMap(this.map);
  }
}
