import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsItem } from 'src/app/models/news-item';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss'],
})
export class NewsDetailsComponent implements OnInit {
  news: NewsItem[] = [];
  filteredNews: NewsItem[] = [];
  categories: string[] = [];
  selectedCategory: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 9;
  totalPages: number = 1;

  constructor(
    private newsService: NewsService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe((news) => {
      this.news = news;
      this.filteredNews = news;
      this.categories = this.newsService.getCategories();
      this.calculateTotalPages();
    });
  }

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.filteredNews = this.news.filter((item) => item.category === category);
    this.currentPage = 1;
    this.calculateTotalPages();
  }

  clearFilter(): void {
    this.selectedCategory = '';
    this.filteredNews = this.news;
    this.currentPage = 1;
    this.calculateTotalPages();
  }

  navigateToArticle(id: number): void {
    this.router.navigate(['/news/article', id]);
  }

  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.filteredNews.length / this.itemsPerPage);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  goBack(): void {
    this.location.back();
  }
}
