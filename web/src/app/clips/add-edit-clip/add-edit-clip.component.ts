import { Component, OnInit, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { Clip } from '@api/models/game';
import { ClipService } from '@api/repositories/clip.service';
import { NgbTimeAdapter, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '@app/services/toast.service';

@Injectable()
export class NgbTimeSecondsAdapter extends NgbTimeAdapter<number> {

  fromModel(value: number| null): NgbTimeStruct | null {
    if (!value) {
      return null;
    }

    var hours   = Math.floor(value / 3600);
    var minutes = Math.floor((value - (hours * 3600)) / 60);
    var seconds = value - (hours * 3600) - (minutes * 60);

    return {
      hour: hours,
      minute: minutes,
      second: seconds
    };
  }

  toModel(time: NgbTimeStruct | null): number | null {
    return time != null ? (time.hour * 3600 + time.minute * 60 + time.second) : null;
  }
}


@Component({
  selector: 'app-add-edit-clip',
  templateUrl: './add-edit-clip.component.html',
  styleUrls: ['./add-edit-clip.component.scss'],
  providers: [{provide: NgbTimeAdapter, useClass: NgbTimeSecondsAdapter}]
})
export class AddEditClipComponent implements OnInit {
  @Input() clip: Clip;
  @Input() categoryId: number;
  @Output() clipUpdated = new EventEmitter<Clip>();

  constructor(
    private clipService: ClipService,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    if (!this.clip) {
      this.clip = new Clip();
    }

    if (!this.clip.end) {
      this.clip.end = this.clip.start + this.clip.length;
    }
  }

  onSubmit() {
    this.clip.length = this.clip.end - this.clip.start;
    this.clip.end = undefined;
    const isNew = !this.clip.id;

    this.clipService.addOrUpdate(this.clip, this.categoryId).subscribe(
      (clip: Clip) => {
        this.toastService.success(`${isNew ? 'Created' : 'Updated'} Clip`);
        this.clipUpdated.emit(clip);
      },
      (error) => this.toastService.error(error)
    );
  }
}
