import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteInfoPageRoutingModule } from './note-info-routing.module';

import { NoteInfoPage } from './note-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteInfoPageRoutingModule
  ],
  declarations: [NoteInfoPage]
})
export class NoteInfoPageModule {}
