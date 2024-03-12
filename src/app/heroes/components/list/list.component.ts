import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Wolverine', 'Batman', 'Superman', 'SpiderMan', 'Hulk']
  public deletedHero: string = '';

  deleteLastHero(): void {
    let name = this.heroNames.pop();
    if (name)
      this.deletedHero = name;
  }
}
