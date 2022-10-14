import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersAwardsComponent } from './careers-awards.component';

describe('CareersAwardsComponent', () => {
  let component: CareersAwardsComponent;
  let fixture: ComponentFixture<CareersAwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersAwardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareersAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
