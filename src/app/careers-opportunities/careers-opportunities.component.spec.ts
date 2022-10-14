import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersOpportunitiesComponent } from './careers-opportunities.component';

describe('CareersOpportunitiesComponent', () => {
  let component: CareersOpportunitiesComponent;
  let fixture: ComponentFixture<CareersOpportunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersOpportunitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareersOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
