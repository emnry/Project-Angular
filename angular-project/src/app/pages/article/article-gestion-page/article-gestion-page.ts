import {Component, OnInit} from '@angular/core';
import {ArticleService} from '../../../services/article/article-service';
import {HttpClientModule} from '@angular/common/http';
import {Router, RouterLink} from '@angular/router';
import {Article} from '../../../classes/article';

@Component({
  selector: 'app-article-gestion-page',
  imports: [
    HttpClientModule,
    RouterLink
  ],
  templateUrl: './article-gestion-page.html',
  styleUrl: './article-gestion-page.scss'
})

export class ArticleGestionPage implements OnInit {

  public articles: Article[] = [];

  constructor(private articleService: ArticleService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.articleService.getAll().subscribe({
      next: data => {
        if (data.code == '200') {
          this.articles = data.data;
        }
      },
      error: err => {
        console.error('Erreur lors du chargement des articles', err);
      }
    });
  }

  refreshArticles(): void {
    this.loadArticles();
  }

  onClickDelete(id: string) {

    this.articleService.delete(id).subscribe({
      next: data => {
        if (data.code == '200') {
          this.refreshArticles();
        }
      }
    });

  }
}
