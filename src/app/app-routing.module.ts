import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersComponent } from './careers/careers.component';
import { CommunityComponent } from './community/community.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  {
    path: "", redirectTo: '/home', pathMatch: "full"
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'games', component: GamesComponent
  },
  {
    path: 'careers', component: CareersComponent
  },
  {
    path: 'news', component: NewsComponent
  },
  {
    path: 'community', component: CommunityComponent
  },
  {
    path: 'support', component: SupportComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
