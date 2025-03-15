import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsItem } from 'src/app/models/news-item';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  recentNews: NewsItem[] = [];

  constructor(private router: Router, private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe((news) => {
      this.recentNews = news.slice(0, 3); // Show only 3 most recent news items
    });
  }

  navigateToNews(): void {
    this.router.navigate(['/news']);
  }
}
