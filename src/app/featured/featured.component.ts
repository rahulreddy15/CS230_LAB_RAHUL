import { Component, OnInit } from '@angular/core';
import { TitleModel } from './title.model';
import {TITLES} from "./titles"

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  
  featured: TitleModel[] = []
  
  constructor() {
    for(var x of TITLES){
      console.log(x)
      this.featured.push(x)
    }
  }

  ngOnInit(): void {
  }

}
