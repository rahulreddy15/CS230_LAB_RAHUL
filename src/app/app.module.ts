import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { GamesComponent } from './games/games.component';
import { SupportComponent } from './support/support.component';
import { CommunityComponent } from './community/community.component';
import { CareersComponent } from './careers/careers.component';
import { NewsComponent } from './news/news.component';
import { MyInfoComponent } from './my-info/my-info.component';
import { HomeComponent } from './home/home.component';
import { GamesFeaturedTitlesComponent } from './games-featured-titles/games-featured-titles.component';
import { GamesCurrentTitlesComponent } from './games-current-titles/games-current-titles.component';
import { GamesNewsComponent } from './games-news/games-news.component';
import { GamesLegacyComponent } from './games-legacy/games-legacy.component';
import { CardsComponentComponent } from './cards-component/cards-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FooterTwoComponent,
    VideoEmbedComponent,
    VisionComponent,
    FeaturedComponent,
    CardsComponent,
    GamesComponent,
    SupportComponent,
    CommunityComponent,
    CareersComponent,
    NewsComponent,
    MyInfoComponent,
    HomeComponent,
    GamesFeaturedTitlesComponent,
    GamesCurrentTitlesComponent,
    GamesNewsComponent,
    GamesLegacyComponent,
    CardsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
