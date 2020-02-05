import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './addnote.page.html',
  styleUrls: ['./addnote.page.scss'],
})
export class AddnotePage implements OnInit {
  private addnoteForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private modal: ModalController) {

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
}

