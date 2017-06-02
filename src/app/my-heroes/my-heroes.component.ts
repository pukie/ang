import { Component, OnInit } from '@angular/core';
import { HeroDataService } from '../hero-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-heroes',
  templateUrl: './my-heroes.component.html',
  styleUrls: ['./my-heroes.component.css'],
  providers: [HeroDataService ]
})
export class MyHeroesComponent implements OnInit {

  heroes : Object;
  selectedHero(id): void {
    this.router.navigate(['/info',id])
  }
  constructor(
    private myService: HeroDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.heroes=this.myService.data();
  }

}
export class Hero {
  id:number;
  name:string;
}
