import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Clip } from 'src/app/games/game';
import { ClipService } from '../clip.service';

@Component({
  selector: 'app-add-edit-clip',
  templateUrl: './add-edit-clip.component.html',
  styleUrls: ['./add-edit-clip.component.scss']
})
export class AddEditClipComponent implements OnInit {
  @Input() clip: Clip;
  @Input() categoryId: number;
  @Output() clipUpdated = new EventEmitter<Clip>();

  constructor(private readonly clipService: ClipService) { }

  ngOnInit(): void {
    if (!this.clip) {
      this.clip = new Clip();
    }
  }

  onSubmit() {
    this.clipService.addOrUpdate(this.clip, this.categoryId).subscribe(
      (clip: Clip) => this.clipUpdated.emit(clip)
    )
  }
}
