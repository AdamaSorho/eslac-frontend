import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { NewsItem } from 'src/app/models/news-item';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
})
export class ArticleDetailComponent implements OnInit {
  article?: NewsItem;
  relatedArticles: NewsItem[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => this.newsService.getArticleById(+params['id']))
      )
      .subscribe((article) => {
        if (article) {
          this.article = article;
          this.loadRelatedArticles(article.category, article.id);
        } else {
          this.router.navigate(['/news']);
        }
      });
  }

  loadRelatedArticles(category: string, currentId: number): void {
    this.newsService
      .getRelatedArticles(category, currentId)
      .subscribe((articles) => (this.relatedArticles = articles));
  }

  navigateToArticle(id: number): void {
    this.router.navigate(['/news/article', id]);
  }

  goBack(): void {
    this.location.back();
  }
}
