import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Anime, APIAnime, MyAnime } from '../interfaces/apiMovie';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
private api_url=" https://api.jikan.moe/v4/anime?q="
animeResponse$=new Subject<Anime[]>()
animeSelected$=new Subject<MyAnime>()
  
  constructor(private http:HttpClient) { }

  getAnime(searchTerm:any): Observable<APIAnime>{
   const url=`${this.api_url}${searchTerm}`
   return  this.http.get<APIAnime>(url)
  }

  addResultAnime(anime:Anime[]){
    this.animeResponse$.next(anime);
  }

  getResultAnime():Observable<Anime[]>{
    return this.animeResponse$.asObservable()
  }

  animeSelected(anime:MyAnime){
    this.animeSelected$.next(anime)
  }
  getAnimeSelected():Observable<MyAnime>{
   return this.animeSelected$.asObservable()
  }
}
