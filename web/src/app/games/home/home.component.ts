import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { Game } from '../../api/models/game';
import { GameService } from '../../api/repositories/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;

  page: number = 1;
  pageSize: number = 10;
  total: number = 0;
  currentGames: Game[] = [];
  constructor(
    private gameService: GameService
  ) { }

  ngOnInit(): void {
    this.getCurrentGames();
	  this.initDauber();
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
      sourceImage.src =  "http://localhost:4200/assets/images/cursor_semi_solid.png";
      let isMell = false;
      // Check if it is Mell and make the daub smaller
      if(isMell) {
        sourceImage.src =  "http://localhost:4200/assets/images/cursor_solid.png";
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

  getCurrentGames() {
    this.blockUI.start('Refreshing...');
    this.gameService
        .getMany(this.page, this.pageSize)
        .subscribe(
          (gameResponse: HttpResponse<Game[]>) => {
            this.total = parseInt(gameResponse.headers.get('Total'));
            this.currentGames = gameResponse.body
          },
          (error: any) => console.error(error),
          () => this.blockUI.stop()
        );
  }
}
