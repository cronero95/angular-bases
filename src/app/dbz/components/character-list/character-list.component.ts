import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-character-list',
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {
  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 23
    }
  ];

  @Output()
  public onDeleteCharacter: EventEmitter<number> = new EventEmitter();

  deleteCharacter(index: number): void {
    this.onDeleteCharacter.emit(index);
  }
}
