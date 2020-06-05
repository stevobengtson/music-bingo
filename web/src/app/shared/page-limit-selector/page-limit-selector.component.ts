import { Component, EventEmitter, Input, Output, Inject, OnInit } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-page-limit-selector',
  templateUrl: './page-limit-selector.component.html',
  styleUrls: ['./page-limit-selector.component.scss']
})
export class PageLimitSelectorComponent implements OnInit {
  _pageSize: number;

  @Output() pageSizeChange = new EventEmitter<number>();

  @Input('pageSize')
  set pageSize(val: number) {
    if (val !== this._pageSize) {
      if (this._pageSize !== undefined) {
        this.pageSizeChange.emit(val);
      }
      this._pageSize = val;

      this.storage.set('page-size-selector', this._pageSize);
    }
  }

  get pageSize(): number {
    return this._pageSize;
  }

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  ngOnInit(): void {
    this._pageSize = this.storage.get('page-size-selector') || 10;
  }
}
