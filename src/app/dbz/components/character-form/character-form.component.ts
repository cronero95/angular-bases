import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-character-form',
  templateUrl: './character-form.component.html',
  styleUrl: './character-form.component.css'
})
export class CharacterFormComponent {
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public newCharacter: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void {
    if(this.newCharacter.name.length === 0) return;

    this.onNewCharacter.emit(this.newCharacter);

    this.newCharacter = {name: '', power: 0};
  }
}
