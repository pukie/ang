import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { MyHeroesComponent }     from './my-heroes/my-heroes.component';
import { HeroDataService }         from './hero-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    MyHeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'heroes',
        component:MyHeroesComponent
      },
      {
        path:'info/:id',
        component:HeroComponent
      }
    ])
  ],
  providers: [HeroDataService],
  bootstrap: [AppComponent]
})



export class AppModule { }
