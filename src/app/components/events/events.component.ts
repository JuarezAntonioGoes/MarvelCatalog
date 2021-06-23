import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelApiService } from '../character/shared/marvel-api.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
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
    this.MarvelService.getEventsCharacter(this.idCharacter)
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
