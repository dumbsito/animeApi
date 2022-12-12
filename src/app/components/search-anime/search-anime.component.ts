import { Component, OnInit } from '@angular/core';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-search-anime',
  templateUrl: './search-anime.component.html',
  styleUrls: ['./search-anime.component.css']
})
export class SearchAnimeComponent implements OnInit {

searchTerm:string=""

constructor(private servi:AnimeService) {
  
}

search(){
  this.servi.getAnime(this.searchTerm).subscribe(res=>{
    console.log(res);
    this.servi.addResultAnime(res.data);
    this.searchTerm=""

  })
}

ngOnInit(): void {
  
}
}
