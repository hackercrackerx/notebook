import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { CameraService } from '../services/camera.service';

import { Note } from '../model/note.interface';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.page.html',
  styleUrls: ['./addnote.page.scss'],
})
export class AddnotePage implements OnInit {
  private addnoteForm: FormGroup;
  private photoTaken: boolean = false;
  private uploading: boolean = false;
  private photo: string;

 

  constructor(private formBuilder: FormBuilder, private modal: ModalController, 
    private picture: CameraService ) {

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
    let image = (this.photo) ? this.photo : null;
    let date = new Date();
    let noteData = { name: name, date: date, note: note,image: image };
    this.modal.dismiss(noteData);
  }

  takePhoto() {
    this.photoTaken = true;
    this.uploading = true;
    this.picture.takePicture().then( (result:string) => {
      this.photo = result;
      this.uploading = false;
    })
    .catch( (error) => {
      console.log(error);
    });
  }

 
}

