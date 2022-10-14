import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersLifeAtComponent } from './careers-life-at.component';

describe('CareersLifeAtComponent', () => {
  let component: CareersLifeAtComponent;
  let fixture: ComponentFixture<CareersLifeAtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersLifeAtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareersLifeAtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
