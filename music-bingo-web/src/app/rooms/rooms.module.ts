import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';

import { RoomsRoutingModule } from './rooms-routing.module';

import { RoomComponent } from './room/room.component';
import { CreateComponent } from './create/create.component';
import { RoomsComponent } from './rooms.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    RoomsComponent,
    RoomComponent,
    CreateComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgBootstrapFormValidationModule,
    RoomsRoutingModule
  ]
})
export class RoomsModule { }
