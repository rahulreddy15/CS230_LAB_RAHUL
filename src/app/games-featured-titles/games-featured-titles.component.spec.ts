import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesFeaturedTitlesComponent } from './games-featured-titles.component';

describe('GamesFeaturedTitlesComponent', () => {
  let component: GamesFeaturedTitlesComponent;
  let fixture: ComponentFixture<GamesFeaturedTitlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesFeaturedTitlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesFeaturedTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
