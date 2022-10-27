import { Component, OnInit } from '@angular/core';
import { FeaturedService } from './featured.service';
import { TitleModel } from './title.model';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  
  featured: TitleModel[] = []
  
  constructor(private featuredService: FeaturedService) {
  }

  ngOnInit(): void {
    this.featuredService.getTitles().subscribe((data: TitleModel[]) => {
      console.log("Fetching titles")
      console.log(data)
      for(var x of data){
        console.log(x)
        this.featured.push(x)
      }
    })
  }

}
