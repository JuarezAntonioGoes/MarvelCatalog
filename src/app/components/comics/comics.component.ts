import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelApiService } from '../character/shared/marvel-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
 public characters:any
 public idCharacter:number

  constructor(
    private route: ActivatedRoute,
    private MarvelService: MarvelApiService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
     this.idCharacter = parseInt(params['id'], 10)
    })
    this.MarvelService.getComicsCharacter(this.idCharacter)
    .subscribe(
      (res) =>{
        this.characters = res 
        console.log(res)
      },
      (err) =>{
        console.log(err)
      }
    )
  }



}
