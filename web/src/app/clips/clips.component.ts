import { Component, OnInit, Input } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CategoryService } from '../api/repositories/category.service';
import { Clip } from '@api/models/clip';
import { AddEditClipDialogComponent } from './add-edit-clip-dialog/add-edit-clip-dialog.component';
import { ClipService } from '@app/api/repositories/clip.service';
import { ToastService } from '@app/services/toast.service';

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
    private categoryService: CategoryService,
    private clipService: ClipService,
    private modalService: NgbModal,
    private toastService: ToastService
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
    this.loadAddEditClipDialog({});
  }

  deleteClip(clip: Clip) {
    this.clipService.delete(clip).subscribe(
      (clip: Clip) => {
        this.toastService.success(`Deleted clip: ${clip.artist} - ${clip.name}`);
        this.getClips();
      },
      (error) => this.toastService.error(error)
    );
  }

  private loadAddEditClipDialog(clip: Clip) {
    const modalRef = this.modalService.open(AddEditClipDialogComponent);
    modalRef.componentInstance.clip = clip;
    modalRef.componentInstance.categoryId = this.categoryId;
    modalRef.result.then(() => this.getClips());    
  }
}
