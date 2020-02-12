import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

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
   image:string;
 

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
    //let image= this.image;
    let date = new Date();
    let noteData = { name: name, date: date, note: note,image:this.image };
    this.modal.dismiss(noteData);
  }

  cameraClick(){
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(base64Image);
      //this.image =base64Image;
     }, (err) => {
      // Handle error
     });
  }
 
}

