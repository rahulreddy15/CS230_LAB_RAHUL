import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityNewsComponent } from './community-news.component';

describe('CommunityNewsComponent', () => {
  let component: CommunityNewsComponent;
  let fixture: ComponentFixture<CommunityNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
