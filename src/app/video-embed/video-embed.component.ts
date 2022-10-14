import {
  AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild
} from '@angular/core';

@Component({
  selector: 'app-video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.css']
})
export class VideoEmbedComponent implements AfterViewInit, OnDestroy {
  @ViewChild('demoYouTubePlayer') demoYouTubePlayer: ElementRef<HTMLDivElement>;

  apiLoaded = false;
  // videoId = "Tsf5Wjb1uAM";
  @Input() videoId: string;
  width = window.innerWidth;
  height = window.innerHeight;

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  onResize = (): void => {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this._changeDetectorRef.detectChanges();
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResize);
  }

}
