import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotelistPageRoutingModule } from './notelist-routing.module';

import { NoteListPage } from './notelist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotelistPageRoutingModule
  ],
  declarations: [NoteListPage]
})
export class NotelistPageModule {}
