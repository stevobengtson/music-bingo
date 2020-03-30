import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PlayerService } from '../player.service';
import { Player } from '../player';

@Component({
  selector: 'app-player-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class PlayerCreateComponent implements OnInit {
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
    this.playerNames.length
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
    this.playerService
        .createPlayer(this.playerNames.controls[0].value)
        .subscribe((player: Player) => {
          console.log('Player created: ', player.name);
          this.submitted = true;
        });
  }
}
