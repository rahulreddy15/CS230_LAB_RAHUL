import { Component, OnInit } from '@angular/core';
import {TITLES} from "./titles"

@Component({
  selector: 'app-games-news',
  templateUrl: './games-news.component.html',
  styleUrls: ['./games-news.component.css']
})
export class GamesNewsComponent implements OnInit {

  titles: any = []

  constructor() {
    for(var x of TITLES){
      console.log(x)
      this.titles.push(x)
    }
   }

  ngOnInit(): void {
  }

}
