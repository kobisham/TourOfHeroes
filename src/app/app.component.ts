import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from './hero';
import { HeroService } from './Services/hero.service';


@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
   <h1>{{title}}</h1>
  <h2>My Heroes</h2>
<ul class="heroes">
  <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
    <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
</ul>
<app-hero-detail [hero]="selectedHero"></app-hero-detail>
  `,
  styleUrls: ['./app.component.css'],
  providers: [HeroService]

})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero): void {
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroService) { }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
