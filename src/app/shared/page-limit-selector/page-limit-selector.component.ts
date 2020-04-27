import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-limit-selector',
  templateUrl: './page-limit-selector.component.html',
  styleUrls: ['./page-limit-selector.component.scss']
})
export class PageLimitSelectorComponent {
  @Input() pageSize: number;
}
