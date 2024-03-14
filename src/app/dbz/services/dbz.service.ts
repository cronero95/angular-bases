import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";

import { Character } from '../interfaces/character.interface';

@Injectable({           // This decorator tells Angular to treat this as a service.
  providedIn: 'root'    // Makes the service a singleton to all the app.
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegetta',
      power: 7600
    }
  ];

  addNewCharacter(character: Character): void {
    const newCharacter: Character = {...character, id: uuid()};  // We use spread to write less code.
    this.characters.push(newCharacter);
  }

  deleteCharacterByIndex(index: number): void {
    this.characters.splice(index, 1);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(
      character => character.id !== id
    );
  }
}
