import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ClipsComponent } from './clips.component';
import { AddEditClipComponent } from './add-edit-clip/add-edit-clip.component';
import { AddEditClipDialogComponent } from './add-edit-clip-dialog/add-edit-clip-dialog.component';

@NgModule({
  declarations: [
    ClipsComponent,
    AddEditClipComponent,
    AddEditClipDialogComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  exports: [
    ClipsComponent
  ]
})
export class ClipsModule { }
