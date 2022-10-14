import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMainContentComponent } from './news-main-content.component';

describe('NewsMainContentComponent', () => {
  let component: NewsMainContentComponent;
  let fixture: ComponentFixture<NewsMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsMainContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
