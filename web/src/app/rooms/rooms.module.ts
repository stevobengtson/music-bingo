import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlockUIModule } from 'ng-block-ui';

import { SharedModule } from '../shared/shared.module';

import { RoomHomeComponent } from './room-home/room-home.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomAddEditComponent } from './room-add-edit/room-add-edit.component';
import { RoomRoutingModule } from './room-routing.module';

@NgModule({
  declarations: [RoomHomeComponent, RoomListComponent, RoomAddEditComponent],
  imports: [
    CommonModule,
    NgbModule,
    BlockUIModule.forRoot(),
    RoomRoutingModule,
    SharedModule
  ]
})
export class RoomsModule { }
