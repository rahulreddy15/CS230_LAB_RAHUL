import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesLegacyComponent } from './games-legacy.component';

describe('GamesLegacyComponent', () => {
  let component: GamesLegacyComponent;
  let fixture: ComponentFixture<GamesLegacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesLegacyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesLegacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
