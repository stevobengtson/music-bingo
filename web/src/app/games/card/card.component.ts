import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../api/models/game';

class BlockDetails {
  row: number;
  col: string;
  selected: boolean;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Card;

  constructor() { }

  ngOnInit(): void {
  }

  toggleState(cardRow: number, cardCol: string) {
    if (this.card[cardCol][cardRow]) {
      this.card[cardCol][cardRow].isSelected = !this.card[cardCol][cardRow].isSelected;
    }
  }
}
