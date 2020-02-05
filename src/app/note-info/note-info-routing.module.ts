import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteInfoPage } from './note-info.page';

const routes: Routes = [
  {
    path: '',
    component: NoteInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoteInfoPageRoutingModule {}
