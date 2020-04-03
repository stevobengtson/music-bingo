import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';
import { GameService } from 'src/app/games/game.service';
import { PlayerService } from '../player.service';
import { Player } from '../player';
import { Room } from 'src/app/rooms/room';

@Component({
  selector: 'app-player-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class PlayerCreateComponent implements OnInit {
  @Input() roomKey: string;
  @Output() playersAddedEvent = new EventEmitter<Player[]>();

  existingPlayers: Player[] = [];

  playerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private readonly gameService: GameService,
    private readonly playerService: PlayerService
  ) {
    this.gameService.room.subscribe((room: Room) => {
      this.existingPlayers = room.players;
    });
  }

  ngOnInit(): void {
    this.playerForm = this.formBuilder.group({
      existingPlayers: this.buildExistingPlayerControls(),
      playerNames: this.formBuilder.array([this.formBuilder.control('')])
    });
  }

  get playerNames(): FormArray {
    return this.playerForm.get('playerNames') as FormArray;
  }

  get players(): FormArray {
    return this.playerForm.get('existingPlayers') as FormArray;
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
    const playerNames: string[] = this.getPlayerNames();
    const selectedPlayers: Player[] = this.getSelectedPlayers();

    if (playerNames && playerNames.length > 0) {
      this.playerService
          .createPlayers(this.roomKey, playerNames)
          .subscribe((players: Player[]) => {
            this.playersAddedEvent.emit([...selectedPlayers, ...players]);
          });
    } else {
      this.playersAddedEvent.emit(selectedPlayers);
    }
  }

  private buildExistingPlayerControls(): FormArray {
    if (this.existingPlayers && this.existingPlayers.length > 0) {
      return this.formBuilder.array(this.existingPlayers.map((player: Player) => this.formBuilder.control(false)))
    }

    return this.formBuilder.array([]);
  }

  private getSelectedPlayers(): Player[] {
    return this.players.controls
      .map((control: AbstractControl, index: number) => control.value ? this.existingPlayers[index] : null)
      .filter((item: Player) => item != null);
  }

  private getPlayerNames(): string[] {
    return this.playerNames.controls
      .map((control: AbstractControl) => control.value)
      .filter((name: string) => name !== '');
  }
}
