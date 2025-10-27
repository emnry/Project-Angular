import {Component} from '@angular/core';
import {NgStyle} from '@angular/common';
import {ArticleService} from '../../../services/article/article-service';
import {ActivatedRoute} from '@angular/router';
import {CommonModule} from '@angular/common';
import {Article} from '../../../classes/article';

@Component({
  selector: 'app-article-page',
  imports: [CommonModule],
  templateUrl: './article-page.html',
  styleUrl: './article-page.scss'
})
export class ArticlePage {
  public article?: Article;
  private id!: string;

  constructor(private ArticleService: ArticleService,
              private route: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.ArticleService.getById(this.id).subscribe({
      next: data => {
        if (data.code == '200') {
          this.article = data.data;
        }
      }
    });
  }

}
