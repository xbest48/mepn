import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Article } from '../utils/models';
import { ArticleComponent } from "./componsants/article/article.component";
import { ApiService } from './utils/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'mepn2';

  api = inject(ApiService);
  articles: Article[] = [];

  ngOnInit(): void {
    this.api.getArticles().subscribe({
      next: res => this.articles = res
    });
  }

}
