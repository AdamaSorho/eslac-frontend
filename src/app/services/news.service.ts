import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewsItem } from '../models/news-item';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private mockNews: NewsItem[] = [
    {
      id: 1,
      title: 'New Training Programs Launch',
      excerpt: 'Exciting new courses starting this summer',
      content: `<p>We are thrilled to announce our new series of professional development courses designed to meet the evolving needs of today's workforce. These programs have been carefully crafted to provide practical, hands-on experience while incorporating the latest industry trends and best practices.</p>
                <h2>Program Highlights</h2>
                <p>Our new curriculum includes:</p>
                <ul>
                  <li>Advanced Digital Marketing Strategies</li>
                  <li>Data Analytics for Business Decision Making</li>
                  <li>Leadership in the Digital Age</li>
                  <li>Sustainable Business Practices</li>
                </ul>
                <p>Each course is designed to provide immediate value while building long-term capabilities...</p>`,
      category: 'Training',
      date: '2025-03-15',
      imageUrl: '/assets/images/our_offer.jpg',
      author: 'ESLAC Team',
      authorRole: 'Training Department',
      authorImage: '/assets/images/our_offer.jpg',
      readingTime: '5 min read',
    },
    // Add more detailed mock articles...
  ];

  getNews(): Observable<NewsItem[]> {
    return of(this.mockNews);
  }

  getArticleById(id: number): Observable<NewsItem | undefined> {
    return of(this.mockNews.find((article) => article.id === id));
  }

  getRelatedArticles(
    category: string,
    currentId: number
  ): Observable<NewsItem[]> {
    return of(
      this.mockNews
        .filter(
          (article) => article.category === category && article.id !== currentId
        )
        .slice(0, 3)
    );
  }

  getCategories(): string[] {
    return [...new Set(this.mockNews.map((news) => news.category))];
  }
}
