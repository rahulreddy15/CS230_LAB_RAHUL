import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFeaturedArticleComponent } from './news-featured-article.component';

describe('NewsFeaturedArticleComponent', () => {
  let component: NewsFeaturedArticleComponent;
  let fixture: ComponentFixture<NewsFeaturedArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsFeaturedArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsFeaturedArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
