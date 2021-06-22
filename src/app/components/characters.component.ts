import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarvelApiService } from './character/shared/marvel-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(
    private characterSvc: MarvelApiService,
    private route: Router,
  ) { }

  allCharacters: Observable<any>;
  
  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(){
    this.allCharacters = this.characterSvc.getAllCharacters();
  }
}
