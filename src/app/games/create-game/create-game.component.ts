import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

class Category {
  id: number;
  name: string;
}

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {
  categories: Category[];
  active = 1;

  // The actual model should be separate than this component
  constructor(private readonly activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  dismissDialog() {
    this.activeModal.dismiss('Cross click');
  }

  closeDialog() {
    this.activeModal.close('Close click');
  }
}
