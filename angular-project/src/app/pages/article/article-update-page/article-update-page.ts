import { Component } from '@angular/core';
import {ArticleService} from '../../../services/article/article-service';
import {ActivatedRoute, Router} from '@angular/router';
import {Article} from '../../../classes/article';
import {FormsModule} from '@angular/forms';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-article-update-page',
  imports: [FormsModule,
    CommonModule,],
  templateUrl: './article-update-page.html',
  styleUrl: './article-update-page.scss'
})
export class ArticleUpdatePage {

  public article:any;

  public id : string = "";

  public error:string = '';

  constructor(private articleService: ArticleService,
              private route: ActivatedRoute,
              private router: Router
) {}


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || "";

    if (this.id) {
      this.articleService.getById(this.id).subscribe({
        next: data => {
          if (data.code == '200') {
            this.article = data.data;

          }
        }
      });
    }
    else{
      this.article = new Article();
    }

  }

  onClickUpdate(newArticle:any){

    if (this.article.imgPath === "") {
    this.article.imgPath = "https://img.freepik.com/vecteurs-libre/lignes-grille-horizontales-abstraites-dans-conception-graphique-style-graphique_1017-39918.jpg?semt=ais_hybrid&w=740&q=80";
    }

    this.articleService.save(this.article).subscribe({
      next: data => {
        if (data.code == '200') {

          if(this.id === ""){
            this.router.navigate(['/articles']);
          }
          else{
            this.router.navigate(['/manage']);
          }


        }
        else{
          this.error = data.message;
        }
      }
    });
  }

}
