import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input() character: any;
  constructor(
    private route: Router,
  ) { }

  ngOnInit(): void {
  }
  showComics(id:number){
    this.route.navigate(['/comics/', id]);
  }
  
  showEvents(id:number){
    this.route.navigate(['/events/', id]);
    
  }
  showSeries(id:number){
    this.route.navigate(['/series/', id]);
    
  }
  showStories(id:number){
    this.route.navigate(['/stories/', id]);
  }
}
