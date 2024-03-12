import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'wolverine'
  public age: number = 67


  public get capitalizedName(): string {     // This is a getter, is a method that works like a property.
    return this.name.toUpperCase();           // To call it '{{ capitalizedName }}'
  }

  getHeroDescription(): string {              // This is a classic method.
    return `${this.name} - ${this.age}`;      // To call it '{{ getHeroDescription() }}'
  }

  changeHero(): void {
    this.name = 'hulk';
  }

  changeHeroAge(): void {
    this.age = 32;
  }

  resetHero(): void {
    this.name = 'wolverine';
    this.age = 67;
  }
}
