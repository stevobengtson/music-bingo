import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { RoomsComponent } from './rooms.component';
import { RoomComponent } from './room/room.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
    { path: '', component:  RoomComponent },
    { path: 'create', component: CreateComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
