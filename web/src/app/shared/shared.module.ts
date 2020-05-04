import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PageLimitSelectorComponent } from './page-limit-selector/page-limit-selector.component';
import { EditModeDirective } from './editable/edit-mode.directive';
import { EditableOnEnterDirective } from './editable/editable-on-enter.directive';
import { EditableComponent } from './editable/editable.component';
import { ViewModeDirective } from './editable/view-mode.directive';
import { FocusableDirective } from './focusable.directive';

@NgModule({
  declarations: [
    PageLimitSelectorComponent,
    EditModeDirective,
    EditableOnEnterDirective,
    EditableComponent,
    ViewModeDirective,
    FocusableDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
  exports: [
    PageLimitSelectorComponent,
    EditableComponent
  ]
})
export class SharedModule { }
