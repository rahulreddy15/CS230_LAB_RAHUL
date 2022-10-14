import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersBenefitsComponent } from './careers-benefits.component';

describe('CareersBenefitsComponent', () => {
  let component: CareersBenefitsComponent;
  let fixture: ComponentFixture<CareersBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersBenefitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareersBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
