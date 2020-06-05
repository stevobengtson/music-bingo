import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomHomeComponent } from './room-home/room-home.component';
import { RoomAddEditComponent } from './room-add-edit/room-add-edit.component';
import { PageNotFoundComponent } from '@app/page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', component:  RoomHomeComponent },
    { path: 'create', component: RoomAddEditComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }