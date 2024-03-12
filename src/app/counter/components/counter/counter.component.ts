import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter: {{ counter }}</p>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  public counter: number = 0;

  public increaseBy(value: number): void {
    this.counter += value;
  }

  public reset(): void {
    this.counter = 0;
  }
}
