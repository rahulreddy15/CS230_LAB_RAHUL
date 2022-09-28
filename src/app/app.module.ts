import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FooterTwoComponent } from './footer-two/footer-two.component';
import { VideoEmbedComponent } from './video-embed/video-embed.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { VisionComponent } from './vision/vision.component';
import { FeaturedComponent } from './featured/featured.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FooterTwoComponent,
    VideoEmbedComponent,
    VisionComponent,
    FeaturedComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
