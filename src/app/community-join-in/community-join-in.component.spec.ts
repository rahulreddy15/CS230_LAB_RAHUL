import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityJoinInComponent } from './community-join-in.component';

describe('CommunityJoinInComponent', () => {
  let component: CommunityJoinInComponent;
  let fixture: ComponentFixture<CommunityJoinInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityJoinInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityJoinInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
