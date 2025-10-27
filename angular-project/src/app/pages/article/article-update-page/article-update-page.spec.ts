import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleUpdatePage } from './article-update-page';

describe('ArticleUpdatePage', () => {
  let component: ArticleUpdatePage;
  let fixture: ComponentFixture<ArticleUpdatePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleUpdatePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
