import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoteInfoPageRoutingModule } from './note-info-routing.module';

import { NoteInfoPage } from './note-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoteInfoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NoteInfoPage]
})
export class NoteInfoPageModule {}
