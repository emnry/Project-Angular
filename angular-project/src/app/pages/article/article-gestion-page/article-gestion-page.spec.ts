import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleGestionPage } from './article-gestion-page';
import { HttpClientModule } from '@angular/common/http';
import {NgStyle} from '@angular/common';

describe('ArticleGestionPage', () => {
  let component: ArticleGestionPage;
  let fixture: ComponentFixture<ArticleGestionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleGestionPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleGestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
