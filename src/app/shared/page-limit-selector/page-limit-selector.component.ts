import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-page-limit-selector',
  templateUrl: './page-limit-selector.component.html',
  styleUrls: ['./page-limit-selector.component.scss']
})
export class PageLimitSelectorComponent {
  _pageSize: number = 10;

  @Output() pageSizeChange = new EventEmitter<number>();

  @Input('pageSize')
  set pageSize(val: number) {
    this._pageSize = val;
    this.pageSizeChange.emit(val);
  }

  get pageSize(): number {
    return this._pageSize;
  }
}
