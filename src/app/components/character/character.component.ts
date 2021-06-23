import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  public optionsVisible: boolean = false;

  @Input() character: any;
  constructor(
    private route: Router,
  ) { }

  ngOnInit(): void {
  }
  getComics(id:number){
    this.route.navigate(['/comics/', id]);
  }
  
  getEvents(id:number){
    this.route.navigate(['/events/', id]);
    
  }
  getSeries(id:number){
    this.route.navigate(['/series/', id]);
    
  }
  getStories(id:number){
    this.route.navigate(['/stories/', id]);
  }

  aparecerOptions(){
    this.optionsVisible = true;
  }

  esconderOptions(){
    this.optionsVisible = false;
  }
}
