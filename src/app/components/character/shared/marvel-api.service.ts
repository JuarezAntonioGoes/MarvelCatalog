import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {
  PUBLIC_KEY='f819f3621f81dde7edc382743d93d41c';
  HASH='968c51ae154e70c54a0d0dd4fb5f405d';
  TS='16185334990410';
  URL_API=`https://gateway.marvel.com/v1/public/`
  CREDENTIALS=`?ts=${this.TS}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
  
  constructor(private http:HttpClient) { }

  getAllCharacters () : Observable<any>{
    return this.http.get<any>(this.URL_API + `characters` + this.CREDENTIALS)
      .pipe(map((data: any)=>data.data.results))
  }
  getStoriesCharacter(id:number) {
    return this.http.get<any>(this.URL_API + `characters/${id}/stories` + this.CREDENTIALS)
    .pipe(map((data: any)=>data.data.results))
  }
  getEventsCharacter(id:number) {
    return this.http.get<any>(this.URL_API + `characters/${id}/events` + this.CREDENTIALS)
    .pipe(map((data: any)=>data.data.results))
  }
  getComicsCharacter(id:number) {
    return this.http.get<any>(this.URL_API + `characters/${id}/comics` + this.CREDENTIALS)
      .pipe(map((data: any)=>data.data.results))
  }
  getSeriesCharacter(id:number) {
    return this.http.get<any>(this.URL_API + `characters/${id}/series` + this.CREDENTIALS)
      .pipe(map((data: any)=>data.data.results))
  }
}
