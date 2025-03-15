import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { ThemeModule } from '../@theme/theme.module';
import { PagesRoutingModule } from './pages-routing.module';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { WhyUsComponent } from './why-us/why-us.component';
import { TrainingComponent } from './training/training.component';
import { TrainingDetailComponent } from './training-detail/training-detail.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScheduleComponent } from './schedule/schedule.component';
import { HeroComponent } from './components/hero/hero.component';
import { MissionComponent } from './components/mission/mission.component';
import { TeamComponent } from './components/team/team.component';
import { OfferComponent } from './components/offer/offer.component';
import { NewsComponent } from './components/news/news.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { MissionDetailsComponent } from './mission-details/mission-details.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent,
    AboutComponent,
    WhyUsComponent,
    TrainingComponent,
    TrainingDetailComponent,
    ContactComponent,
    ScheduleComponent,
    HeroComponent,
    MissionComponent,
    TeamComponent,
    OfferComponent,
    NewsComponent,
    TestimonialsComponent,
    MissionDetailsComponent,
    NewsDetailsComponent,
    ArticleDetailComponent,
  ],
  imports: [
    CommonModule,
    ThemeModule,
    PagesRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class PagesModule {}
