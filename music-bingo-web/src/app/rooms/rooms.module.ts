import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';

import { RoomsRoutingModule } from './rooms-routing.module';

import { RoomComponent } from './room/room.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { RoomsComponent } from './rooms.component';
import { ListRoomsComponent } from './list-rooms/list-rooms.component';
import { PlayersModule } from '../players/players.module';
import { HostControlsComponent } from './host-controls/host-controls.component';
import { GamesModule } from '../games/games.module';

@NgModule({
  declarations: [
    RoomsComponent,
    RoomComponent,
    CreateRoomComponent,
    ListRoomsComponent,
    HostControlsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgBootstrapFormValidationModule,
    RoomsRoutingModule,
    GamesModule,
    PlayersModule
  ]
})
export class RoomsModule { }
