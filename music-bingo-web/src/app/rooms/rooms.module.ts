import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';

import { RoomsRoutingModule } from './rooms-routing.module';

import { RoomComponent } from './room/room.component';
import { CreateComponent } from './create/create.component';
import { RoomsComponent } from './rooms.component';
import { ListComponent } from './list/list.component';
import { PlayersModule } from '../players/players.module';
import { HostControlsComponent } from './host-controls/host-controls.component';

@NgModule({
  declarations: [
    RoomsComponent,
    RoomComponent,
    CreateComponent,
    ListComponent,
    HostControlsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgBootstrapFormValidationModule,
    RoomsRoutingModule,
    PlayersModule
  ]
})
export class RoomsModule { }
