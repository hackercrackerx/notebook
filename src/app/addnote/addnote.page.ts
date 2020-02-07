import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
// import { MiseEnLocationPage } from '../mise-en-location/mise-en-location';
// import { FilterPage } from '../filter/filter';
// import { NavController, Platform, Alert } from 'ionic-angular';
// import { Voiture } from '../../entities/voiture';
// import { Geolocation } from '@ionic-native/geolocation';
// import {
//   GoogleMaps,
//   GoogleMap,
//   Environment,
//   LatLng,
//   CameraPosition,
//   ILatLng,
//   MarkerIcon,
//   GoogleMapsEvent,
//   Marker,
//   BaseArrayClass
// } from '@ionic-native/google-maps';
// import { LiteralArray } from '@angular/compiler';
// import { ListVoitureProvider } from '../../providers/list-voiture/list-voiture';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.page.html',
  styleUrls: ['./addnote.page.scss'],
})
export class AddnotePage implements OnInit {
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  private addnoteForm: FormGroup;
 

  //map: GoogleMap;
  constructor(private formBuilder: FormBuilder, private modal: ModalController, private camera: Camera) {

  }

  ngOnInit() {
    this.addnoteForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      note: ['', [Validators.required, Validators.minLength(5)]]
    })
  }
  close() {
    this.modal.dismiss();
  }
  submit() {
    //get data from form
    let name = this.addnoteForm.controls.name.value;
    let note = this.addnoteForm.controls.note.value;
    let date = new Date();
    let noteData = { name: name, date: date, note: note };
    this.modal.dismiss(noteData);
  }

  cameraClick(){
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });
  }
  // // ionViewDidLoad() {
  // //   this.loadMap();
  // // }

  // loadMap() {

  //   // This code is necessary for browser
  //   Environment.setEnv({
  //     'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyC6TkVI5vOFOY0-nRXY0m-dobHcmjAGCUA',
  //     'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyC6TkVI5vOFOY0-nRXY0m-dobHcmjAGCUA'
  //   });

  //   let mapOptions: GoogleMapOptions = {
  //     camera: {
  //        target: {
  //          lat: 43.0741904,
  //          lng: -89.3809802
  //        },
  //        zoom: 18,
  //        tilt: 30
  //      }
  //   };

  //   this.map = GoogleMaps.create('map_canvas', mapOptions);

  //   let marker: Marker = this.map.addMarkerSync({
  //     title: 'Ionic',
  //     icon: 'blue',
  //     animation: 'DROP',
  //     position: {
  //       lat: 43.0741904,
  //       lng: -89.3809802
  //     }
  //   });
  //   marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
  //     alert('clicked');
  //   });
  // }
}

