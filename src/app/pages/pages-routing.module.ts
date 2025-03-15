import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { AboutComponent } from './about/about.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { TrainingComponent } from './training/training.component';
import { TrainingDetailComponent } from './training-detail/training-detail.component';
import { ContactComponent } from './contact/contact.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { MissionDetailsComponent } from './mission-details/mission-details.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'team',
        component: AboutComponent,
      },
      {
        path: 'why-us',
        component: WhyUsComponent,
      },
      {
        path: 'training',
        component: TrainingComponent,
      },
      {
        path: 'training/:type',
        component: TrainingDetailComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'schedule',
        component: ScheduleComponent,
      },
      {
        path: 'mission',
        component: MissionDetailsComponent,
      },
      {
        path: 'news',
        component: NewsDetailsComponent,
      },
      {
        path: 'news/article/:id',
        component: ArticleDetailComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
