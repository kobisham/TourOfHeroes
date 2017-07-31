import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './Services/hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']

})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero): void {
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroService, private router: Router) { }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedHero.id]);
}

  ngOnInit(): void {
    this.getHeroes();
  }
}
