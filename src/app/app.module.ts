import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './Services/in-memory-data.service';


import { AppComponent } from './app.component';
import { HeroDetailComponent } from './Components/hero-detail/hero-detail.component';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { HeroService } from './Services/hero.service';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';
import { HeroSearchComponent } from './Components/hero-search/hero-search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
