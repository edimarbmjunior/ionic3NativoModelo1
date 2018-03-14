import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions } from '@ionic-native/google-maps';
import { Platform } from 'ionic-angular';

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

  map: GoogleMap;
  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
  }

  /* ionViewDidEnter() {
    console.log('ionViewDidLoad MapsGooglePage');
    this.loadMap();
  } */

  ngAfterViewInit(){
    console.log('ngAfterViewInit MapsGooglePage');
    this.loadMap();
  }

  loadMap() {

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        // Now you can use all methods safely.
        this.map.addMarker({
          title: 'Ionic',
          icon: 'blue',
          animation: 'DROP',
          position: {
            lat: 43.0741904,
            lng: -89.3809802
          }
        })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('clicked');
              });
          });
      });
  }
}
