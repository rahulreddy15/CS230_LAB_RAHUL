import { Component, OnInit } from '@angular/core';
import {TITLES} from "./titles"
import {TITLES2} from "./titles"

@Component({
  selector: 'app-games-legacy',
  templateUrl: './games-legacy.component.html',
  styleUrls: ['./games-legacy.component.css']
})
export class GamesLegacyComponent implements OnInit {

  titles: any = []
  titles2: any = []

  constructor() {
    for(var x of TITLES){
      console.log(x)
      this.titles.push(x)
    }
    for(var y of TITLES2){
      console.log(y)
      this.titles2.push(y)
    }
   }

  ngOnInit(): void {
  }

}
