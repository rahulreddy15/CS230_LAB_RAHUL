import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.css']
})
export class VideoEmbedComponent implements OnInit {

  apiLoaded = false;
  videoId = "Tsf5Wjb1uAM";
  width = window.innerWidth;
  height = window.innerHeight;

  constructor() { }

  ngOnInit(): void {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }
}
