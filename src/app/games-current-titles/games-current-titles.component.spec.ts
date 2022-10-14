import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesCurrentTitlesComponent } from './games-current-titles.component';

describe('GamesCurrentTitlesComponent', () => {
  let component: GamesCurrentTitlesComponent;
  let fixture: ComponentFixture<GamesCurrentTitlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesCurrentTitlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesCurrentTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
