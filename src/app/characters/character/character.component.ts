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
    this.route.navigate(['/details/',id]);
  }
}
