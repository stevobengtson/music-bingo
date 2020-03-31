import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { PlayerService } from '../player.service';
import { Player } from '../player';

@Component({
  selector: 'app-player-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class PlayerCreateComponent implements OnInit {
  @Input() roomKey: string;
  @Output() playersAddedEvent = new EventEmitter<Player[]>();

  playerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private readonly playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.playerForm = this.formBuilder.group({
      playerNames: this.formBuilder.array([this.formBuilder.control('')])
    });
  }

  get playerNames(): FormArray {
    return this.playerForm.get('playerNames') as FormArray;
  }

  get f() {
    return this.playerForm.controls;
  }

  addPlayer() {
    this.playerNames.push(this.formBuilder.control(''));
  }

  removePlayer(index: number) {
    this.playerNames.removeAt(index);
  }

  onSubmit() {
    const playerNames: string[] = this.playerNames.controls.map((control: AbstractControl) => control.value);

    this.playerService
        .createPlayers(this.roomKey, playerNames)
        .subscribe((players: Player[]) => {
          this.playersAddedEvent.emit(players);
        });
  }
}
