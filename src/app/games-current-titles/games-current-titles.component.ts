import { Component, OnInit } from '@angular/core';
import {TITLES} from "./titles"

@Component({
  selector: 'app-games-current-titles',
  templateUrl: './games-current-titles.component.html',
  styleUrls: ['./games-current-titles.component.css']
})
export class GamesCurrentTitlesComponent implements OnInit {

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
