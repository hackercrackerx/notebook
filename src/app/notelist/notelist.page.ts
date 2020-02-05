import { Component, OnInit } from '@angular/core';
import { NoteDataService } from '../services/note-data.service';
import { ModalController } from '@ionic/angular';
import { AddnotePage } from '../addnote/addnote.page';
import { Note } from 'src/app/model/note.interface';
import { NoteInfoPage } from '../note-info/note-info.page';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.page.html',
  styleUrls: ['./notelist.page.scss'],
})
export class NoteListPage implements OnInit {
  public notes:Array<Note> = [];
  constructor(private data: NoteDataService, private modal:ModalController) { }

  ngOnInit() {
    //check auth status
    //get notes
    this.getNotes();
  }

  async addNote(){
    const addModal = await this.modal.create({ component: AddnotePage });
    addModal.onDidDismiss()
    .then((response)=>{
      if( response.data){
        //create one
        this.data.addNote( response.data);
      }

    })
    .catch((error)=>{
      console.log(error);
    });
    addModal.present();
  }
  getNotes(){
    this.data.notes$.subscribe( ( data ) =>{
      this.notes = data;
    })
  }

  async getNoteDetail( note ){
    const detailModal = await this.modal.create({ component: NoteInfoPage, componentProps: note});
    detailModal.onDidDismiss().then((response)=>{
      if(response.data){
        // save the changes in the note
      }
    })
    .catch((error)=> console.log(error));
    detailModal.present();
  }
}
