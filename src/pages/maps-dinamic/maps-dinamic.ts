import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, MarkerOptions, Marker } from '@ionic-native/google-maps';

declare var google;

/**
 * Generated class for the MapsDinamicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maps-dinamic',
  templateUrl: 'maps-dinamic.html',
  providers:[
    GoogleMaps
  ]
})
export class MapsDinamicPage {

  //AIzaSyDUCB-dK2diAJV9IfLUly06NK8b62vH-FM

  map: GoogleMap;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private googleMaps: GoogleMaps) {}

  ionViewDidLoad() {
    console.log("*--*-*-*-*-*-*-*-* ionViewDidLoad *--*-*-*-*-*-*-*-*");
    console.log("*--*-*-*-*-*-*-*-* mapasDinamicos() *--*-*-*-*-*-*-*-*");
    this.mapasDinamicos();
  }

  mapasDinamicos(){

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

    this.map = GoogleMaps.create('map', mapOptions);

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

      }
    );
  }

}
