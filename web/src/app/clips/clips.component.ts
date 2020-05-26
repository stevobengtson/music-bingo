import { Component, OnInit, Input } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

import { CategoryService } from '../api/repositories/category.service';
import { Clip } from '../api/models/game';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEditClipDialogComponent } from './add-edit-clip-dialog/add-edit-clip-dialog.component';

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
  totalClips: number = 0;
  
  constructor(
    private readonly categoryService: CategoryService,
    private readonly modalService: NgbModal
  ) { }

  ngOnInit(): void {   
    this.getClips();
  }

  getClips() {
    this.categoryService
        .getClips(this.categoryId, this.page, this.pageSize)
        .subscribe((response: HttpResponse<Clip[]>) => {
          this.totalClips = parseInt(response.headers.get('Total'));
          this.clips = response.body;
        });
  }

  editClip(clip: Clip) {
    this.loadAddEditClipDialog(clip);
  }

  addClip() {
    this.loadAddEditClipDialog(new Clip());
  }

  private loadAddEditClipDialog(clip: Clip) {
    const modalRef = this.modalService.open(AddEditClipDialogComponent);
    modalRef.componentInstance.clip = clip;
    modalRef.componentInstance.categoryId = this.categoryId;
    modalRef.result.then(() => this.getClips());    
  }
}
