import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-player-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class PlayerCreateComponent implements OnInit {
  playerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

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
    console.log(this.playerForm);
    alert('You want to submit?');
    this.submitted = true;
  }
}
