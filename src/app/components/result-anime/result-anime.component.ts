import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Anime, MyAnime } from 'src/app/interfaces/apiMovie';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-result-anime',
  templateUrl: './result-anime.component.html',
  styleUrls: ['./result-anime.component.css']
})
export class ResultAnimeComponent implements OnInit,OnDestroy{

animeResults:Anime[]=[]
animeSubscription!:Subscription;


constructor(private servi:AnimeService){
  }
  
  ngOnInit(): void {
  this.animeSubscription= this.servi.getResultAnime().subscribe(data=>{
    console.log("lol",data);
    this.animeResults=data
   })
  }
  ngOnDestroy(): void {
   this.animeSubscription.unsubscribe() 
  }

  addAnime(anime:Anime){
   let addAnime:MyAnime={
    id:anime.mal_id,
    title:anime.title,
    imagen:anime.images["jpg"].image_url,
    totalEpisodes:anime.episodes,
    watchedEpisodes:0
   }   

   this.servi.animeSelected(addAnime)

  }
}
