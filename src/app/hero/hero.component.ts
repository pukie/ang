import {Component, OnInit, Input} from '@angular/core';
import { HeroDataService } from '../hero-data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  providers: [HeroDataService ]
})

export class HeroComponent implements OnInit {
   hero:any ;
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute, private myService: HeroDataService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.hero = this.myService.getHero(this.id);
      console.log(this.hero);
      // In a real app: dispatch action to load the details here.
    });

  }

}
