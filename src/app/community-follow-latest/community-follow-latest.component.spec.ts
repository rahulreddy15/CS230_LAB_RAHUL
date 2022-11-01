import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityFollowLatestComponent } from './community-follow-latest.component';

describe('CommunityFollowLatestComponent', () => {
  let component: CommunityFollowLatestComponent;
  let fixture: ComponentFixture<CommunityFollowLatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityFollowLatestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityFollowLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
