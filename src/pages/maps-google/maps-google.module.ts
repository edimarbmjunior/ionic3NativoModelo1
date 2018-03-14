import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapsGooglePage } from './maps-google';

@NgModule({
  declarations: [
    MapsGooglePage,
  ],
  imports: [
    IonicPageModule.forChild(MapsGooglePage),
  ],
  providers:[
    MapsGooglePage
  ]
})
export class MapsGooglePageModule {}
