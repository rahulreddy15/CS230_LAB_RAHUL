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
import { CareersOpportunitiesComponent } from './careers-opportunities/careers-opportunities.component';
import { CareersLifeAtComponent } from './careers-life-at/careers-life-at.component';
import { CareersBenefitsComponent } from './careers-benefits/careers-benefits.component';
import { CareersAwardsComponent } from './careers-awards/careers-awards.component';
import { CareersContactComponent } from './careers-contact/careers-contact.component';
import { NewsMainContentComponent } from './news-main-content/news-main-content.component';
import { NewsFeaturedArticleComponent } from './news-featured-article/news-featured-article.component';
import { NewsRecentComponent } from './news-recent/news-recent.component';
import { NewsCategoriesComponent } from './news-categories/news-categories.component';
import { environment } from '../environments/environment';
import { CommunityJoinInComponent } from './community-join-in/community-join-in.component';
import { CommunityTwitchComponent } from './community-twitch/community-twitch.component';
import { CommunityNewsComponent } from './community-news/community-news.component';
import { CommunityFollowLatestComponent } from './community-follow-latest/community-follow-latest.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FeaturedService } from './featured/featured.service';
import { AddTitleComponent } from './add-title/add-title.component';
import { FormsModule } from '@angular/forms';

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
    CardsComponentComponent,
    CareersOpportunitiesComponent,
    CareersLifeAtComponent,
    CareersBenefitsComponent,
    CareersAwardsComponent,
    CareersContactComponent,
    NewsMainContentComponent,
    NewsFeaturedArticleComponent,
    NewsRecentComponent,
    NewsCategoriesComponent,
    CommunityJoinInComponent,
    CommunityTwitchComponent,
    CommunityNewsComponent,
    CommunityFollowLatestComponent,
    AddTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [FeaturedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
