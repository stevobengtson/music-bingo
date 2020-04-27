import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../categories/category.service';
import { Clip } from '../games/game';

@Component({
  selector: 'app-clips',
  templateUrl: './clips.component.html',
  styleUrls: ['./clips.component.scss']
})
export class ClipsComponent implements OnInit {
  @Input() categoryId: number;
  clips: Clip[];

  page: number = 1;
  pageSize: number = 10;
  
  constructor(private readonly categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getClips();
  }

  getClips() {
    this.categoryService
        .getClips(this.categoryId, this.page, this.pageSize)
        .subscribe((clips: Clip[]) => this.clips = clips);
  }
}
