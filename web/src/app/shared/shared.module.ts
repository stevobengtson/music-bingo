import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PageLimitSelectorComponent } from './page-limit-selector/page-limit-selector.component';
import { EditModeDirective } from './editable/edit-mode.directive';
import { EditableOnEnterDirective } from './editable/editable-on-enter.directive';
import { EditableComponent } from './editable/editable.component';
import { ViewModeDirective } from './editable/view-mode.directive';
import { FocusableDirective } from './focusable.directive';
import { TitleBarComponent } from './title-bar/title-bar.component';

@NgModule({
  declarations: [
    PageLimitSelectorComponent,
    EditModeDirective,
    EditableOnEnterDirective,
    EditableComponent,
    ViewModeDirective,
    FocusableDirective,
    TitleBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  exports: [
    PageLimitSelectorComponent,
    EditableComponent,
    TitleBarComponent
  ]
})
export class SharedModule { }
