import { Component, OnInit } from '@angular/core';
import { FeaturedService } from '../featured/featured.service';
import { TitleModel } from '../featured/title.model';

@Component({
  selector: 'app-add-title',
  templateUrl: './add-title.component.html',
  styleUrls: ['./add-title.component.css']
})
export class AddTitleComponent implements OnInit {

  constructor(private featuredService: FeaturedService) { }

  ngOnInit(): void {
  }

  addTitle(game: TitleModel) {
    // console.log(game)
    this.featuredService.addTitle(game);
  }

}
