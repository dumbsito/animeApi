import { Component, OnInit } from '@angular/core';
import { MyAnime } from 'src/app/interfaces/apiMovie';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-selected-anime',
  templateUrl: './selected-anime.component.html',
  styleUrls: ['./selected-anime.component.css']
})
export class SelectedAnimeComponent implements OnInit{

  animesSelected:MyAnime[]=[]
  constructor(private servi:AnimeService){
  }
  ngOnInit(): void {
    this.animesSelected=JSON.parse(localStorage.getItem("myAnime")as any) || []
    this.servi.getAnimeSelected().subscribe(data=>{
      console.log(data);
      this.animesSelected.push(data)

      localStorage.setItem("myAnime",JSON.stringify(this.animesSelected))
    })
  }

  increase(anime:MyAnime){
    anime.watchedEpisodes++;
    localStorage.setItem("myAnime",JSON.stringify(this.animesSelected))
  }
  decrease(anime:MyAnime){
    anime.watchedEpisodes--;
    localStorage.setItem("myAnime",JSON.stringify(this.animesSelected))
  }
  
}
