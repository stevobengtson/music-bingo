import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Clip } from '@api/models/game';

@Component({
  selector: 'app-add-edit-clip-dialog',
  templateUrl: './add-edit-clip-dialog.component.html',
  styleUrls: ['./add-edit-clip-dialog.component.scss']
})
export class AddEditClipDialogComponent implements OnInit {
  @Input() clip: Clip;
  @Input() categoryId: number;

  constructor(public activeModal: NgbActiveModal) { }

  get isEditing(): boolean {
    return this.clip && this.clip.id > 0;
  }

  ngOnInit(): void {
  }

}
