import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clips',
  templateUrl: './clips.component.html',
  styleUrls: ['./clips.component.scss']
})
export class ClipsComponent implements OnInit {
  @Input() categoryId: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
