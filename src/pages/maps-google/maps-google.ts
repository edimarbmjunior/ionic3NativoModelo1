import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapsGooglePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maps-google',
  templateUrl: 'maps-google.html',
})
export class MapsGooglePage {
  // Chave android maps:AIzaSyCY84UGfDif1-XVuQWSBf4WJraBoEOedwE
  // Chave ios maps:AIzaSyADnPHCDL5KiYidKVEvXZq9BcSetBdhZec
  // Chave JS API:AIzaSyCNAnfSYo-oC-S-WTHkoHNLxewAovKvFog
  //ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="AIzaSyCY84UGfDif1-XVuQWSBf4WJraBoEOedwE" --variable API_KEY_FOR_IOS="AIzaSyADnPHCDL5KiYidKVEvXZq9BcSetBdhZec"

  imoveis: Array<Imovel>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams
              //private geolocation: Geolocation
            ) {}

  ionViewDidLoad() {
    console.log("*--*-*-*-*-*-*-*-* ionViewDidLoad *--*-*-*-*-*-*-*-*");
    console.log("*--*-*-*-*-*-*-*-* getImoveis() *--*-*-*-*-*-*-*-*");
    this.getImoveis();
    //this.recuperarLocal();
    //this.traçarRotas();
  }

  getImoveis() {
    this.imoveis = [
      new Imovel('Apartamento com 2 Quartos para Venda ou Aluguel, 80 m²', 295.000, 'Rua Eduardo Viviani', '400', 'Boa Vista', 'Juiz de Fora', 'MG'),
      new Imovel('Parque Jardim dos Bandeirantes, 80 m²', 152.074, 'Avenida Garcia Rodrigues Paes', '0', 'Jóckey Club', 'Juiz de Fora', 'MG'),
      new Imovel('Apartamento com 2 Quartos à Venda, 72 m²', 138.000, 'Rua Aurora Tôrres', '10', 'Santa Luzia', 'Juiz de Fora', 'MG')];
  }

  /* recuperarLocal(){
    this.geolocation.getCurrentPosition()
      .then((resp) => {
        const position = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

        const mapOptions = {
          zoom: 18,
          center: position
        }

        this.map1 = new google.maps.Map(document.getElementById('map'), mapOptions);

        const marker = new google.maps.Marker({
          position: position,
          map: this.map1
        });

      }).catch((error) => {
        console.log('Erro ao recuperar sua posição', error);
      });
  }

  traçarRotas(){
    this.map2 = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,
      center: {lat: 41.85, lng: -87.65}
    });

    this.directionsDisplay.setMap(this.map2);
  }

  calculateRoute() {
    console.log(`destinationPosition: ${this.inicio}`);
    console.log(`originPosition: ${this.fim}`);
    if (this.inicio && this.fim) {
      this.directionsService.route({
        origin: this.inicio,
        destination: this.fim,
        travelMode: 'DRIVING'
      }, (response, status) => {
        if(status === 'OK'){
          this.directionsDisplay.setDirections(response);
        }else{
          window.alert(`Directions request failed due to ${status}`);
        }
      });
    }
  }

  traceRoute(service: any, display: any, request: any) {
    service.route(request, function (result, status) {
      if (status == 'OK') {
        console.log(`Result: ${result.geocoded_waypoints}`);
        console.log(`Result: ${result.request}`);
        console.log(`Result: ${result.routes}`);
        console.log(`Result: ${result.__proto__}`);
        display.setDirections(result);
      }
    });
  } */

}

export class Imovel {
  nome: string;
  valor: number;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string
  mapa: string;
 
  constructor(nome: string, valor: number, logradouro: string, numero: string, bairro: string, cidade: string, estado: string) {
    this.nome = nome;
    this.valor = valor;
    this.logradouro = logradouro;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.mapa = this.getMapa();
  }
 
  private getEndereco() {
    return this.logradouro + ', ' + this.numero + ' - ' + this.bairro + ', ' + this.cidade + ' - ' + this.estado;
  }
 
  private getMapa() {
    return 'https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=400x400&markers=color:red|' + this.getEndereco() + '&key=AIzaSyCxqgKqZMHNzOV2TETOwjRJAUpuh3aeK1c'
  }
}