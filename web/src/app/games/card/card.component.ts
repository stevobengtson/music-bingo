import { Component, OnInit, Input } from '@angular/core';
import { Card } from '@api/models/card';

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
    this.initDauber();
  }

  toggleState(cardRow: number, cardCol: string) {
    if (this.card[cardCol][cardRow]) {
      this.card[cardCol][cardRow].isSelected = !this.card[cardCol][cardRow].isSelected;
    }
  }

  initDauber() {
	  /* Local Variables */
    const INTERVAL_POSITION = 5;
    const INTERVAL_ROTATION = 100;
	
    let lastCursorPos = { x: -999, y: -999 };
    let currentCursorPos = { x: -999, y: -999 };
    let lastCursorAngle = 0, cursorAngle = 0;
    let cursorEl, cursorImageEl;

    let bingobox = document.querySelector('#bingobox');
    let rect = bingobox.getBoundingClientRect();	
    let width = rect.right - rect.top;
    let height = rect.bottom - rect.top;
    let centerX = rect.left + width / 2;
    let centerY = rect.top + height / 2;	
    let dauberWidth = 424;
    let dauberHeight = 588;
    let clickedImg = document.getElementById('image_id2');

    bingobox.addEventListener('click', function(event: MouseEvent) {
      let sourceImage = document.createElement('img');
      sourceImage.src = "/assets/images/cursor_semi_solid.png";
      let isMell = false;
      // Check if it is Mell and make the daub smaller
      if(isMell) {
        sourceImage.src = "/assets/images/cursor_solid.png";
      }
      
      let x = event.clientX - 16;
      let y = event.clientY -16;
      sourceImage.style.position = "absolute";
      sourceImage.style.left = ""+ x +"px";
      sourceImage.style.top = ""+ y + "px";	

      bingobox.append(sourceImage);	
      
      console.log(event.clientX);
      console.log(event.clientY);		
    });

    function setCurrentCursorProps() {
        // Apply translation (set to actual cursor position)
        cursorEl.style.transform = `translate(${currentCursorPos.x}px, ${currentCursorPos.y}px)`;
        // Apply rotation
        cursorImageEl.style.transform = `rotate(${cursorAngle}deg)`;
    }
	
    function updateCursor() {
        window.addEventListener('mousemove', event => {
            currentCursorPos = { x: event.clientX + 100, y: event.clientY -500};
        });
		
        // Interval for updating cursor-position
        setInterval(setCurrentCursorProps, INTERVAL_POSITION);
        // Interval for updating cursor-rotation        	
		setInterval(() => {			
            cursorAngle = 230			
            setCurrentCursorProps();
            lastCursorPos = currentCursorPos;
            lastCursorAngle = cursorAngle;
        }, INTERVAL_ROTATION);
    }
    cursorEl = document.querySelector('#cursor');
    cursorImageEl = document.querySelector('#cursor > img');
    updateCursor();	  	  
  }
}
