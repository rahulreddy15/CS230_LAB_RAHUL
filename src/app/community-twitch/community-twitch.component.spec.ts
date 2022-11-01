import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityTwitchComponent } from './community-twitch.component';

describe('CommunityTwitchComponent', () => {
  let component: CommunityTwitchComponent;
  let fixture: ComponentFixture<CommunityTwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityTwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityTwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
