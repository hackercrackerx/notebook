import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoteListPage } from './notelist.page';

const routes: Routes = [
  {
    path: '',
    component: NoteListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotelistPageRoutingModule {}
