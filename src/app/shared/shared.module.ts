import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PageLimitSelectorComponent } from './page-limit-selector/page-limit-selector.component';

@NgModule({
  declarations: [PageLimitSelectorComponent],
  imports: [FormsModule],
  providers: [],
  exports: [PageLimitSelectorComponent]
})
export class SharedModule { }
